var configuracoes = {
    server: "db-grupo4.database.windows.net",
    user: "HealthAnalytics",
    password: "#Gfgrupo4",
    database: "bd-grupo4",
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
