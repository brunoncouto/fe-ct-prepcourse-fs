/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   var num = Math.floor(Math.random() * 11)
   return Math.pow(num, 2)
}

function elevarAlCubo(num) {
   var num = Math.floor(Math.random() * 11)
   return Math.pow(num, 3)
}

function elevar(num, exponent) {
   var num = Math.floor(Math.random() * 11)
   var exponent = Math.floor(Math.random() * 11)
   return Math.pow(num, exponent)
}

function redondearNumero(num) {
   var num = Math.random() * 10;
   return Math.round(num)
}

function redondearHaciaArriba(num) {
   var num = Math.random() * 10;
   return Math.ceil(num)
}

function numeroRandom() {
   var number = Math.random()
   return number
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
