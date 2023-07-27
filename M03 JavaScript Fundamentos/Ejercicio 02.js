/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   let string = "Hello World";
   return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   var x = 8;
   var y = 9;
   return x + y
}

function resta(x, y) {
   var x = 15;
   var y = 9;
   return x - y
}

function divide(x, y) {
   var x = 81;
   var y = 9;
   return x / y
}

function multiplica(x, y) {
   var x = 8;
   var y = 9;
   return x * y
}

function obtenerResto(x, y) {
   var x = 83;
   var y = 9;
   return x % y
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
