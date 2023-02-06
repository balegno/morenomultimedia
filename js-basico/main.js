// DOM
let guardarProductoBtn = document.getElementById("guardarProductoBtn")
let botonLightMode =document.getElementById("botonLightMode")
let botonDarkMode =document.getElementById("botonDarkMode")
let buscador = document.getElementById("buscador")
let coincidencia = document.getElementById("coincidencia")


// mostrar Catalogo
function verCatalogo(array){
    array.forEach(producto => {
        console.log(producto.id, producto.nombre, producto.marca,
            producto.modelo, producto.precio)
    });
}



//FUNCTIONS AGREGAR AL ARRAY

guardarProductoBtn.addEventListener("click", ()=>{agregarProducto(dispositivos)})

function agregarProducto(array){
    let nombreIngresado = document.getElementById("nombreInput")
    let marcaIngresada = document.getElementById("marcaInput")
    let modeloIngrersado = document.getElementById("modeloInput")
    let precioIngresado = document.getElementById("precioInput")


    const produNuevo = new dispo(array.length+1, nombreIngresado.value, marcaIngresada.value, modeloIngrersado.value, precioIngresado.value, "productoNuevo.jpg")


    array.push(produNuevo)
    localStorage.setItem("dispositivos", JSON.stringify(array))
    mostrarInfoDispo(array)


    nombreIngresado.value=""    
    marcaIngresada.value=""   
    modeloIngrersado.value=""
    precioIngresado.value=""
}

// Function de busqueda:
//FILTER 
// function buscarPorProducto(arr){
//     let productoBuscado = prompt("Ingrese el nombre de la marca que está buscando")
//     let busqueda = arr.filter((productos)=> productos.marca.toLowerCase() == productoBuscado.toLowerCase())
//     if(busqueda.length == 0){
//         console.log(`El producto ${productoBuscado} no esta en Stock.`)
//     }else{
//         console.log(busqueda)
//         verCatalogo(busqueda)
//     }
// }





let stockProduc = document.getElementById("padreProductos")

function mostrarInfoDispo(array){
    stockProduc.innerHTML =""


    for(let dispos of dispositivos){
        let nuevosProductos = document.createElement("div")
        
        nuevosProductos.classList.add("col-12","col-md-6", "col-lg-4")
        nuevosProductos.innerHTML = 
        `<div id="${dispos.id}" class="card" alt="" style="height: 416px; width: 252px;">
        <img src="assets/${dispos.imagen}" alt="${dispos.nombre} de ${dispos.marca} ">
        <div class="cardBody">
        <h4 class="cardTitle">${dispos.nombre} ${dispos.modelo}</h4>
            <p>Marca: ${dispos.marca}</p>
            <p>Precios: ${dispos.precio}</p>
        <button id="agregarbtn${dispos.id}" class="btn btn-outline-success">Agregar al carrito</button>
        </div>
    </div>`
    stockProduc.appendChild(nuevosProductos)
    let btnAgregar = document.getElementById(`agregarbtn${dispos.id}`)
    btnAgregar.addEventListener("click", ()=>{
        console.log(`El producto ${dispos.nombre} de la marca ${dispos.marca}, ha sido cargado correctamente`)
    })
    }
    }    


mostrarInfoDispo(dispositivos)


function buscarInfo(buscador, array){
    let buscarDispositivos = array.filter(
        (producto)=> producto.nombre.toLowerCase().includes(buscador.toLowerCase()) || producto.marca.toLowerCase().includes(buscador.toLowerCase())
    )
        if(buscarDispositivos.length == 0){
            coincidencia.innerHTML = `<h3>No hay coincidencias con su búsqueda</h3>`
            mostrarInfoDispo(buscarDispositivos)
        }else{
            coincidencia.innerHTML =""
            mostrarInfoDispo(buscarDispositivos)
        }

}



buscador.addEventListener("input", ()=>{
    console.log(buscador.value)
    buscarInfo(buscador.value, dispositivos)
})
