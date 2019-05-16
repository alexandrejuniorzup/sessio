const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

let Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    }
});

UserSchema.pre('save', async function(next){
    var user = this;
    if(!user.isModified("password")) return next();
    const hash =  await bcrypt.hash(this.password, 10);
    this.password = hash;
    next()
})

UserSchema.methods.checkPassword = (password, next) => {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if(err) return next(err);
        next(isMatch);
    });
}

module.exports = mongoose.model('User', UserSchema);
