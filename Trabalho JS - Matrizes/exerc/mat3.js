//EXERCICIO 3
var mat = [];
function calcula_exerc03_item1(){
    for(var i=0;i<6;i++){ 
        mat[i] = [];
    }
    //leitura dos dados
    for(i=0;i<6;i++){ // i corresponde a quantidade de linhas, no caso do exercício será 3 linhas(linha 0 até linha 2)
        for(var j=0;j<3;j++){ // j corresponde a quantidade de colunas, no caso do exercício será 5 colunas(coluna 0 até coluna 4)
            mat[i][j] = document.getElementById("l"+i+"c"+j).value; // leitura linha(i) e coluna(j)   
        }
    }
    // processamento
    var maior = mat[0][0];
    var menor = mat[0][0];
    var lMaior = 0;var cMaior = 0;
    var lMenor = 0;var cMenor = 0;
    // para percorrer uma matriz é necessário dois for's
        for(j=0;j<3;j++){
            for(i=0;i<6;i++){
                if(mat[i][j] > maior){
                    maior = mat[i][j];
                    lMaior = i+1; cMaior = j+1;
                }
                if(mat[i][j] < menor){
                    menor = mat[i][j];
                    lMenor = i+1; cMenor = j+1
                }   
            }  
        }
    //resultado
    document.getElementById("r3_item1").innerHTML = maior + " em " + lMaior + " x " + cMaior;
    document.getElementById("r3_item2").innerHTML = menor + " em " + lMenor + " x " + cMenor;
}
