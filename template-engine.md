# Template Engine in NodeJS
## PUG 
* Pug is a high performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers.
#### Package Installation
```node
$ npm i pug or $ npm install pug or $ npm install pug --save (--save if NPM < 5.0 version)
```
#### After or Before installation set some required configuration below
* View Engine: Set view template engine which engine going to use in this project
#### Ex:
```node
app.set('view engine', 'pug')
```
* View Folder: Create a view folder any where in your project to render pug code. Because all pug code written in by-default in view folder
#### Ex:
```node
// set the location of view folder to render file 
// without .extention ex- index.pug now only index and .pug removed after below code
app.set('view', '/public/views'); 
// if pug code is under public/views folder
```


