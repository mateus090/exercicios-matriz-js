//EXERCICIO 2
var mat = [];
function calcula_exerc02_item1(){
    for(var i=0;i<2;i++){ 
        mat[i] = [];
    }
    //leitura dos dados
    for(i=0;i<2;i++){ // i corresponde a quantidade de linhas, no caso do exercício será 3 linhas(linha 0 até linha 2)
        for(var j=0;j<4;j++){ // j corresponde a quantidade de colunas, no caso do exercício será 5 colunas(coluna 0 até coluna 4)
            mat[i][j] = document.getElementById("l"+i+"c"+j).value; // leitura linha(i) e coluna(j)   
        }
    }
    // processamento
    var qtde02 = 0;
    var aux02 = "";
    // para percorrer uma matriz é necessário dois for's
    for(i=0;i<2;i++){
        qtde02 = 0; //zera contagem
        for(j=0;j<4;j++){
            if((mat[i][j] >= 12) && (mat[i][j] <= 20)){
                qtde02 += 1
            }
        }
        aux02 += "Linha: "+i+". Total: " + qtde02 +"<br>" ;
       
    }
    document.getElementById("r2_item1").innerHTML = aux02; //resultado
}
function calcula_exerc02_item2(){
    for(var i=0;i<2;i++){ 
        mat[i] = [];
    }
    for(i=0;i<2;i++){
        for(var j=0;j<4;j++){ 
            mat[i][j] = document.getElementById("l"+i+"c"+j).value;  
        }
    }
    // processamento
    var par02 = 0
    var conta = 0;
    // para percorrer uma matriz é necessário dois for's
    for(i=0;i<2;i++){
        for(j=0;j<4;j++){
            if(mat[i][j] % 2 == 0){
                par02 += Number(mat[i][j]);
                conta ++
            }
            
        }
    }
    document.getElementById("r2_item2").innerHTML = par02/conta; //resultado
}


