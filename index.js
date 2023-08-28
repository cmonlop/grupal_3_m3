//1.- Construya una función que dado un numero n entero y menor que 100 calcule la sumatoria de 1
//hasta n.

function sumatoria(n) {
    if(Number.isInteger(n) && n < 100) { // Verificar si n es un número entero menor que 100
      let suma = 0;
      for(let i = 1; i <= n; i++) {
        suma += i;
      }
      return suma;
    } else {
      return "Error: n debe ser un número entero menor que 100";
    }
  }
  console.log (sumatoria(100))

//2.- Construya una función que imprima si un número es primo o no, los números primos son
//aquellos que son divisibles solo por 1 y por sí mismos.
function esPrimo(numero){
    if(numero > 1){ //1ro: bloque if (si es mayor que 1, se ejecuta el for, sino, se ejecuta el primer else (No es primo).
    for (let i = 2; i < numero; i++) { //2do: Ya descartado el 1, se ejecuta el for, la variable de iniciación comienza en 2 y se ejecuta mientras esa variable sea menor al número ingresado.
        if (numero % i === 0) { //3ro: Segundo bloque if (si el resto de la división con otro número es 0, entonces no es primo, porque es divisible por otros números). 
            return "No es primo"
        } else {
              return "Es primo"; //Else de segundo bloque if, si hay un número que no sea divisible por otro número distinto, entonces retorna "es primo".
            }
    }} else {
      return "No es primo";//Else de primer bloque if, si es que el número ingresado es menor o igual a 1, entones retorna "no es primo".
    }
  }
  console.log(esPrimo(5));

  //3.- Cree una función que dado un número n entero y menor que 100 imprima la cuenta regresiv,
  //es decir si n es 5 deberá imprimir 5,4,3,2,1

  
  function cuentaRegresiva(n) {
    if(n < 100) {
      for(let i = n; i > 0; i--){
        console.log(i);
      }
    } else {
      console.log("El número debe ser menor a 100");
    }
  }

console.log(cuentaRegresiva(6));

//4.- Construya una función que dado un numero n entero mayor que 10 y menor que 1000 calcule
//la sumatoria de todos los números pares contenidos en el rango.

function mayorDiez(n) {
  if(n > 10 && n < 1000) {
    pares = 0;
    for(let i = 11; i <= n; i++){
        if(i%2 === 0){
          pares += i;
        }
    }
    return pares;
  } else {
      console.log("El número debe ser mayor que 10 y menor a 1000");
  }
}
console.log(mayorDiez(16));

// 5.- Cree una función que permite dado un numero n imprima la tabla de multiplicar de dicho
// numero hasta el 12  

 function multiplicacionX12(n){
  let multiplicacion = 0;
  for(let i = 1; i <= 12; i++){
    multiplicacion = n * i;
    console.log(n + "x" + i + "=" + multiplicacion);
  }
}

console.log(multiplicacionX12(6));