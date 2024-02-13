const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email : String,
    img : [{
        type : String
    }]
})
const user = mongoose.model("user",userSchema)

export default user;