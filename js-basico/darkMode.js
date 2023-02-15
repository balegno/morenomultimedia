// DarkMode
let modoOscuro 

localStorage.getItem("modoOscuro") ? (modoOscuro = JSON.parse(localStorage.getItem("modoOscuro"))) : (localStorage.setItem("modoOscuro", false)), (modoOscuro = JSON.parse(localStorage.getItem("modoOscro")))


modoOscuro == "true" ? (document.body.classList.add("darkMode")) : (document.body.classList.remove("darkMode"))

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