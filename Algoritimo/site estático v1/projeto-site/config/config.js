module.exports = {
  production: {
    username: 'HealthAnalytics',
    password: '',
    database: 'bd-grupo4',
    host: 'db-grupo4.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 
