/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   var x = 8;
   var y = 9;
   if (x === y){
      return true
   }
   else{
      return false
   }
}

function tienenMismaLongitud(str1, str2) {
   var str1 = "Bruno Couto"
   var str2 = "Henry Bootcamp"
   if (str1.length === str2.length){
      return true
   }
   else{
      return false
   }
}

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   var num = Math.floor(Math.random() * 101);
   if (num < 91){
      return true
   }
   else{
      return false
   }
}

function mayorQueCincuenta(num) {
   var num = Math.floor(Math.random() * 101);
   if (num > 50){
      return true
   }
   else{
      return false
   }
}

function esPar(num) {
   var num = Math.floor(Math.random() * 101);
   if (num % 2 === 0){
      return true
   }
   else{
      return false
   }
}

function esImpar(num) {
   var num = Math.floor(Math.random() * 101);
   if (num % 2 != 0){
      return true
   }
   else{
      return false
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
