const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/login-detail', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Database connected");
})
.catch((error) => {
    console.error("Database not connected", error);
});

const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = new mongoose.model("Collection1", loginSchema);

module.exports = collection;