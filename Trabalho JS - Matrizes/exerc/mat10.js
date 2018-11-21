var mat = []
function cria(){
    var tabela = "<table>";
    var i, j;
    for(i=0;i<5;i++){
        tabela = tabela + "<tr>";
        for(j=0;j<5;j++){
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
    for(i=0;i<5;i++){
        mat[i] = [];
    }
    for(i=0;i<5;i++){
        for(j=0;j<5;j++){
            mat[i][j] = Number(document.getElementById("l"+i+"c"+j).value);
        }
    }
    document.getElementById("aviso").innerHTML = "Matriz cadastrada com sucesso";
}
function calcula(){
    
    var somal4 = 0; var somac2 = 0;var somad1 = 0;var somad2 = 0;var total = 0;
    //soma linha 4
    for(var i=3;i<4;i++){
        for(var j=0;j<5;j++){
            somal4 += mat[3][j]
        }
    }
    //soma coluna2 
    for(var i=0;i<5;i++){
        for(var j=1;j<2;j++){
        somac2 += mat[i][1]
        }
    }  
    //soma diagonal principal
    for(var i=0;i<5;i++){
        somad1 += mat[i][i]
    }
    // soma diagonal secundária
    for(var i=0;i<5;i++){
        for(var j=0;j<5;j++){
            if(i + j == 4){
                somad2 += mat[i][j]
            }
        }
    }
    // soma total
    for(var i=0;i<5;i++){
        for(var j=0;j<5;j++){
            total += mat[i][j]
        }
    }
    document.getElementById("r10").innerHTML = "Soma linha 4: " + somal4 + "<br><br>" + "Soma coluna 2: " + somac2 + "<br><br>" + "Soma diagonal principal: "+ somad1 +"<br><br>"+ "Soma diagonal secundária: " + somad2 + "<br><br>" + "Total matriz: "+ total ;
}