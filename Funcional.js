//1) Se pide crear la funciónnes que devuelvan aquellas palabras que NO tiene las misma vocal.
//const entrada = ["racecar", "amalgam", "oligopoly", "zoom", "cama", "enano"];
//const esperado = ["racecar", "oligopoly", "enano"];
const entrada = ["racecar", "amalgam", "oligopoly", "zoom", "cama", "enano"];
function Vocales(array){
    var vocal = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú']
    return array.split("").filter (data => {
        return vocal.indexOf(data.toLowerCase())!=-1;
    });
}
function getPalabras(array){
    const r = [];
    array.forEach(data =>{
        const v = Vocales(data);
        for (i=1;i<=v.length-2;i++){
        if(v[0] != v[i])
        r.push(data)
        }
    })
    return r;
    }
    console.log("Palabras que no tiene las misma vocal: ", getPalabras(entrada));
//2) Dado el siguiente vector array=[5,4,20,7,5,10]
//use map, para devolver  cada elemento del vector multiplicado por 10
//resultado esperado [50,40,200,70,50,100]
var array=[5,4,20,7,5,10];
var Multiplicar = array.map(function(data) {
   return data * 10;
});
console.log("Resultado de la multiplicación x 10 = ", Multiplicar);
//3) Dada la siguiente matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9] ]
//y usando únicamente map, devuelva cada elemento de la matriz multiplicado por 3
//resultado esperado = [[3, 6, 9], [12, 15, 18], [21, 24, 27] ]
const matriz1 = [1,2,3];
const matriz2 = [4,5,6];
const matriz3 = [7,8,9];
const  map1 = matriz1.map(a => a*3);
const  map2 = matriz2.map(b => b*3);
const  map3 = matriz3.map(c => c*3); 

    console.log ("Resultado de la multiplicación x 3 = ", [map1,map2,map3]);
//4) Dada la siguiente matriz = [[ 1, 2, 3 ],[ 4, 5 ],[ 6 ]];
//utilice reduce para encontrar el producto de sus elementos,
//resultado esperado: 720...
//
//
//Integrar un array a partir de varios arrays
matrizReduce = [[ 1, 2, 3 ],[ 4, 5 ],[ 6 ]];
var integrado = matrizReduce.reduce(function(a,b) {
    return a.concat(b);
});
//Multiplicar todos los valores de un array
var total = integrado.reduce(function(a, b){
    return a * b;
    });
console.log ("Resultados de los elementos del array", total);