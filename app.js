require('express-async-errors');
const express = require('express');
const app = express();
const config = require('config');

require('./startup/db')();
require('./startup/error_handled')();
require('./startup/config')(express,app);

app.get('/',(req,res)=>{res.send('home');});
app.use('/api', require('./src/routes'));

app.listen(config.get('port'), ()=>{
    console.log('Server is running o port', config.get('port'));
});