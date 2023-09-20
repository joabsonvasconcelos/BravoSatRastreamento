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


document.addEventListener('DOMContentLoaded', function () {
    // Encontre todos os links de âncora no menu
    const linksDoMenu = document.querySelectorAll('.menu a');

    // Adicione um evento de clique a cada link do menu
    linksDoMenu.forEach(function (link) {
        link.addEventListener('click', function (event) {
            // Previne o comportamento padrão de clicar em um link
            event.preventDefault();

            // Obtém o destino do link (por exemplo, "#inicio", "#sobre", "#contato")
            const destino = this.getAttribute('href');

            // Obtém o elemento de destino usando o ID
            const elementoDestino = document.querySelector(destino);

            // Obtém a posição do topo do elemento de destino
            const posicaoTopo = elementoDestino.offsetTop;

            // Define o deslocamento suave para o topo do elemento de destino
            window.scrollTo({
                top: posicaoTopo,
                behavior: 'smooth' // Rolagem suave
            });
        });
    });
});


