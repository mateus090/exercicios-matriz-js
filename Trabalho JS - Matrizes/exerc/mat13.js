var mat = []
function cria(){
    var tabela = "<table>";
    var i, j;
    for(i=0;i<6;i++){
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
    for(i=0;i<6;i++){
        mat[i] = [];
    }
    for(i=0;i<6;i++){
        for(j=0;j<4;j++){
            mat[i][j] = Number(document.getElementById("l"+i+"c"+j).value);
        }
    }
    document.getElementById("aviso").innerHTML = "Matriz cadastrada com sucesso";
}
function calcula(){
   var maior = 0;
   var vetMaior = []; 
   var saida = ""; 
   for(i=0;i<6;i++){
       maior = 0
       for(j=0;j<4;j++){
            if(mat[i][j] > maior){
                maior = mat[i][j];
            }
       }
       vetMaior[i] = maior;
   }
   for(i=0;i<6;i++){
       for(j=0;j<4;j++){
           saida += "Posição " + i + " x " + j + ": " + Number(mat[i][j] * vetMaior[i]) + "<br>";
       }
   }
    document.getElementById("r13").innerHTML = saida;
}