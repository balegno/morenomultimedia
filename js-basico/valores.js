
let nombre = prompt("Ingrese el nombre")
let fecha = prompt("Ingrese el año de nacimiento")
let edad = 2023 - fecha


while (!edad){
    if(edad <18){
        alert(`${nombre} `)
    }else if(edad >=18){
        edad = true
        alert(`Bienvenid@ ${nombre} `)
    }
}



let continuamos = false
while(!continuamos){

    let editorial = prompt("Que libro te gustaria comprar")

    if(editorial.toUpperCase() == "DRAGON BALL" || editorial.toUpperCase() == "POKEMON" || editorial.toUpperCase() == "COLOREAR"){
        continuamos = true
        alert(`Aaah si si, lo tenemos a ${editorial}. Ya lo busco..`)
        console.log(`El cliente quiere el libro ${editorial} que por suerte tenemos en stock`)
    }else{
        console.log(`El cliente quiere justo el unico libro que no tenemos -.-`)
        alert(`No tengo el libro ${editorial}... Solo tengo de Dragon Ball, Pokemon y unos para colorear.`)
    }
}
    
    
    let precio = prompt(`No me acuerdo el precio de el libro. Vos te acordas?`)
    
    if(precio < 100){
        console.log("El mas barato de todos va a comprar...")
        alert(`Este libro de ${editorial} es genial.`)
    }
    else if(precio < 250){
        console.log("Guarda, con el pago de este libro puede desestabilizar el pais")
        alert(`Este libro de ${editorial} es genial.`)
    }
    else if(precio < 550){
        console.log("Seguro es para un sobrino que no soporta mucho")
        alert(`Este libro de ${editorial} es genial.`)
    }
    else if(precio < 780){
        console.log("Este libro esta bueno... Si te gustan los dibujitos esta bueno...")
        alert(`Este libro de ${editorial} es genial.`)
    }
    else {
        console.log("Este esta joya... espero no se de cuenta que todos los libros salen menos de $100")
        alert(`Este libro de ${editorial} es genial.`)
    }




let yaCasi = false
while(!yaCasi){
    
        let color2 = prompt("De que color es la tapa de ese libro?")
        
        if(color2.toLowerCase() == "gris"){
            yaCasi = true
            console.log("No se porque todos los libros que tenemos son de tapas grises.. creo que mi vista no anda muy bien")
            alert(`Que bien! Justo todos los libros son de color ${color2}!`)
        }else{
            alert(`${color2}??? me parece que no sabes mucho de colores, volve a escribirlo porfavor.`)
            console.log("Mmmm no se que color sea ese... Para mi todos los colores son iguales...")
        }
    }

