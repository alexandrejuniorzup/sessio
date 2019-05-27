function chat(req, res) {
    return res.render("chat.pug", {
        username: req.user.name
    })
}

module.exports = {
    chat
};