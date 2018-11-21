var mat = []
function cria(){
    var tabela = "<table>";
    var i, j;
    for(i=0;i<3;i++){
        tabela = tabela + "<tr>";
        for(j=0;j<3;j++){
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
    for(i=0;i<3;i++){
        mat[i] = [];
    }
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            mat[i][j] = Number(document.getElementById("l"+i+"c"+j).value);
        }
    }
    document.getElementById("aviso").innerHTML = "Matriz cadastrada com sucesso";
}
function calcula(){
    var n = document.getElementById("n").value;
    var saida = "";
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            saida += "Posição " + i +" x "+j+": "+ Number(mat[i][j] * n) + "<br>"
        }
    }    
    document.getElementById("r9").innerHTML = "Matriz * " + n + ": " + "<br><br>" + saida;
}