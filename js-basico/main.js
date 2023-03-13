// DOM
let productos = document.getElementById("productos")
let guardarProductoBtn = document.getElementById("guardarProductoBtn")
let botonLightMode = document.getElementById("botonLightMode")
let botonDarkMode = document.getElementById("botonDarkMode")
let buscador = document.getElementById("buscador")
let coincidencia = document.getElementById("coincidencia")
let selectOrden = document.getElementById("selectOrden")
let stockProduc = document.getElementById("padreProductos")
let botonCarrito = document.getElementById("botonCarrito")
let modalBodyCarrito = document.getElementById("modal-bodyCarrito")
let precioTotal = document.getElementById("precioTotal")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")


// CATALOGO
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
        productos.appendChild(nuevosProductos)

        let btnAgregar = document.getElementById(`agregarBtn${dispos.id}`)
        // btnAgregar.addEventListener("click", ()=>{
            // agregarCarrito(dispos)
            // })
        }
    }    


    // CARRITO
    let productosPorComprar = []
    if(localStorage.getItem("carrito")){
        for(let dispo of JSON.parse(localStorage.getItem("carrito"))){
            let cantStronge = dispo.cantidad
            let productoCarrito = new Dispo(dispo.id, dispo.nombre, dispo.marca, dispo.modelo, dispo.precio, dispo.imagen)
            productoCarrito.cantidad = cantStronge
            productosPorComprar.push(productoCarrito)
        }
    }else{
        productosPorComprar = []
    }

    function agregarCarrito(dispo){

        let productosRepetidos = productosPorComprar.find((prodRepet)=> prodRepet.id == dispo.id)
        if(productosRepetidos == undefined){
            productosPorComprar.push(dispo)
            localStorage.setItem("carrito", JSON.stringify(productosPorComprar))
        
            Swal.fire({
                title: 'Producto agregado',
                text: `El producto ${dispo.nombre} de la marca ${dispo.marca} se agrego correctamente.`,
                imageUrl: `assets/${dispo.imagen}`,
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: "green",
                timer: 3000,
                imageHeight: 100
            })
        }else{
            Swal.fire({
                title: `¡Atencion!`,
                text: `${dispo.nombre} esta repetido`,
                icon: "warning",
                timer: 2000
            })
        }

    }




// AGREGAR 


function agregarProducto(array){
    let nombreIngresado = document.getElementById("nombreInput")
    let marcaIngresada = document.getElementById("marcaInput")
    let modeloIngrersado = document.getElementById("modeloInput")
    let precioIngresado = document.getElementById("precioInput")


    const produNuevo = new Dispo(array.length+1, nombreIngresado.value, marcaIngresada.value, modeloIngrersado.value, precioIngresado.value, "productoNuevo.jpg")


    array.push(produNuevo)
    localStorage.setItem("dispositivos", JSON.stringify(array))
    mostrarInfoDispo(array)


    nombreIngresado.value=""    
    marcaIngresada.value=""   
    modeloIngrersado.value=""
    precioIngresado.value=""
}



function buscarInfo(buscado, array){
    let buscarDispositivos = array.filter(
        (producto)=> producto.nombre.toLowerCase().includes(buscado.toLowerCase()) || producto.marca.toLowerCase().includes(buscado.toLowerCase())
    )
        buscarDispositivos.length == 0 ? (coincidencia.innerHTML = `<h3>Producto no encontrado</h3>`
        , mostrarInfoDispo(buscarDispositivos)) 
        :
        (coincidencia.innerHTML ="" ,
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

function cargarCarrito(array){
    modalBodyCarrito.innerHTML =""
    array.forEach((productosAComprar)=>{
    

    modalBodyCarrito.innerHTML +=`
    <div class="card border-primary mb-3" id="productoCarrito${productosAComprar.id}" style="max-width: 540px;">
        <img class="card-img-top" height="300px" src="assets/${productosAComprar.imagen}" alt="">
        <div class="card-body">
            <h4 class="card-title">${productosAComprar.nombre}</h4>
            <p class="card-text">$${productosAComprar.precio}</p>

            <p class="card-text">Total de unidades: ${productosAComprar.cantidad}
            </p>
            
            <p class="card-text">SubTotal: ${productosAComprar.precio * productosAComprar.cantidad}
            </p>

            <button class= "btn btn-success" id="botonSumarUnidad${productosAComprar.id}"><i class="">
            
            <button class= "btn btn-danger" id="botonEliminarUnidad${productosAComprar.id}"><i class=""></i>-1
            </button>
            
            <button class= "btn btn-danger" id="botonEliminar${productosAComprar.id}"><i class="fas fa-trash-alt"></i>
            </button>
        
            </div>
    </div>    
    `
    })

    array.forEach((productosAComprar)=>{
        document.getElementById(`botonEliminar${productosAComprar.id}`).addEventListener("click", ()=>{
            let cardCarrito = document.getElementById(`productoCarrito${productosAComprar.id}`)
            cardCarrito.remove()
            
            let productoAEliminar = array.find((dispos)=>dispos.id == productosAComprar.id)
            console.log(productoAEliminar)

            let lugar = array.indexOf(productoAEliminar)
            console.log(lugar)
        
            array.splice(lugar,1)
            console.log(array)

            localStorage.setItem("carrito", JSON.stringify(array))
            calcularCarrito (array)
        })

        // SUMAR 
        document.getElementById(`botonSumarUnidad${productosAComprar.id}`).addEventListener("click", ()=>{
            productosAComprar.sumarUnidad()
            localStorage.setItem("carrito", JSON.stringify(array))
            cargarCarrito(array)
        })
        
        // Eliminar

        document.getElementById(`botonEliminarUnidad${productosAComprar.id}`).addEventListener("click",()=>{
            let eliminar = productosAComprar.restarUnidad()
            if(eliminar <1){
                let cardProducto = document.getElementById(`productoCarrito${productosAComprar.id}`)
                cardProducto.remove()
            
                let productoEliminar = array.find((dispos)=>dispos.id ==productosAComprar.id)

                let posicion = array.indexOf(productoEliminar)
                
                array.splice(posicion,1)
                
                localStorage.setItem("carrito", JSON.stringify(array))
                
                calcularTotal(array)
            }else{
                localStorage.setItem("carrito", JSON.stringify(array))
            }
            cargarProductosCarrito(array)
        })
    })
    calcularCarrito(array)
}

        function calcularCarrito (array){
            let total =array.reduce((acc, productosComprar)=> acc + (productosComprar.precio * productosComprar.cantidad), 0)
        
            total == 0 ? precioTotal.innerHTML = `No agregaste nungun producto` : precioTotal.innerHTML = `Total del carrito: <strong>$${total}</strong>`

            return total
        }



function carritoLleno(){
    Swal.fire({
        title:`¿Desas finalizar la compra?`,
        icon: `info`,
        showCancelButton: true,
        confirmButtonText: `Si, finalizar!`,
        cancelButtonText: `No! cancelar!`,
        confirmButtonColor: `green`,
        cancelButtonColor: `red`

    }).then((rta)=>{
        if(rta.isConfirmed){
            Swal.fire({
                title: `Compra exitosa`,
                icon: `success`,
                confirmButtonColor: `green`,
                text: `Gracias por comprar! Vuelva pronto.`,
                timer: 2500
            })
            productosAComprar = []
            localStorage.removeItem("carrito")
        }else{
            Swal.fire({
                title: `Compra Cancelada.`,
                icon: `info`,
                text: `Tus productos permanecen en el carrito cuando quieras volver`,
                confirmButtonColor: `green`,
                timer: 2500
            })
        }
    }
    )
}

// document.getElementById(`botonEliminar`)



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

botonCarrito.addEventListener("click", ()=>{
    cargarCarrito(productosPorComprar)
})
botonFinalizarCompra.addEventListener("click", ()=>{
    carritoLleno()})


mostrarInfoDispo(dispositivos)