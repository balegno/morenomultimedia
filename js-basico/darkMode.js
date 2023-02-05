// DarkMode
let modoOscuro 

if(localStorage.getItem("modoOscuro")){
    modoOscuro = localStorage.getItem("modoOscuro")
}else{
    localStorage.setItem("modoOscuro", false)
    modoOscuro = "false"
}


if(modoOscuro == "true"){
    document.body.classList.add("darkMode")
}else{
    document.body.classList.remove("darkMode")
}

botonDarkMode.addEventListener("click",()=>{
    document.body.classList.add("darkMode")
    localStorage.setItem("modoOscuro", true)
})

botonLightMode.addEventListener("click",()=>{
    document.body.classList.remove("darkMode")
    localStorage.setItem("modoOscuro", false)
})

let eliminarModeBtn = document.getElementById("eliminarMode")

eliminarModeBtn.addEventListener("click",()=> {
localStorage.removeItem("modoOscuro")
localStorage.clear()
})