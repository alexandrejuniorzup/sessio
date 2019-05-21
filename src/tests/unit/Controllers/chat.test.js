const {chat}  = require('../../../Controllers/chat');


describe("chat Controller", () => {
    describe("#chat", () => {
        it("Should...", (done) => {
            let res = {
                render: () => {}
            };
            res.render = jest.fn(() => {});
            let req = {};
            chat(req,res);
            expect(res.render).toHaveBeenCalled();
            done()
        })
    })
});