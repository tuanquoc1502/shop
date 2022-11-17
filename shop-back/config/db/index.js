const mongoose = require('mongoose')
const pass = 'GyM34fG7VXzHRlNZ'
const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://tuanquoc:GyM34fG7VXzHRlNZ@cluster0.3jbdbow.mongodb.net/shopdb', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connect successfully!!!')
    } catch (errror) {
        console.log('connect failue')
    }
}

module.exports = {connect};