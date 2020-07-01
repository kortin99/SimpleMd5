# SimpleMd5
存在库里，可能以后用得着
## Usage
需要先安装Spark Md5依赖
```shell
npm install --save spark-md5
```
在项目中使用
```js
import SimpleMd5 from "./SimpleMd5";

const fileMd5 = new SimpleMd5();

fileMd5.getFileMd5(file, md5 => {
    console.log("File Md5: ", md5);
});
```
