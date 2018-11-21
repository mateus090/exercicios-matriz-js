var mat = []
function cria(){
    var tabela = "<table>";
    var i, j;
    for(i=0;i<10;i++){
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
    for(i=0;i<10;i++){
        mat[i] = [];
    }
    for(i=0;i<10;i++){
        for(j=0;j<10;j++){
            mat[i][j] = Number(document.getElementById("l"+i+"c"+j).value);
        }
    }
    document.getElementById("aviso").innerHTML = "Matriz cadastrada com sucesso";
}
function calcula(){
   var somaD1 = 0;
   for(i=0;i<10;i++){
       for(j=0;j<10;j++){
            if(i == j){
                somaD1 += mat[i][j]
            }
        }
    }           
    document.getElementById("r17").innerHTML = "Média dos elementos da diagonal principal: " + somaD1/10
}