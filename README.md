# koa-router-multer
Wrapper of koa-multer, for koa-router

[license-img]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square

## Install

```sh
$ npm install --save koa-router-multer
```

## Usage

Import the module
```js
import multer from 'koa-router-multer';
```

Set the upload folder for file uploads
```js
var upload = multer({ dest: 'uploads/' });
```
Example of resource 
```js
route.post('/upload', upload.single('file'), function * (next) {
  var filename = this.req.file.filename;
  var mimeType = this.req.file.mimetype;
  ...
  ...
});
```



See more, [koa-multer](https://github.com/koa-modules/multer)

## License

  [MIT](LICENSE)
