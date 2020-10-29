create database Health_Analytics;
use Health_Analytics;

-- Criando as tabelas:

-- Tabela Cartão:
create table cartao(
	id_cartao int primary key
);

-- Tabela Empresa:
create table empresa(
	id_empresa int primary key,
    nome_empresa varchar(40),
    endereco_empresa varchar(40)
);

-- Tabela Funcionário:
create table funcionario(
	id_funcionario int primary key auto_increment,
    nome varchar(40),
    data_nasc date,
    telefone varchar(11),
    celular char(11),
    endereco varchar(40),
    cpf char(11),
    email varchar(40),
    senha varchar(40),
    fk_idCartao int,
    foreign key(fk_idCartao) references cartao(id_cartao),
    fk_idEmpresa int,
    foreign key(fk_idEmpresa) references empresa(id_empresa)
) auto_increment = 1000;

-- Tabela Sensor:
create table sensor(
	id_sensor int primary key,
    modelo_sensor varchar(20)
);

-- Tabela Temperatura:
create table temperatura(
	id_temperatura int primary key,
    temperatura_funcionario char(4),
    horario_da_medicao char(5),
    data_medicao date,
    fk_idCartao int,
    foreign key(fk_idCartao) references cartao(id_cartao),
    fk_idSensor int,
    foreign key(fk_idSensor) references Sensor(id_sensor)
);

-- INSERIR DADOS NAS TABELAS:
-- Tabela Cartão
insert into cartao values
(1111111),
(2222222),
(3333333),
(4444444);

-- Tabela Empresa
insert into empresa values
(100, 'Empresa 1', 'Rua empresa 1'),
(101, 'Empresa 2', 'Rua empresa 2');

-- Tabela Funcionario
insert into funcionario values
(null, 'João Silva', '1990-01-01', '11956829416', '11985741604', 'Rua do Joao', '68236541082', 'joão.silva@gmail.com', '12345678', '1111111', '100'),
(null, 'Maria Joana', '1991-02-02', '11954731234', '11964821532', 'Rua da Maria', '47520846812', 'maria.joana@gmail.com', '87654321', '2222222', '100'),
(null, 'Ana Julia', '1990-03-03', '11935789642', '11965389264', 'Rua da Ana', '22734598761', 'ana.julia@gmail.com', '13572468', '3333333', '101'),
(null, 'Marco Santos', '1992-04-04', '11982467734', '11965342278', 'Rua do Marco', '78890023461', 'marco.santos@gmail.com', '86427531', '4444444', '101');

-- Tabela Sensor
insert into sensor values
(10000, 'LM35'),
(20000, 'LM35');

-- Tabela Temperatura
insert into temperatura values
(1, '35.7', '10:14', '2020-03-23', '1111111', '10000'),
(2, '36.2', '10:00', '2020-03-24', '2222222', '10000'),
(3, '35.9', '10:45', '2020-03-25', '3333333', '20000'),
(4, '36.8', '10:43', '2020-03-26', '4444444', '20000');
