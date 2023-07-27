/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   var num = Math.floor(Math.random() * 11);
   if (num > 0){
      return "Es positivo";
   } else if (num <0) {;
      return "Es negativo";
   }
   else{
      return false;
   };
}

function agregarSimboloExclamacion(str) {
   var str = "Hello world"
   return str + "!"
}

function combinarNombres(nombre, apellido) {
   var nombre = "Bruno"
   var apellido = "Couto"
   return nombre + apellido
}

function obtenerSaludo(nombre) {
   var nombre = "Bruno"
   return "Hola " + nombre
}

function obtenerAreaRectangulo(alto, ancho) {
   var alto = Math.floor(Math.random() * 11)
   var ancho = Math.floor(Math.random() * 11)
   return "El area és igual a " + alto * ancho
}

function retornarPerimetro(lado) {
   var lado = Math.floor(Math.random() * 11)
   return "El perimetro es " + lado * 4

}

function areaDelTriangulo(base, altura) {
   var base = Math.floor(Math.random() * 11)
   var altura = Math.floor(Math.random() * 11)
   return "El area del triangulo és igual a " + base * altura
}

function deEuroAdolar(euro) {
   var euro = Math.floor(Math.random() * 11)
   return "El valor do euro en dolar és: " + euro * 1.20
}

function esVocal(letra) {
   var vocal = ['a', 'e', 'i', 'o', 'u']
   var letra = "y"
   if (letra.length !== 1) {
      return "Dato incorrecto";
   }
   if (vocal.includes(letra)) {
      return "Es vocal";
    } else {
      return "Dato incorrecto";
    }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
