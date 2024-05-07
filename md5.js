import SparkMD5 from 'spark-md5'

export default class SimpleMd5 {

    /*
     *  file  文件
     *  handleFileMd5 回调函数，处理得到的Md5
     *  handleProgress 回调函数，处理得到的进度
     */
    getFileMd5(file, handleFileMd5) {
        this.progress = 0;
        let currentChunk = 0;
        const chunkSize = 2 * 1024 * 1024;
        const blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
        const chunks = Math.ceil(file.size / chunkSize);
        const spark = new SparkMD5.ArrayBuffer();
        const fileReader = new FileReader();

        function loadNext() {
            let start = currentChunk * chunkSize;
            let end = start + chunkSize >= file.size ? file.size : start + chunkSize;
            fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
        }

        loadNext();

        fileReader.onloadend = e => {
            spark.append(e.target.result);
            currentChunk++;
            this.progress = currentChunk / chunks;

            if (currentChunk < chunks) {
                loadNext();
            } else {
                handleFileMd5(spark.end(), ...args);
            }
        }
    }
}
