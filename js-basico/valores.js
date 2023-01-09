let salirMenu = false
let productos

do{


    let opcionesIngresada = parseInt(prompt(`Bienvenido a Moreno Multimedia.\n Ingrese una opción.
        1-Datos personales
        2-Catalogo de productos
        3-Ver carrito
        4-Calculadora de costo
        0-Salir del menú`))

    switch (opcionesIngresada){
        case 1:
            
            
                        let nombre = prompt("Ingrese el nombre")
                        let fecha = prompt("Ingrese el año de nacimiento")
                        let provincia = prompt("Desde que provincia nos visitas?")
                        let edad = 2023 - fecha
        function saludarUsuario(){
        }

            if(edad >=18){
                bienvenido = true
                saludarUsuario(alert(`Bienvenido ${nombre}`))
                console.log(`${nombre} tiene ${edad} años y es de la provincia de ${provincia}`)
            }else{
                
            }
        break
        case 2:
            console.log("Productos disponibles")
            alert(`Algunos de los productos que tenemos son:`)
            alert(`producto1: computadora \n producto 2: notebook \n producto3: monitor `)
            let opcion = prompt("Que producto desea elegir?")
            if(opcion == 1){
                alert(`El precio es de $1500`)
            }else if(opcion == 2){
                alert(`El precio es de 2000`)
            }else if(opcion == 3){
                alert(`El precio es de 500`)
            }else{
                alert(`No tenemos ese producto. Ingrese uno de los disponibles actualmente.`)
            }
            console.log(`El producto seleccionado es ${opcion}`)
        break
        case 3:
            console.log("Ver Carrito")
            prompt(`El prodcuto seleccionado es ${opcion} con un valor de `)
        break

        case 4:
            console.log("Calculadora de costo")
            
        break
        
        case 0:
            console.log("Gracias por visitarnos! Vuelva pronto!")
            salirMenu = true
        break
        default:
            alert(`Ingrese una opcion correcta`)
        break 
    }


}while(!salirMenu)



