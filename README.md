# koa-router-multer
Wrapper of koa-multer, for koa-router.

Tested with Koa 2.x, should work with Koa 1.x as well.

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b9f47f9a80c24ce39a514f9b2d6673b2)](https://app.codacy.com/app/hirako2000/koa-router-multer?utm_source=github.com&utm_medium=referral&utm_content=hirako2000/koa-router-multer&utm_campaign=Badge_Grade_Dashboard)
[![Build Status](https://travis-ci.org/hirako2000/koa-router-multer.svg?branch=master)](https://travis-ci.org/hirako2000/koa-router-multer)
[![Dependency Status](https://david-dm.org/hirako2000/koa-router-multer.svg)](https://david-dm.org/hirako2000/koa-router-multer)
[![devDependency Status](https://david-dm.org/hirako2000/koa-router-multer/dev-status.svg)](https://david-dm.org/hirako2000/koa-router-multer#info=devDependencies)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/hirako2000/koa-router-multer/blob/master/LICENSE)

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
