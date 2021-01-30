//this file will handle connection logic to mongodb database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true }).then(() => {
    console.log("connected to mongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attemption to connect to mongodb")
    console.log(e);
});

//to prevent deprecation warnings (from mongodb native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
};