const ctrl = require("../../../Controllers/index");


describe("index Controller", () => {

    afterEach(()  => {
        jest.resetAllMocks();
    });

    describe("#success", () => {
        it("Should...", (done) => {
            let res = {
                send: () => {}
            };
            res.send = jest.fn(() => Promise.resolve());
            ctrl.success({}, res)
                .then(() => {
                    expect(res.send).toHaveBeenCalledWith("Welcome");
                    done()
                });
        });
    });

    describe("#failure", () => {

        it("Should...", (done) => {
            let res = {
                send: () => {}
            };
            res.send = jest.fn(() => Promise.resolve());
            ctrl.failed({}, res)
                .then(() => {
                    expect(res.send).toHaveBeenCalledWith("Error");
                    done()
                })
        })
    });

    describe("#glog", () => {
        it("should", (done) => {
            let res = {
                send: () => {}
            };
            res.send = jest.fn( () => Promise.resolve());
            ctrl.glog({}, res)
                .then( () => {
                    expect(res.send).toHaveBeenCalledWith("Entrei");
                    done()
                })
        })
    })
});