const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin123@ds129386.mlab.com:29386/api', {useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true} , (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;