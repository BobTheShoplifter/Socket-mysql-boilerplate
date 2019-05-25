# Socket-mysql-boilerplate

Easy boilerplate for socket.io using express

### Installing

A step by step series of examples that tell you how to get the socket server running

3 basic steps


**Install dependencies**
```
npm i
```
**Edit your config.js**

```
module.exports = {
	socketport: 8443, // Set the port of the socket server
	socketip: '', // This can be blank but reccomended to set as the server ip
  mysql: {
   host: '', // Database ip
   user: '', // Database username
   pass: '', // Database password
   database: '' // Database name
  }
}
```

**Start the socket server**
```
npm start main.js
```

**Enable SSL** (Optional)
Uncomment
```
var options = {
    key: fs.readFileSync('ssl.key'),
    cert: fs.readFileSync('ssl.crt'),
    requestCert: false
};
```
Replace

```var server = require('http').createServer(app);```

With

```server = var server = require('https').createServer(options, app);```

And upload your new ssl.key + ssl.crt
## Authors

* **Bob The Shoplifter* - *Creator*

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.
