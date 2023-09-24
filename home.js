$(".square").one("mouseover", function() {
    $(this).addClass('permahover'); // Adiciona a classe apenas ao elemento atual
});

$('h1').on("mouseenter", function() {
    $('.cursor').addClass('cursor-active'); // Adiciona a classe apenas ao elemento atual
});

$('h1').on("mouseleave", function() {
    $('.cursor-active').removeClass('cursor-active'); // Adiciona a classe apenas ao elemento atual
});


const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px'; 
})    