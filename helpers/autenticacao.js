const request = require("supertest");

const obterToken = async (user, password) => {
  const responseDoLogin = await request(process.env.BASE_URL)
    .post("/login")
    .set("Content-Type", "application/json")
    .send({
      username: user,
      senha: password,
    });

  return responseDoLogin.body.token;
};

module.exports = { obterToken };
