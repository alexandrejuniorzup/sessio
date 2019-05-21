const ctrl = require("../../../Controllers/register");
const service = require("../../../Services/register");


describe("register Controller", () => {

    describe("#createUser", () => {

        it("Should return user when", (done) => {
            let expectedResponse = {
                user: {
                    name: "Ale",
                    email: "ale@hotmail.com",
                    password: "123456"
                }
            };

            let req = {
                body: {
                    name: "Ale",
                    email: "ale@hotmail.com",
                    password: "123456"
                }
            };
            let res = {
                send:(x) => x
            };
            service.createUser = jest.fn( () => Promise.resolve(req.body));
            ctrl.createUser(req, res)
                .then( (result) => {
                    expect(result).toEqual(expectedResponse);
                    done();
                })
                .catch((err) => {
                    fail(err);
                    done();
                })
        })
    })
})