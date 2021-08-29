const Person = require("./Person")
// @ponicode
describe("_incrementAge", () => {
    let inst

    beforeEach(() => {
        inst = new Person.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst._incrementAge()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_toggleEmail", () => {
    let inst

    beforeEach(() => {
        inst = new Person.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst._toggleEmail()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_toggleAge", () => {
    let inst

    beforeEach(() => {
        inst = new Person.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst._toggleAge()
        }
    
        expect(callFunction).not.toThrow()
    })
})
