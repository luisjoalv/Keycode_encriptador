function ocultar(){
    document.querySelector(".muestraMensaje").style.display = "flex";
    document.querySelector(".imagen").style.display = "flex";
    document.querySelector(".areaMensaje").style.display = "none";
    document.querySelector(".btn").style.display = "none";
}
function mostrar(){
    document.querySelector(".muestraMensaje").style.display = "flex";
    document.querySelector(".imagen").style.display = "none";
    document.querySelector(".areaMensaje").style.display = "flex";
    document.querySelector(".btn").style.display = "flex";
}

function textoValido(){
    let texto = document.querySelector(".areatexto").value;
    let validar = texto.match(/^[a-z ]*$/);

    if (!validar || validar == 0 ){
        swal({
            title: "Error",
            text: "Favor de ingresar palabras en minúsculas y sin acentos.",
            buttons: false,
            timer: 3000,
        });
        ocultar();
        document.querySelector(".areatexto").value = "";
        return true;
    }
}
function encriptar(){
    if (!textoValido()){
        let textomen =  document.querySelector(".areatexto").value;
        textomen = textomen.toLowerCase();
        textomen = textomen.replace(/e/g, "enter");
        textomen = textomen.replace(/i/g, "imes");
        textomen = textomen.replace(/a/g, "ai");
        textomen = textomen.replace(/o/g, "ober");
        textomen = textomen.replace(/u/g, "ufat");
        console.log(textomen);
        document.querySelector(".areaMensaje").value = textomen;
        document.querySelector(".areatexto").value = "";
        mostrar();
    }
}
function desencriptar(){
    if (!textoValido()){
        var textomen = document.querySelector(".areatexto").value;
        textomen = textomen.replace(/enter/g, "e");
        textomen = textomen.replace(/imes/g, "i");
        textomen = textomen.replace(/ai/g, "a");
        textomen = textomen.replace(/ober/g, "o");
        textomen = textomen.replace(/ufat/g, "u");
        console.log(textomen);
        document.querySelector(".areaMensaje").value = textomen;
        document.querySelector(".areatexto").value = "";
        mostrar();
    }
}
function copiar(){
    document.querySelector(".areaMensaje").select();
    navigator.clipboard.writeText(document.querySelector(".areaMensaje").value);
    document.querySelector(".areaMensaje").value = "";
    swal({
        title: "Buen trabajo!!",
        text: "Su mensaje ha sido copiado.",
        buttons: false,
        timer: 2000,
    });
    document.querySelector(".muestraMensaje").style.display = "none";
}