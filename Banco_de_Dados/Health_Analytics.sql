create database Health_Analytics;
use Health_Analytics;

-- Criação da tabela Empresa
create table empresa (
	idEmpresa int primary key auto_increment,
    nomeEmpresa varchar(45),
    plano varchar(45),
    rua varchar(45),
    cep char(9),
    numero int,
    cnpj char(14)
)auto_increment = 1000;

-- Criação da tabela Usuario
create table usuario (
	idUsuario int primary key auto_increment,
    nomeUsuario varchar(45),
    email varchar(45),
    senha varchar(45),
    adm tinyint,
    fk_Empresa int, foreign key (fk_Empresa) references empresa(idEmpresa)
);

-- Criação da tabela Totem
create table totem (
	idTotem int primary key auto_increment,
    fk_Empresa int, foreign key (fk_Empresa) references empresa(idEmpresa)
)auto_increment = 10000;

-- Criação da tabela Medição
create table medicao (
 	fk_Usuario int primary key, foreign key (fk_Usuario) references usuario(idUsuario),
    temperatura char(4),
    dataMedição date,
    fk_Totem int, foreign key (fk_Totem) references totem(idTotem)
);
    
    