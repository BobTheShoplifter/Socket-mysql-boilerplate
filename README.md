# Socket-mysql-boilerplate

Easy boilerplate for socket.io

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
	socketport: 8443,
	socketip: '', //This can be blank but reccomended to set as the server ip
  mysql: {
   host: '', //Database ip
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

## Authors

* **Bob The Shoplifter* - *Creato*

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.
