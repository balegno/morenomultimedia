class Dispo {
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
//         console.log(`El producto es ${this.marca}, de la marca ${this.nombre}, modelo ${this.modelo} y su precio es $${this.precio}`)
    }





//INSTANCIACION DE OBJETOS- ESCRIBIR EN ORDEN

// const dispositivos1 = new Dispo(1,"Computadora","Lenovo", "V310", 9000, "lenovoV310.jpg")

// const dispositivos2 = new Dispo(2,"iPhone","Apple", "14", 4500, "iphone14.jpg")

// const dispositivos3 = new Dispo(3,"iPhone","Apple", "13", 4500, "iphone13.jpg")

// const dispositivos4 = new Dispo(4,"iPhone","Apple", "12 Pro Max", 4500, "iphone12proMax.jpg")

// const dispositivos5 = new Dispo(5,"Auricular", "RedDragon", "Zeus", 2800, "redDragonZeus.jpg")

// const dispositivos6 = new Dispo(6,"Monitor","Samsung", "As154", 1400, "samsung24.jpg")

// const dispositivos7 = new Dispo(7,"Mouse", "Logitech", "M535", 2200, "logiM535.jpg")

// const dispositivos8 = new Dispo(8, "Teclados", "Logitech", "K380", 2000, "logi380.jpg")

// const dispositivos9 = new Dispo(9,"MakBook", "Apple", "Pro 2016", 2200, "macpro16.jpg")

// const dispositivos10 = new Dispo(10,"MakBook", "Apple", "Pro 2020", 2200, "macpro20.jpg")

// const dispositivos11 = new Dispo(11,"Monitor", "Dell", "vm5400", 2200, "monitorDell.jpg")

// const dispositivos12 = new Dispo(12,"Monitor", "Benq", "Mv5000", 2200, "monitorBenq.jpg")

// const dispositivos13 = new Dispo(13,"Computadora", "intel", "i7", 2200, "pcInteli7.jpg")

// const dispositivos14 = new Dispo(14,"Computadora", "intel", "i3", 2200, "pcInteli3.jpg")

// const dispositivos15 = new Dispo(15,"iPad", "Apple", "9 Gen", 2200, "ipad9.jpg")


//ARRAY
let dispositivos = []



const cargarProductos = async ()=>{
    const response = await fetch("productos.json")
    const data = await response.json()
    console.log(data)
    for(let dispo of data){
        let productoJson = new Dispo(dispo.id, dispo.nombre, dispo.marca, dispo.modelo, dispo.precio, dispo.imagen)
        dispositivos.push(productoJson)
    }
    localStorage.setItem("dispositivos", JSON.stringify(dispositivos))
}


if(localStorage.getItem("dispositivos")){

for(let dispo of JSON.parse(localStorage.getItem("dispositivos"))){
    let productoJson = new Dispo(dispo.id, dispo.nombre, dispo.marca, dispo.modelo, dispo.precio, dispo.imagen)
    dispositivos.push(productoJson)}

}else{
    // localStorage.setItem("dispositivos", JSON.stringify(dispositivos))
    cargarProductos()
}
