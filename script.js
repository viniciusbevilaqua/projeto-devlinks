function toggleMode() {
    const html = document.documentElement
  html.classList.toggle("light")

 const img = document.querySelector("#profile img")


    if (html.classList.contains("light")) {



        img.setAttribute("src", "./assets/avatar-light.png")
        img.setAttribute("alt", "foto mayke brito com fundo amarelo, barba e camisa preta")
        

    } else {

        img.setAttribute("src", "./assets/avatar.png")
        img.setAttribute("alt", "foto mayke brito com fundo colorido, jaqueta preta e óculos preto")

    }
}