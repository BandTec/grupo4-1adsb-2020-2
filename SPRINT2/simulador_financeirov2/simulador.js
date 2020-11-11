function calcular() {
    var qtd_fun = Number(num_funcionarios.value); // Atribuiu o input a var num_funcionarios
    var qtd_entradas = Number(entradas.value); //Quantidade de entrada na empresa
    var qtd_acessos = (qtd_fun * 2); // Média pré estipulada de acessos por funcionário na empresa
    var limite_totem = 25; //Limite de totens
    var valor_servico = 3500;//Valor do serviço
    var manutencao = 200; //valor da mutenção mensal
    var taxa_instalacao = 500; //taxa de instalação
    var salario_medio = sal_medio.value; //salario minimo
    var num_totens; //indefinido

    //Função de totens recomendados...
    if (qtd_fun < 40 && qtd_entradas == 1){
        num_totens = 1;
    } else if (qtd_fun >= 40  && qtd_fun < 60 && qtd_entradas == 1){
        num_totens = 2;
    } else if (qtd_fun >= 60  && qtd_fun < 100 && qtd_entradas == 1){
        num_totens = 2;
    } else if (qtd_fun >= 100  && qtd_fun < 300 && qtd_entradas == 1){
        num_totens = 3;
    } else if (qtd_fun >= 300  && qtd_fun < 800 && qtd_entradas == 1){
        num_totens = 4;
    } else if(qtd_fun >= 40  && qtd_fun < 60 && qtd_entradas == 2){
        num_totens = 2;
    } else if(qtd_fun >= 60  && qtd_fun < 100 && qtd_entradas == 2){
        num_totens = 3;
    } else if(qtd_fun >= 100  && qtd_fun < 300 && qtd_entradas == 2){
        num_totens = 4;
    } else if(qtd_fun >= 300  && qtd_fun < 800 && qtd_entradas == 2){
        num_totens = 6;
    } else if(qtd_fun >= 40  && qtd_fun < 60 && qtd_entradas == 3){
        num_totens = 3;
    } else if(qtd_fun >= 60  && qtd_fun < 100 && qtd_entradas == 3){
        num_totens = 3;
    } else if(qtd_fun >= 100  && qtd_fun < 300 && qtd_entradas == 3){
        num_totens = 5;
    } else if(qtd_fun >= 300  && qtd_fun < 800 && qtd_entradas == 3){
        num_totens = 6;
    } else if(qtd_fun >= 40  && qtd_fun < 60 && qtd_entradas == 4){
        num_totens = 4;
    } else if(qtd_fun >= 60  && qtd_fun < 100 && qtd_entradas == 4){
        num_totens = 6;
    } else if(qtd_fun >= 100  && qtd_fun < 300 && qtd_entradas == 4){
        num_totens = 8;
    } else if(qtd_fun >= 300  && qtd_fun < 800 && qtd_entradas == 4){
        num_totens = 8;
    }
    
    var investimento_inicial = (num_totens * valor_servico) + taxa_instalacao;//(num_totens * 3500) + 500
    var investimento_mensal = manutencao * num_totens; // 200 * numero totens
    // a cada 1 dolar investido na saude do funcionario, podem ser retornados ate 4 dolares. 300%. pior situação 235%.
    var lucro = investimento_inicial * 2.35;
    //funcionarios doentes acabam gerando a despesa de 2 funcionarios
    var possiveis_perdas = qtd_funs * (salario_medio * 2); //numero de funcionarios * 2090;

}
