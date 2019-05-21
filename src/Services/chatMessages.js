const db = require("../Database/database");
const Message = require('../Models/Message.js');

function saveMessage(msg) {
    var message = new Message();
    message.message = msg;
    return message.save();
}

function getMessages(){
    return Message.find();
}

function saveManyMessages(msgs){
    return Message.insertMany(msgs)
}

function deleteData(){
    return Message.deleteMany();
}

module.exports = { saveMessage, getMessages, saveManyMessages, deleteData };