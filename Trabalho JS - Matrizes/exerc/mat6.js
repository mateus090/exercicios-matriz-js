var mat = []
function cria(){
    var tabela = "<table>";
    var i, j;
    for(i=0;i<20;i++){
        tabela = tabela + "<tr>";
        for(j=0;j<10;j++){
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
    for(i=0;i<20;i++){
        mat[i] = [];
    }
    for(i=0;i<20;i++){
        for(j=0;j<10;j++){
            mat[i][j] = Number(document.getElementById("l"+i+"c"+j).value);
        }
    }
    document.getElementById("aviso").innerHTML = "Matriz cadastrada com sucesso";
}
function calcula(){
    var soma = 0;
    var vetSoma = [];
    var matrizR = "";
    var saida = "";
    for(var j=0;j<10;j++){
        soma = 0
        for(var i=0;i<20;i++){
            soma = soma + mat[i][j]
        }
        vetSoma[j] = soma
        saida += "Coluna " + j + ": " + vetSoma[j] + "<br>";   
    }
    for(var j=0;j<10;j++){
        for(var i=0;i<20;i++){
            matrizR += "Posição(" + i + " x " + j + ") :" + Number(mat[i][j]) * Number(vetSoma[j]) + "<br>";
        }
    }
    document.getElementById("r6").innerHTML = "Soma de cada coluna" + "<br>" + "<br>" + saida + "<br> Matriz Resultante" + "<br>" + "<br>" + matrizR;
}