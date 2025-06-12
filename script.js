function toggLeMode() {
    const html = document.documentElement
    html.classList.toggle('light')
   
    //pegar a tag img
    const img = document.querySelector("#profile img")
   
    //substituir a imagem
    if (html.classList.contains('light')) {
    //se tiver mode,adicionar a imagem light
    img.setAttribute("src", "./assets/avatar.png")
   } else {
    //se tiver sem light mode, mater a imagem normal 
    img.setAttribute("src", "./assets/avatar.png")
    }
   }