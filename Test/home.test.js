let request = require('supertest')
, app = require('../controllers/myItems.js')

describe("homepage", function() {
    it("should have HTML button on home page", function(done) {
        request(app).get("/home")
        .expect(200)
        .expect(/HTML/)
        done();
    })
})
