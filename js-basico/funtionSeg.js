
function eliminarDispo(array){
    console.log("Con el catalogo, ingrese el ID que desea eliminar")
    for(let elemOff of array){
        console.log(`${elemOff.id} - ${elemOff.marca} de la marca ${elemOff.producto}`)
    }
    let idEliminar = parseInt(prompt("Ingrese el id a eliminar"))

    //COPIA DEL ARRAY
    let arrayID = array.map((dispositivos) => dispositivos.id)
    console.log(arrayID)
    let indice = arrayID.indexOf(idEliminar)
    array.splice(indice, 1)
    verCatalogo(array)
}

//VER CATALOGO
function verCatalogo(array){
    console.log("Bienvenido! Nuestro catalogo es:")
    array.forEach((dispositivos)=>{
        console.log(dispositivos.id, dispositivos.nombre, dispositivos.marca, dispositivos.modelo, dispositivos.precio)
    })
}

//BUSCAR
function buscarPorMarca(array){
    let marcaBuscada = prompt("Ingrese la Marca del producto que desea buscar")
    let marcaEncontrada = array.find(
        (buscMarc)=> buscMarc.marca.toLowerCase() == marcaBuscada.toLowerCase()
        )
    if(marcaEncontrada == undefined){
        console.log(`El producto ${marcaBuscada} no está en stock`)
    }
    else{
        console.log(marcaEncontrada) 
    }
}

//FILTER 
function buscarPorProducto(arr){
    let productoBuscado = prompt("Ingrese el nombre de la marca que está buscando")
    let busqueda = arr.filter((productos)=> productos.marca.toLowerCase() == productoBuscado.toLowerCase())
    if(busqueda.length == 0){
        console.log(`El producto ${productoBuscado} no esta en Stock.`)
    }else{
        console.log(busqueda)
        verCatalogo(busqueda)
    }
}

function ordenarMenorMayor(array){
        const menorMayor = [].concat(array)
        menorMayor.sort((a,b) => a.precio - b.precio)
        verCatalogo(menorMayor)
}
function ordenarMayorMenor(arr){
    const mayorMenor = [].concat(arr)
    mayorMenor.sort((param1, param2)=>{
        return param2.precio - param1.precio
    })
    verCatalogo(mayorMenor)
}
function ordenarAlfabeticamenteTitulo(array){
    const ordAlfabeticamente = [].concat(array)
    ordAlfabeticamente.sort((a,b) => {
        if(a.nombre > b.nombre) {
            return 1
        }
        if (a.nombre < b.nombre) {
            return -1
        }
        return 0;
    })
    verCatalogo(ordAlfabeticamente)
}
function ordenar(array){
    let opcion = parseInt(prompt(`
    1 - Ordenar de menor a mayor
    2 - Ordenar de mayor a menor
    3 - Ordenar alfabeticamente `))
    switch(opcion){
        case 1:
            ordenarMenorMayor(array)
        break
        case 2:
            ordenarMayorMenor(array)
        break
        case 3:
            ordenarAlfabeticamenteTitulo(array)
        break
        default:
            console.log(`${opcion} no es válida para ordenar`)
        break    
    }
}

function menu(){
    let salirMenu = false
    do{
        salirMenu = preguntarOpcion(salirMenu)
    }while(!salirMenu)
} 

function preguntarOpcion(salir){
    let opcionIngresada = parseInt(prompt(`Opciónes:
        1 - Datos personales
        2 - Agregar Dispositivo
        3 - Borrar Dispositivo
        4 - Consultar catálogo
        5 - Encontrar por Nombre
        6 - Buscar Productos
        7 - Ordenar Productos
        0 - Salir del menu`))
    
        switch(opcionIngresada){
            case 1:
                let nombre = prompt("Ingrese el nombre")
                let fecha = prompt("Ingrese el año de nacimiento")
                let provincia = parseInt(prompt("Desde que provincia nos visitas?"))
                let edad = 2023 - fecha
    
        function saludarUsuario(){
    }
    
                saludarUsuario(alert(`Bienvenido ${nombre}`))
                console.log(`${nombre} tiene ${edad} años y es de la provincia de ${provincia}`)
                saludarUsuario()
            break
            case 2:
                agregarProducto()
            break
            case 3:
                eliminarDispo(dispositivos)
            break
            case 4:
                verCatalogo(dispositivos)
            break
            case 5:
                buscarPorProducto(dispositivos)
            break
            case 6:
                buscarPorProducto(dispositivos)
            break
            case 7:
                ordenar(dispositivos)
    
            break
            case 0:
                console.log(`Gracias por visitarnos, te esperamos la proxima`)
                salir = true
                return salir
            break
            default:
                console.log("Ingrese una opción correcta")
            break
        }
    }
    
    // menu()
                