function calcular() {

    var num_funcionarios = document.getElementById('num_funcionarios').value; // Atribuiu o input a var num_funcionarios
    var limite_totem = 50; //Limite de totens
    var valor_servico = 3500;//Valor do serviço
    var manutencao = 200; //valor da mutenção mensal
    var taxa_instalacao = 500; //taxa de instalação
    var salario_minimo = 1045; //salario minimo
    var num_totens; //indefinido


    if (num_funcionarios <= limite_totem) {
        num_totens = 1; //Se o número de funcionarios for maior igual  50 num_totens = 1
        document.getElementById('num_totens').value = num_totens;
    } else { //Se numero de funcionarios for > 50, numero de totens = num_funcionarios/ 50;
        num_totens = Math.round(num_funcionarios / limite_totem);
        document.getElementById('num_totens').value = num_totens;
    }

    var investimento_inicial = (num_totens * valor_servico) + taxa_instalacao;//(num_totens * 3500) + 500
    var investimento_mensal = manutencao * num_totens; // 200 * numero totens
    // a cada 1 dolar investido na saude do funcionario, podem ser retornados ate 4 dolares. 300%. pior situação 235%.
    var lucro = investimento_inicial * 2.35; 
    //funcionarios doentes acabam gerando a despesa de 2 funcionarios
    var possiveis_perdas = num_funcionarios * (salario_minimo * 2); //numero de funcionarios * 2090;

    document.getElementById('investimento_inicial').value = `R$ ${investimento_inicial}`
    document.getElementById('investimento_mensal').value = investimento_mensal.toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });;
    document.getElementById('lucro').value = lucro.toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
    document.getElementById('possiveis_perdas').innerHTML = possiveis_perdas.toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });

}
