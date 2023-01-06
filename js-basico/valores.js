
// let nombre = prompt("Ingrese el nombre")
// let fecha = prompt("Ingrese el año de nacimiento")
// let edad = 2023 - fecha


// let bienvenido = false
// // while(!bienvenido){
//     if(edad >=18){
//         bienvenido = true
//         alert(`Bienvenido ${nombre} a la pagina.`)
//         console.log(`El cliente es medio viejito, pero lo dejamos entrar... Tiene ${edad} años.`)
//     }else{
//         alert(`${nombre} tenes que ser mayor de edad. Pero por hoy, podes entrar.`)
//         console.log(`${nombre} es menor. Lo dejamos pasar porque es el primer cliente...`)
//     }
    

// let continuamos = false
// let editorial

// while(!continuamos){

//     editorial = prompt("Que libro te gustaria comprar")

//     if(editorial.toUpperCase() == "DRAGON BALL" || editorial.toUpperCase() == "POKEMON" || editorial.toUpperCase() == "GEOGRAFIA 1" || editorial.toUpperCase() == "HARRY POTTER"){
//         continuamos = true
//         alert(`Aaah si si, lo tenemos a ${editorial}. Ya lo busco..`)
//         console.log(`El cliente quiere el libro ${editorial} que por suerte tenemos en stock`)
//     }else{
//         console.log(`El cliente quiere justo el unico libro que no tenemos -.-`)
//         alert(`No tengo el libro ${editorial}... Solo tengo de Dragon Ball, Pokemon, el primero de Harry Potter y unos de geografia.`)
//     }
// }    

//     let precio = prompt(`No me acuerdo el precio de el libro. Vos te acordas?`)

//     if(precio < 100){
//         console.log("El mas barato de todos va a comprar...")
//         alert(`Este libro de ${editorial} es genial.`)
//     }
//     else if(precio < 250){
//         console.log("Guarda, con el pago de este libro puede desestabilizar el pais")
//         alert(`Este libro de ${editorial} es genial.`)
//     }
//     else if(precio < 550){
//         console.log("Seguro es para un sobrino que no soporta mucho")
//         alert(`Este libro de ${editorial} es genial.`)
//     }
//     else if(precio < 780){
//         console.log("Este libro esta bueno... Si te gustan los dibujitos esta bueno...")
//         alert(`Este libro de ${editorial} es genial.`)
//     }
//     else {
//         console.log("Este esta joya... espero no se de cuenta que todos los libros salen menos de $100")
//         alert(`Este libro de ${editorial} es genial.`)
//     }

// let yaCasi = false
// let color
// while(!yaCasi){
    
//         color = prompt("De que color es la tapa de ese libro?")
        
//         if(color.toLowerCase() == "gris"){
//             yaCasi = true
//             console.log("No se porque todos los libros que tenemos son de tapas grises.. creo que mi vista no anda muy bien")
//             alert(`Que bien! Justo todos los libros son de color ${color}!`)
//         }else{
//             alert(`${color}??? me parece que no sabes mucho de colores, volve a escribirlo porfavor.`)
//             console.log("Mmmm no se que color sea ese... Para mi todos los colores son iguales... como de color GRIS")
//         }
//     }
//     console.log(`Bien entonces ${nombre} quiere el libro ${editorial} que sale ${precio} y de tapa color Gris!`)

let salirMenu = false
let productos

do{


    let opcionesIngresada = parseInt(prompt(`Bienvenido a Moreno Multimedia.\n Ingrese una opción.
        1-Datos personales
        2-Catalogo de productos
        3-Ver carrito
        0-Salir del menú`))

    switch (opcionesIngresada){
        case 1:
            let nombre = prompt("Ingrese el nombre")
            let fecha = prompt("Ingrese el año de nacimiento")
            let provincia = prompt("Desde que provincia nos visitas?")
            let edad = 2023 - fecha

            if(edad >=18){
                bienvenido = true
                alert(`Bienvenido ${nombre}.`)
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
            }
            console.log(`El producto seleccionado es ${opcion}`)
        break
        case 3:
            console.log("Ver Carrito")
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
