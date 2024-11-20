/***
Autor: Adrian Emiliano Rodriguez Santiesteban
Fecha: 20/11/2024
Lenguaje html
Fuente: local
Examen
***/
document.addEventListener("keydown", function(event){

    const elemento = document.getElementById("Cuerpo");

    if (event.key ==="1"){

        elemento.className = "Cuerpo00";                    //Aqui dice que escuche al teclado y va cambiar el color del fondo y las letras

    }

    if (event.key ==="2"){

        elemento.className = "Cuerpo01";

    }

    if(event.key ==="3"){

        elemento.className = "Cuerpo02";

    }

    if(event.key ==="4"){

        elemento.className = "Cuerpo03";

    }

    if(event.key ==="5"){

        elemento.className = "Cuerpo04";

    }


});

document.addEventListener("keydown", function(event){console.log(event)});

const texto = document.getElementById("Texto");

document.addEventListener("keydown",function(event){            
       const texto = document.getElementById("Texto");
       
       if(event.key==="ArrowUp"){           //aqui dice que al presionar la tecla de arriba saldra el mensaje de abajo

              texto.textContent="Flecha arriba";
       }

       else if(event.key==="ArrowDown"){        //lo mismo pero con la tecla de abajo
              
              texto.textContent="Flecha abajo";


    
       }

});

/***Universidad Autonoma de Durango ***/
/***Diseño de la comunicacion grafica ***/