# Banco API Tests

## 🎯 Objetivo
Este projeto tem como objetivo realizar a automação de testes da API Rest do projeto [Banco API](https://github.com/juliodelimas/banco-api). O projeto foi construído para validar de forma automatizada o comportamento e as regras de negócio expostas pelos endpoints da aplicação.

## 🛠️ Stack Utilizada
O projeto foi desenvolvido em [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) e faz uso de diversas bibliotecas para estruturação, execução e asserção dos testes:

- **[Mocha](https://mochajs.org/)**: Framework de testes para realizar a estruturação e execução dos cenários de teste.
- **[Supertest](https://www.npmjs.com/package/supertest)**: Módulo utilizado para testar de forma fluida e fácil as requisições HTTP da nossa API.
- **[Chai](https://www.chaijs.com/)**: Biblioteca de asserção do tipo BDD/TDD, utilizada para validar se os resultados obtidos batem com os esperados.
- **[Mochawesome](https://www.npmjs.com/package/mochawesome)**: Biblioteca responsável por gerar relatórios bonitos e detalhados em HTML para a os testes do Mocha.
- **[Dotenv](https://www.npmjs.com/package/dotenv)**: Módulo para carregamento de variáveis de ambiente do arquivo `.env`.

## 📁 Estrutura de Diretórios
A estrutura do projeto está organizada da seguinte maneira:

```text
banco-api-tests/
│
├── fixtures/             # Massa de dados estática usada durante os testes
├── helpers/              # Scripts utilitários e funções compartilhadas, como autenticação
├── mochawesome-report/   # Diretório onde os relatórios HTML de teste são gerados automaticamente
├── test/                 # Diretório contendo todos os arquivos de especificação de teste (*.test.js)
├── .env                  # Variáveis de ambiente locais (precisa ser criado, não versionado)
├── package.json          # Relação de dependências do projeto e scripts npm
└── package-lock.json     # Árvore de dependências trancadas pelo NPM
```

## ⚙️ Configuração (Arquivo `.env`)
Antes de executar os testes, é primordial que as variáveis de ambiente base já estejam definidas no seu projeto.
Crie um arquivo na raiz do projeto chamado `.env` no mesmo nível do `package.json`. 

O arquivo precisará conter o seguinte formato com a variável `BASE_URL`:

```env
# Insira a URL base da API a qual deseja realizar os testes
BASE_URL=http://localhost:3000
```
*(Altere `http://localhost:3000` pela URL correspondente do serviço da API)*

## 🚀 Como Executar

### 1. Instalar as dependências do projeto
```bash
npm install
```

### 2. Executar os Testes e Gerar os Relatórios
A execução principal que roda toda a suíte de testes de uma vez e gera as evidências (relatório HTML):
```bash
npm run test
```
*(Este comando buscará por todos os arquivos dentro do diretório `test/` terminados em `.test.js` e acionará o Mochawesome para realizar a geração da documentação dos testes e assertividade deles. Esses relatórios poderão ser abertos através do navegador acessando o respectivo arquivo \`.html\` gerado na pasta \`mochawesome-report/\`)*
