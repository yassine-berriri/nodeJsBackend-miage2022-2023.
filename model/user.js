let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let UserSchema = Schema({
    id: Number,
    email: String,
    password:String,
    isAdmin:Boolean
});


// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
//module.exports = mongoose.model('user', UserSchema);
const userModel = mongoose.model('users', UserSchema);
module.exports = userModel ;