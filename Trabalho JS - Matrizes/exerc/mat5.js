var mat = []
function cria(){
    var tabela = "<table>";
    var i, j;
    for(i=0; i< 12; i++){
        tabela = tabela + "<tr>";
        for(j=0;j<4;j++){
            tabela = tabela + "<td>" + 
            "<input id='l" + i + "c" + j + "' type='number'" +
            "style='width:50px'> </td>";
        }
        tabela = tabela + "</tr>";
    }
    tabela = tabela + "</table>";
    document.getElementById("dinamico").innerHTML = tabela;
}
function cadastra(){
    var i, j;
    for(i=0;i<12;i++){
        mat[i] = [];
    }
    for(i=0;i<12;i++){
        for(j=0;j<4;j++){
            mat[i][j] = Number(document.getElementById("l"+i+"c"+j).value);
        }
    }
    document.getElementById("aviso1").innerHTML = "Matriz cadastrada com sucesso";
}
var meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
function totalPorMes(){
    var i, j;
    var total = 0;
    var saida = "";
    for(i=0;i<12;i++){// para cada mês
        total = 0;
        for(j=0;j<4;j++){ // para cada semana
            total = total + mat[i][j];
        }
        saida = saida + meses[i] + " - " + total + "<br/>";
    }
    document.getElementById("aviso2").innerHTML = saida;
}
function totalPorSemana(){
    var i,j;
    var total = 0;
    var saida = "";
    var semanas = ['1ª Semana','2ª Semana','3ª Semana','4ª Semana'];
    for(j=0;j<4;j++){ // para cada semana
        total = 0;
        for(i=0;i<12;i++){
            total = total + mat[i][j];
        }
        saida = saida + semanas[j] + " - " + total + "<br/>";
    }
    document.getElementById("aviso3").innerHTML = saida;
}
function maiorCompra(){
    var i;
    var mes = Number(document.getElementById("mes").value);
    var maior = 0;
    for(j=0;j<4;j++){;
        if(mat[mes-1][j] > maior){
            maior = mat[mes-1][j];
        }
    }
    document.getElementById("aviso4").innerHTML = "Mês " + mes + "(" + meses[mes-1] + ")" + " - " + maior;
}
