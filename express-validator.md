## Express-validator in NodeJS
* 1st step:
```node
// Install express-validator
npm i express-validator

```
* 2nd step: include the express-validator module in route JS file
```node

cosnt { body, validationParser, matchedData } = require('express-validator')
// above body is for request body data, 
// validationParser is used for error handing,
// matchedData is used for parse the data after validation matched

```
