window.addEventListener("scroll", function() {
    var menu = document.querySelector(".topo");
    if (window.scrollY > 50) { // ou qualquer valor que você preferir
        menu.classList.add("scroll-topo");
    } else {
        menu.classList.remove("scroll-topo");
    }
});


window.addEventListener("scroll", function() {
    var menu = document.querySelector(".menu");
    if (window.scrollY > 100) { // ou qualquer valor que você preferir
        menu.classList.add("scroll-menu");
    } else {
        menu.classList.remove("scroll-menu");
    }
});


$(document).ready(function() {
    $('#telefone').inputmask('(99) 9999-9999'); // Define a máscara de telefone
});

$(document).ready(function() {
    $('#celular').inputmask('(99) 99999-9999'); // Define a máscara de telefone
});



