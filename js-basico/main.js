// DOM
let guardarProductoBtn = document.getElementById("guardarProductoBtn")
let botonLightMode =document.getElementById("botonLightMode")
let botonDarkMode =document.getElementById("botonDarkMode")
let buscador = document.getElementById("buscador")
let coincidencia = document.getElementById("coincidencia")
let selectOrden =document.getElementById("selectOrden")
let stockProduc = document.getElementById("padreProductos")


// mostrar Catalogo
function verCatalogo(array){
    array.forEach(producto => {
        console.log(producto.id, producto.nombre, producto.marca,
            producto.modelo, producto.precio)
    })
}

function mostrarInfoDispo(array){
    stockProduc.innerHTML =""


    for(let dispos of array){
        let nuevosProductos = document.createElement("div")
        
        nuevosProductos.classList.add("col-12","col-md-6", "col-lg-4")
        nuevosProductos.innerHTML = 
        `<div id="${dispos.id}" class="card" alt="" style="height: 416px; width: 252px;">
        <img src="assets/${dispos.imagen}" alt="${dispos.nombre} de ${dispos.marca} ">
        <div class="cardBody">
        <h4 class="cardTitle">${dispos.nombre} ${dispos.modelo}</h4>
            <p>Marca: ${dispos.marca}</p>
            <p>Precios: ${dispos.precio}</p>
        <button id="agregarBtn${dispos.id}" class="btn btn-outline-success">Agregar al carrito</button>
        </div>
    </div>`
    stockProduc.appendChild(nuevosProductos)

    let btnAgregar = document.getElementById(`agregarBtn${dispos.id}`)
    btnAgregar.addEventListener("click", ()=>{
        agregarCarrito(dispos)
    })
    }
    }    


    // Array de productos en carrito
    let productosPorComprar
    localStorage.getItem("carrito") ?
    (productosPorComprar = JSON.parse(localStorage.getItem("carrito"))) : (productosPorComprar= [])

    
    function agregarCarrito(dispos){
    console.log(`El producto ${dispos.nombre} se agrego.`)
    productosPorComprar.push(dispos)
    localStorage.setItem("carrito", JSON.stringify(productosPorComprar))
    }

//FUNCTIONS AGREGAR AL ARRAY


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

mostrarInfoDispo(dispositivos)


function buscarInfo(buscado, array){
    let buscarDispositivos = array.filter(
        (producto)=> producto.nombre.toLowerCase().includes(buscado.toLowerCase()) || producto.marca.toLowerCase().includes(buscado.toLowerCase())
    )
        buscarDispositivos.length == 0 ? (coincidencia.innerHTML = `<h3>Producto no encontrado</h3>`
        , mostrarInfoDispo(buscarDispositivos)) : (coincidencia.innerHTML ="" ,
        mostrarInfoDispo(buscarDispositivos)) 
}

// ORDEN
function ordenarMenorMayor(array){
    const menorMayor = [].concat(array)
    menorMayor.sort((a,b) => a.precio - b.precio)
    mostrarInfoDispo(menorMayor)
}
function ordenarMayorMenor(arr){
const mayorMenor = [].concat(arr)
mayorMenor.sort((a1, b2)=>{
    return b2.precio - a1.precio
})
mostrarInfoDispo(mayorMenor)
}
function ordenarAlfabet(array){
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
mostrarInfoDispo(ordAlfabeticamente)
}


// EVENTOS
guardarProductoBtn.addEventListener("click", ()=>{
    agregarProducto(dispositivos)
})


buscador.addEventListener("input", ()=>{
    buscarInfo(buscador.value, dispositivos)
})

selectOrden.addEventListener("change", ()=>{
    if(selectOrden.value ==1){
        ordenarMayorMenor(dispositivos)
    }
    else if(selectOrden.value ==2){
        ordenarMenorMayor(dispositivos)
    }
    else if(selectOrden.value ==3){
        ordenarAlfabet(dispositivos)
    }
    else{
        mostrarInfoDispo(dispositivos)
    }
})

