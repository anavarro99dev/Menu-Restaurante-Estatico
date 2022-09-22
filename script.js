// Tabbed Menu
function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
    }
    document.getElementById(menuName).style.display = "block";
    // evt.currentTarget.firstElementChild.className += " w3-red";
}

function mostrarHorario() {
    mostrar_diaDesk = document.getElementsByClassName("boton_horario")[0];
    mostrar_diaMovil = document.getElementsByClassName("boton_horario")[1];
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
            mostrar_diaDesk.innerHTML = "<u>Apertura</u>: " + "<i><b>Lunes</b></i>, " + HorarioActual.Lunes;
            mostrar_diaMovil.innerHTML = "<i><b>Lunes</b></i>, " + HorarioActual.Lunes;
            break;
        case 2:
            mostrar_diaDesk.innerHTML = "<u>Apertura</u>: " + "<i><b>Martes</b></i>, " + HorarioActual.Martes;
            mostrar_diaMovil.innerHTML = "<i><b>Martes</b></i>, " + HorarioActual.Martes;
            break;
        case 3:
            mostrar_diaDesk.innerHTML = "<u>Apertura</u>: " + "<i><b>Miercoles</b></i>, " + HorarioActual.Miercoles;
            mostrar_diaMovil.innerHTML = "<i><b>Miercoles</b></i>, " + HorarioActual.Miercoles;
            break;
        case 4:
            mostrar_diaDesk.innerHTML = "<u>Apertura</u>: " + "<i><b>Jueves</b></i>, " + HorarioActual.Jueves;
            mostrar_diaMovil.innerHTML = "<i><b>Jueves</b></i>, " + HorarioActual.Jueves;
            break;
        case 5:
            mostrar_diaDesk.innerHTML = "<u>Apertura</u>: " + "<i><b>Viernes</b></i>, " + HorarioActual.Viernes;
            mostrar_diaMovil.innerHTML = "<i><b>Viernes</b></i>, " + HorarioActual.Viernes;
            break;
        case 6:
            mostrar_diaDesk.innerHTML = "<u>Apertura</u>: " + "<i><b>Sabado</b></i>, " + HorarioActual.Sabado;
            mostrar_diaMovil.innerHTML = "<i><b>Sabado</b></i>, " + HorarioActual.Sabado;
            break;
        case 7:
            mostrar_diaDesk.innerHTML = "<u>Apertura</u>: " + "<i><b>Domingo</b></i>, " + HorarioActual.Domingo;
            mostrar_diaMovil.innerHTML = "<i><b>Domingo</b></i>, " + HorarioActual.Domingo;
            break;
        default:
            mostrar_diaDesk.innerHTML = "Error";
            breMomostrar_diaMovilak;
    }
}

function myFunction() {
    var x = document.getElementById("boton_movil");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
  

document.getElementById("myLink").click();
mostrarHorario();