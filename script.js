/**inicializo una variable que es la que va a contener todos los valores del contador*/

let valores;
/**Con esta función flecha primero paso a entero el contador y luego le resto uno asignandole el valor a la variable "valroes"
 * luego igual la variable al contador
 * y retorno el valor
 * el procedimiento es igual en aumentaA
 * Y en el reset simplemente lo igualo a 0
 * Luego de hacerlo me dí cuenta que ambos contadores se deben poder simplificar (DRY) 
 * intuyo que con la creación de un objeto, pero bueno eso no es parte de esta entrega, para la próxima lo perfeccionaré
 */

disminuyeA = () => {
    valores = parseInt(document.getElementById("contador1").innerHTML) - 1;
    document.getElementById("contador1").innerHTML = valores;
    return;
}

resetA = () => {
    document.getElementById("contador1").innerHTML = 0;
    return;
}

aumentaA = () => {
    valores = parseInt(document.getElementById("contador1").innerHTML) + 1;
    document.getElementById("contador1").innerHTML = valores;
    return;
}



let valoresB;

disminuyeB = () => {
    valoresB = parseInt(document.getElementById("contador2").innerHTML) - 1;
    document.getElementById("contador2").innerHTML = valoresB;
    return;
}

resetB = () => {
    document.getElementById("contador2").innerHTML = 0;
    return;
}

aumentaB = () => {
    valoresB = parseInt(document.getElementById("contador2").innerHTML) + 1;
    document.getElementById("contador2").innerHTML = valoresB;
    return;
}


/**ArgenTienda */

            const comprarProductos = () => {
                let producto = ''
                let cantidad = 0
                let precio = 0
                let subtotal = 0
                let seguirComprando = false

                do {
                    producto = prompt('¿Qué vas a llevar? Opciones: 1.Camiseta 2.Moto 3.Combo Mate 4.Todo')
                    cantidad = parseInt(prompt('¿Cuántos queres comprar?'))

                    switch (producto) {
                        case 'Camiseta' || '1.Camiseta':
                            precio = 23000
                            break;
                        
                        case 'Moto' || '2.Moto':
                            precio = 100000
                            break;

                        case 'Combo Mate' || '3.Combo Mate':
                            precio = 10000
                            break;
                        case 'Todo' || 'Todos' || '4.Todo':
                            precio = 133000
                            break;
                        
                        default:
                            alert('Algunos de los datos ingresados no son correctos')
                            precio = 0
                            cantidad = 0
                            
                    }
                    subtotal += precio * cantidad
                    seguirComprando = confirm ('¿Desea seguir comprando?')
                } while (seguirComprando);
                alert('El total de tu compra es: '+subtotal)
                return subtotal;
                
            };
           

        
const subtotal = comprarProductos ()