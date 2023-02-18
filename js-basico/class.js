class dispo {
    constructor(id, nombre, marca, modelo, precio, imagen){
        this.id = id,
        this.nombre = nombre,
        this.marca = marca,
        this.modelo = modelo,
        this.precio = precio,
        this.imagen = imagen,
        this.cantidad =1
    }
    
    sumarProducto(){
        this.cantidad = this.cantidad +1
        return this.cantidad
    }
    restarProducto(){
        this.cantidad = this.cantidad -1
        return this.cantidad
    }    

// mostrarInfoDispo(){
    //     console.log(`El producto es ${this.marca}, de la marca ${this.nombre}, modelo ${this.modelo} y su precio es $${this.precio}`)
    // }
}


//INSTANCIACION DE OBJETOS- ESCRIBIR EN ORDEN

// const dispositivos1 = new dispo(1,"Computadora","Lenovo", "V310", 9000, "lenovoV310.jpg")

// const dispositivos2 = new dispo(2,"iPhone","Apple", "14", 4500, "iphone14.jpg")

// const dispositivos3 = new dispo(3,"iPhone","Apple", "13", 4500, "iphone13.jpg")

// const dispositivos4 = new dispo(4,"iPhone","Apple", "12 Pro Max", 4500, "iphone12proMax.jpg")

// const dispositivos5 = new dispo(5,"Auricular", "RedDragon", "Zeus", 2800, "redDragonZeus.jpg")

// const dispositivos6 = new dispo(6,"Monitor","Samsung", "As154", 1400, "samsung24.jpg")

// const dispositivos7 = new dispo(7,"Mouse", "Logitech", "M535", 2200, "logiM535.jpg")

// const dispositivos8 = new dispo(8, "Teclados", "Logitech", "K380", 2000, "logi380.jpg")

// const dispositivos9 = new dispo(9,"MakBook", "Apple", "Pro 2016", 2200, "macpro16.jpg")

// const dispositivos10 = new dispo(10,"MakBook", "Apple", "Pro 2020", 2200, "macpro20.jpg")

// const dispositivos11 = new dispo(11,"Monitor", "Dell", "vm5400", 2200, "monitorDell.jpg")

// const dispositivos12 = new dispo(12,"Monitor", "Benq", "Mv5000", 2200, "monitorBenq.jpg")

// const dispositivos13 = new dispo(13,"Computadora", "intel", "i7", 2200, "pcInteli7.jpg")

// const dispositivos14 = new dispo(14,"Computadora", "intel", "i3", 2200, "pcInteli3.jpg")

// const dispositivos15 = new dispo(15,"iPad", "Apple", "9 Gen", 2200, "ipad9.jpg")


//ARRAY
let dispositivos = []

const cargarProductos = async ()=>{
    const response = await fetch("productos.json")
    const data = await response.json()
    console.log(data)
    for(let producto of data){
        let productoJson = new dispo(producto.id, producto.nombre, producto.marca, producto.modelo, producto.precio, producto.imagen)
        dispositivos.push(productoJson)
    }
}


if(localStorage.getItem("dispositivos")){

for(let producto of JSON.parse(localStorage.getItem)){
    let productoJson = new dispo(producto.id, producto.nombre, producto.marca, producto.modelo, producto.precio, producto.imagen)
    dispositivos.push(productoJson)
}
cargarProductos()
}else{
localStorage.setItem("dispositivos", JSON.stringify(dispositivos))}