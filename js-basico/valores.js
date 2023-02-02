class dispo {
    constructor(id, nombre, marca, modelo, precio){
        this.id = id,
        this.nombre = nombre,
        this.marca = marca,
        this.modelo = modelo,
        this.precio = precio

    }
    
    mostrarInfoDispo(){
        console.log(`El producto es ${this.marca}, de la marca ${this.nombre}, modelo ${this.modelo} y su precio es $${this.precio}`)
    }
}
//INSTANCIACION DE OBJETOS- ESCRIBIR EN ORDEN

const dispositivos1 = new dispo(1,"Computadora","Lenovo", "V310", 9000)

const dispositivos2 = new dispo(2,"Celular","Apple", "XS Max", 4500)

const dispositivos3 = new dispo(3,"Auricular", "RedDragon", "Zeus", 2800)

const dispositivos4 = new dispo(4,"Monitor","Samsung", "As154", 1400)

const dispositivos5 = new dispo(5,"Mouse", "Logitech", "M535", 2200)

const dispositivos6 = new dispo(6, "Teclados", "Logitech", "K380", 2000)


//ARRAY
const dispositivos = [dispositivos1, dispositivos2, dispositivos3, dispositivos4, dispositivos5, dispositivos6]



//FUNCTIONS AGREGAR AL ARRAY
function agregarProducto(){
    let marcaIngresada = prompt("Ingrese la marca")
    let nombreIngresado = prompt("Ingrese el nombre")
    let modeloIngrersado = prompt("Ingrese el modelo")
    let precioIngresado = parseInt(prompt("Ingrese el precio"))


    const produNuevo = new dispo(dispositivos.length+1, marcaIngresada, nombreIngresado, modeloIngrersado, precioIngresado)
    console.log(produNuevo)
    
    // //SUMA AL ARRAY
    dispositivos.push(produNuevo) 
    produNuevo.mostrarInfoDispo()
}

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




let stockProduc = document.getElementById("padreProductos")
for(let dispos of dispositivos){
    let nuevosProductos = document.createElement("div")
    nuevosProductos.innerHTML = 
    `<div id="${dispos.id}" class="card" style="width: 18rem;">
        <div class="cardBody">
            <h4 class="cardTitle">${dispos.nombre} ${dispos.modelo}</h4>
            <p>Marca: ${dispos.marca}</p>
            <p>Precio: ${dispos.precio}</p>
        <button id="" class="btn btn-outline-success">Agregar al carrito</button>
    </div>
</div>`
stockProduc.appendChild(nuevosProductos)
}

// let temperatura = parseInt(prompt(`Que temperatura hace en tu ciudad?`))
// temperatura > 30 ? alert ("Dia caluros!") : alert("Dia agradable")