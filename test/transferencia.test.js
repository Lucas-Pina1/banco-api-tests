const request = require("supertest");
const { expect } = require("chai");
require("dotenv").config();
const { obterToken } = require("../helpers/autenticacao");
const postTransferencias = require("../fixtures/postTransferencias.json");

describe("Transferências", () => {
  describe("POST /transferencias", () => {
    let token;

    beforeEach(async () => {
      token = await obterToken("julio.lima", "123456");
    });

    it("Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de 10 reais", async () => {
      const bodyTransferencia = { ...postTransferencias };

      const response = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`)
        .send(bodyTransferencia);

      expect(response.status).to.equal(201);
    });

    it("Deve retornar falha com 422 quando o valor da transferência for menor que 10 reais", async () => {
      const bodyTransferencia = { ...postTransferencias };
      bodyTransferencia.valor = 7;

      const response = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`)
        .send(bodyTransferencia);

      expect(response.status).to.equal(422);
    });
  });
});
