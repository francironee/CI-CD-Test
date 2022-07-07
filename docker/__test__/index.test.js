const app = require("../index")

test("Tendria que devolver 200", async () => {
    const response = await supertest.get("/")
    expect(response.statusCode).toBe(200)
})