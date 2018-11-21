var matM = [];
var matN = [];
var vetSomaN = [];
var vetSomaM = [];
//cria tabela 1(M)
function cria1(){
    var tabela1 = "<table>";
    var i, j;
    for(i=0;i<4;i++){
        tabela1 = tabela1 + "<tr>";
        for(j=0;j<6;j++){
            tabela1 = tabela1 + "<td>" + 
            "<input id='l" + i + "c" + j + "' type='number'" +
            "style='width:50px'> </td>";
        }
        tabela1 = tabela1 + "</tr>";
    }
    tabela1 = tabela1 + "</table>";
    document.getElementById("dinamico1").innerHTML = tabela1;
   var tabela2 = "<table>";
    var k, l;
    for(i=0;i<6;i++){
        tabela2 = tabela2 + "<tr>";
        for(j=0;j<4;j++){
            tabela2 = tabela2 + "<td>" + 
            "<input id='l" + i + "c" + j + "' type='number'" +
            "style='width:50px'> </td>";
        }
        tabela2 = tabela2 + "</tr>";
    }
    tabela2 = tabela2 + "</table>";
    document.getElementById("dinamico2").innerHTML = tabela2;
}
function cadastraM(){
    var i, j;
    for(i=0;i<4;i++){
        matM[i] = [];
    }
    for(i=0;i<4;i++){
        for(j=0;j<6;j++){
            matM[i][j] = Number(document.getElementById("l"+i+"c"+j).value);
        }
    }
    document.getElementById("aviso1").innerHTML = "Matriz M cadastrada com sucesso";
}
function cadastraN(){
    var i,j;
    for(i=0;i<6;i++){
        matN[i] = [];
    }
    for(i=0;i<6;i++){
        for(j=0;j<4;j++){
            matN[i][j] = Number(document.getElementById("l"+i+"c"+j).value);
        }
    }
    document.getElementById("aviso2").innerHTML = "Matriz N cadastrada com sucesso";
}
function calcula(){
    var somaM = 0;
    
    var saidaM = "";
    for(var i=0;i<4;i++){
        somaM = 0
        for(var j=0;j<6;j++){
            somaM = somaM + matM[i][j]
        }
        vetSomaM[i] = somaM;
        saidaM += "Linha M " + i + ": " + vetSomaM[i] + "<br>";   
    }
    document.getElementById("r7_1").innerHTML = "<b>Soma de linhas matriz M:</b>" + "<br><br>" + saidaM; 
}
function calcula2(){
    var somaN = 0;
    
    var saidaN = "";
    for(var j=0;j<4;j++){
        somaN = 0
        for(var i=0;i<6;i++){
            somaN = somaN + matN[i][j]
        }
        vetSomaN[j] = somaN;
        vetSomaN[i] = vetSomaN[j]
        saidaN += "Coluna N " + j + ": " + vetSomaN[j] + "<br>";   
    }
    document.getElementById("r7_2").innerHTML = "<b>Soma de colunas matriz N:</b>" + "<br><br>" + saidaN;
}
function soma(){
    var soma1 = ""; 
    for(var i=0;i<4;i++){
        soma1 += "Soma " + i +": "+ Number(vetSomaM[i] + vetSomaN[i]) + "<br>"
    }
    
    
    
    document.getElementById("r7_3").innerHTML = "<b>Soma M + N:</b>" + "<br><br>" + soma1;
}