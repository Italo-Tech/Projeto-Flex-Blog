function initScroll() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault(); // previni o comportamento normal do clique no link
        const href = event.currentTarget.getAttribute('href'); // pegando o id em cada clique dos links
        const section = document.querySelector(href); // seleciona toda a section do href clicado

        // Elemento em si
        section.scrollIntoView({
            behavior: 'smooth', // forma de como será o caminho para seção - o smooth é de forma lenta e mais atrativa
            block: 'center', // forma de onde o scroll irá parar para apresentação
        });

    }


    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}
initScroll();