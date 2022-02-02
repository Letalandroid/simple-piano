const tecla = document.getElementsByClassName("tecla");

// Notas musicales
const Do = new Audio("../audio/do.mp3"),
      Re = new Audio("../audio/re.mp3"),
      Mi = new Audio("../audio/mi.mp3"),
      Fa = new Audio("../audio/fa.mp3"),
      Sol = new Audio("../audio/sol.mp3"),
      La = new Audio("../audio/la.mp3"),
      Si = new Audio("../audio/si.mp3"),
      DoSostenido = new Audio("../audio/doSostenido.mp3");

const tocarNota = (e) => {

    const evento = e.target.id;

    switch (evento) {

        case "do":
            Do.play();
            break;

        case "re":
            Re.play();
            break;

        case "mi":
            Mi.play();
            break;

        case "fa":
            Fa.play();
            break;

        case "sol":
            Sol.play();
            break;

        case "la":
            La.play();
            break;

        case "si":
            Si.play();
            break;

        case "doSostenido":
            DoSostenido.play();
            break;

        default:
            break;

    }

}

for (let i = 0; i < tecla.length; i++){

    tecla[i].addEventListener("click", tocarNota);

}