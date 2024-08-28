const login = require("./login")

test("Login Test : ", () => {

        expect(login(null, null))
                .toBe(null)

        expect(login("", ""))
                .toBe(null)

        expect(login("null", "null"))
                .toBe(false)

        expect(login("admin", "min"))
                .toBe(false)

        expect(login("admin", "admin"))
                .toBe(true)


})


// use can use puppeteer for frontend automation testing
// it used mock chromium browser to automate testing.