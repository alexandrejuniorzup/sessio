const middle = require("../../../Middlewares/requestType");

describe("requestType middleware", () => {
    describe("#getRequestType", () => {
        it("Should log request type", (done) => {
            let callback = () => {};
            global.console.log = jest.fn(() => {});
            let req = {
                method: "GET"
            };
            middle.getRequestType(req,{}, callback);
            expect(global.console.log).toHaveBeenCalledWith("Request Type: GET");
            done()
        })
    });
});