function chat(req,res) {
    return res.render("chat.pug", { username: "alexandre" })
}

module.exports = { chat }