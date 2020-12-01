var configuracoes = {
    server: "SEU_BANCO_DE_DADOS.database.windows.net",
    user: "SEU_USUARIO",
    password: "SUA_SENHA",
    database: "SEU_BANCO_DE_DADOS",
    options: {
      encrypt: true,
      enableArithAbort: true,
    },
    pool: {
      max: 4,
      min: 1,
      idleTimeoutMillis: 90000,
      connectionTimeout: 5000,
    },
};

var sql = require("mssql");
sql.on("error", (err) => {
  console.error(`Erro de Conexão: ${err}`);
});

function conectar() {
  sql.close();
  return sql.connect(configuracoes);
}

module.exports = {
  conectar: conectar,
  sql: sql,
};
