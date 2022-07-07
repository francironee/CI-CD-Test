
const app = require("../index.js")
const supertest = require("supertest")(app)

test("Tendria que devolver 200", async () => {
    const response = await supertest.get("/")
    expect(response.statusCode).toBe(200)
})