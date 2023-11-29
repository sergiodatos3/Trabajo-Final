function mostrar() {
document.getElementById('img').style.display = 'block'
}

function ocultar() {
    document.getElementById('img').style.display = 'none'
    
}

function mostrar2() {
    document.getElementById('img2').style.display = 'block'
    }
    
    function ocultar2() {
        document.getElementById('img2').style.display = 'none'
    }
    function mostrar3() {
        document.getElementById('img3').style.display = 'block'
        }
        
        function ocultar3() {
            document.getElementById('img3').style.display = 'none'
        }

//menu lateral
var menu_visible = false;
let menu = document.getElementById ("nav");
function mostrarOcultarMenu() {
if (menu_visible==false) {// si esta oculto
menu.style.display = "block"
menu_visible = true
}
else{
    menu.style.display = "none"
    menu_visible = false
}
}


//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll ("nav a")
for (var x = 0; x <links.length;x++) {
    links[x].onclick = function() {
        menu.style.display = "none"
        menu_visible = false
    }
}


//const $html = document.documentElement
//$body = document.body
//let touchpadmedio = getComputedStyle($html).getPropertyValue ("scroll-behavior")
//let touchpadlento = getComputedStyle ($html).getPropertyValue ("")




