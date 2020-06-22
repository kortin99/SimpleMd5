## Usage
```js
import SimpleMd5 from "./SimpleMd5";

const fileMd5 = new SimpleMd5();

fileMd5.getFileMd5(file, md5 => {
    console.log("File Md5: ", md5);
});
```
