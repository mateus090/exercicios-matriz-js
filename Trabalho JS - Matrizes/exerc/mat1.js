//declarar matriz
var mat = [];
//EXERCICIO 1
function calcula_exerc01(){
    //cria matriz
    for(var i=0;i<3;i++){ 
        mat[i] = [];
    }
    //leitura dos dados
    for(i=0;i<3;i++){ // i corresponde a quantidade de linhas, no caso do exercício será 3 linhas(linha 0 até linha 2)
        for(var j=0;j<5;j++){ // j corresponde a quantidade de colunas, no caso do exercício será 5 colunas(coluna 0 até coluna 4)
            mat[i][j] = document.getElementById("l"+i+"c"+j).value; // leitura linha(i) e coluna(j)   
        }
    }
    // processamento
    var qtde = 0
    // para percorrer uma matriz é necessário dois for's
    for(i=0;i<3;i++){
        for(j=0;j<5;j++){
            if((mat[i][j] >= 15) && (mat[i][j] <= 20)){ //condição do exercício
                qtde += 1 //acumula a quantidade >= 15 e 20 <=
            }
        }
    }
    document.getElementById("r1").innerHTML = qtde; //resultado
}