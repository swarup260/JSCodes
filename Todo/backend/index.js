/* Include Dependencies */
const Express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./api/config');
/* Express App */
const app = Express();

/* Middlewares */
app.use(bodyParser.json());

/* Routers */





/* Test Routes */
app.get('/', async (request, response) =>  await response.status(200).json({'status' : true , message : 'Express Working' }));

/* Run the Express */
app.listen(config.PORT, () => console.log(`Server Running At PORT ${config.PORT} `) );

/* Mongoose Setting */
mongoose.connect(
    config.MONGODB_URI,{
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true, 
    },
    (error , db) => {
        if(error) throw error;
        console.log(`MongoDB Running At PORT ${config.MONGODB_PORT} `);
        
    }
)

mongoose.Promise = global.Promise;
