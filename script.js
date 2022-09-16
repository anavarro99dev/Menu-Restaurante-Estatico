// Tabbed Menu
function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-red";
}

function mostrarHorario() {
    mostrar_dia = document.getElementById("boton_horario");
    Dia_actual = new Date()

    Horario = document.getElementsByClassName("dia")
    HorarioActual = 
    { 
        Lunes: Horario[0].innerHTML,
        Martes: Horario[1].innerHTML,
        Miercoles: Horario[2].innerHTML,
        Jueves: Horario[3].innerHTML,
        Viernes: Horario[4].innerHTML,
        Sabado: Horario[5].innerHTML,
        Domingo: Horario[6].innerHTML,
    }

    switch (Dia_actual.getDay()) {
        case 1:
            mostrar_dia.innerHTML = "Apertura: " + "Lunes, " + HorarioActual.Lunes;
            break;
        case 2:
            mostrar_dia.innerHTML = "Apertura: " + "Martes, " + HorarioActual.Martes;
            break;
        case 3:
            mostrar_dia.innerHTML = "Apertura: " + "Miercoles, " + HorarioActual.Miercoles;
            break;
        case 4:
            mostrar_dia.innerHTML = "Apertura: " + "Jueves, " + HorarioActual.Jueves;
            break;
        case 5:
            mostrar_dia.innerHTML = "Apertura: " + "Viernes, " + HorarioActual.Viernes;
            break;
        case 6:
            mostrar_dia.innerHTML = "Apertura: " + "Sabado, " + HorarioActual.Sabado;
            break;
        case 7:
            mostrar_dia.innerHTML = "Apertura: " + "Domingo, " + HorarioActual.Domingo;
            break;
        default:
            mostrar_dia.innerHTML = "Error";
            break;
    }
}

document.getElementById("myLink").click();
mostrarHorario();