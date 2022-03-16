function acendeLampada() {

    const imagem = document.getElementById("lamp-off").src;

    if (imagem.includes("Lamp-off.png")) {

            document.getElementById("lamp-off").src = "Lamp-on.png";
            
    } else {
            document.getElementById("lamp-off").src = "Lamp-off.png";
    }
}