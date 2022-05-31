let btn_bars = document.getElementById('btn-bars');
let menu = document.getElementById('lista-menu');
let btn_close = document.getElementById('close');
let estado = false;
btn_bars.addEventListener('click', function(e) {

    if (estado == false) {
        menu.style.right = '0px';
        estado = true;
    }
    e.preventDefault();
})

btn_close.addEventListener('click', function(e) {
        if (estado) {
            estado = false
            menu.style.right = '-480px';
            e.preventDefault();
        }

    }

)

console.log("si");