const request = require("supertest");
const postLogin = require("../fixtures/postLogin.json");

const obterToken = async (user, password) => {
  const bodyLogin = { ...postLogin };

  const responseDoLogin = await request(process.env.BASE_URL)
    .post("/login")
    .set("Content-Type", "application/json")
    .send(bodyLogin);

  return responseDoLogin.body.token;
};

module.exports = { obterToken };
