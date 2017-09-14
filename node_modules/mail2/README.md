## mail2 ![npm](https://badge.fury.io/js/x-mail.png)[![Build Status](https://travis-ci.org/song940/node-mail.svg?branch=master)](https://travis-ci.org/song940/node-mail)

mail for nodejs

### Installation

````
$ npm i mail2
````

### Example

````javascript
const smtp = require('mail2/smtp');

smtp.send({
  from: 'lsong@lsong.org',
  to  : 'x-mail@lsong.org',

  subject: 'Hello X-Mail',
  content: 'Test Mail'
}, function(err, reply){
  console.log(err, reply);
});
````
smtp server

```js
const smtp = require('mail2/smtp');

const PORT   = 25;
const server = new smtp.Server({}, function(message){
  console.log(message);
}).listen(PORT, function(err){
  console.log('smtp server is running at %s', PORT);
});
```

mime

```js
const MIME = require('mail2/mime');

var mime = new MIME();

mime.on('header', function(headers){
  console.log('headers', headers);
});

mime.on('body', function(body){
  console.log('body', body);
});

fs.createReadStream('mail.txt').pipe(mime);

```

### Contributing
- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3

### MIT license
Copyright (c) 2016 lsong

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
