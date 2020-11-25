CREATE DATABASE projeto;

USE projeto;

CREATE TABLE empresa(
    idEmpresa INT NOT NULL PRIMARY KEY,
    nomeEmpresa VARCHAR(45) NOT NULL,
    plano VARCHAR(45) NOT NULL,
    rua VARCHAR(45) NOT NULL,
    cep CHAR(9) NOT NULL,
    numero INT NOT NULL,
    cnpj CHAR(14) NOT NULL
);


CREATE TABLE usuario(
    idUsuario INT  PRIMARY KEY NOT NULL,
    nomeUsuario NVARCHAR(45),
    rf_id VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    senha VARCHAR(45) NOT NULL,
    adm TINYINT,
    fk_Empresa INT REFERENCES empresa(idEmpresa)
);

CREATE TABLE totem (
    idTotem INT PRIMARY KEY NOT NULL,
    fk_Empresa INT REFERENCES empresa(idEmpresa)
);

CREATE TABLE medicao(
    fk_Usuario INT PRIMARY KEY REFERENCES usuario(idUsuario),
    temperatura CHAR(4),
    dataMedicao DATE NOT NULL,
    fk_Totem INT REFERENCES totem(idTotem)
);