anime({
    targets: '.sq1',
    translateY: -600,
    delay: 100,
    direction: 'alternate',
    easing: 'easeInOutSine',
    opacity: 0,

});
anime({
    targets: '.sq2',
    // direction: 'alternate',
    translateY: 600,
    delay: 100,
    direction: 'alternate',
    easing: 'easeInOutSine',
    opacity: 0,

});
anime({
    targets: '.sq3',
    // direction: 'alternate',
    translateX: 600,
    delay: 100,
    direction: 'alternate',
    easing: 'easeInOutSine',
    opacity: 0,
});

//acion sq1 click y amigos
var sq1click = anime({
    targets: '.sq1',
    translateX: -600,
    delay: 50,
    easing: 'easeInOutSine',
    opacity: 0.1,

});
var sq1clickinsq2 = anime({
    targets: '.sq2',
    translateY: 600,
    delay: 50,
    easing: 'easeInOutSine',
    opacity: 0.1,

});
var sq1clickinsq3 = anime({
    targets: '.sq3',
    translateX: 600,
    delay: 50,
    easing: 'easeInOutSine',
    opacity: 0.1,

});
var enterInsq1 = document.querySelector('.sq1');
enterInsq1.addEventListener('click', function() {
    sq1click.play();
    sq1clickinsq2.play();
    sq1clickinsq3.play();
    const pagina = "./sello.html"

    function redireccionar() {
        location.href = pagina
    }
    setTimeout(redireccionar, 900);
});

//fin de accion click 1 y red 
//accion click 2 y red
var sq2click = anime({
    targets: '.sq1',
    translateY: -600,
    delay: 50,
    easing: 'easeInOutSine',
    opacity: 0.1,

});
var enterInsq2 = document.querySelector('.sq2');
enterInsq2.addEventListener('click', function() {
    sq2click.play();
    sq1clickinsq2.play();
    sq1clickinsq3.play();
    const pagina = "./Enciclopediadelacarne.html"

    function redireccionar() {
        location.href = pagina
    }
    setTimeout(redireccionar, 900);
});
//fin acion 2

//accion click 3 
var enterInsq2 = document.querySelector('.sq3');
enterInsq2.addEventListener('click', function() {
    sq2click.play();
    sq1clickinsq2.play();
    sq1clickinsq3.play();
    const pagina = "./blog.html"

    function redireccionar() {
        location.href = pagina
    }
    setTimeout(redireccionar, 900);
});