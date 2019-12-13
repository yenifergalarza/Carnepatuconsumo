// anime({
//     targets: '.sq2',
//     translateY: -900,
//     delay: 100,
//     direction: 'alternate',
//     easing: 'easeInOutSine',
//     opacity: 0,

// });
// anime({
//     targets: '.sq1',
//     translateX: -900,
//     delay: 100,
//     direction: 'alternate',
//     easing: 'easeInOutSine',
//     opacity: 0,

// });


// const sq1click = anime({
//     targets: '.sq1',
//     translateX: -600,
//     delay: 50,
//     easing: 'easeInOutSine',
//     opacity: 0.1,

// });

// const sq1clickinsq2 = anime({
//     targets: '.sq2',
//     translateY: 900,
//     delay: 50,

//     easing: 'easeInOutSine',
//     opacity: 0,

// });



// const enterInsq1 = document.querySelector('.sq1');
// enterInsq1.addEventListener('click', () => {


//     function redireccionar() {
//         sq1click.play();
//         sq1clickinsq2.play();
//         const pagina = "./pasto.html"
//         location.href = pagina
//     }
//     setTimeout(redireccionar, 900);
// });



// const sq2click = anime({
//     targets: '.sq2',
//     translateX: -600,
//     delay: 50,
//     easing: 'easeInOutSine',
//     opacity: 0.1,

// });

// const sq2clickinsq2 = anime({
//     targets: '.sq1',
//     translateY: 900,
//     delay: 100,
//     direction: 'alternate',
//     easing: 'easeInOutSine',
//     opacity: 0,

// });

// const enterInsq2 = document.querySelector('.sq2');
// enterInsq2.addEventListener('click', function() {


//     function redireccionar() {
//         sq2click.play();
//         sq2clickinsq2.play();
//         const pagina = "./pasto.html";
//         location.href = pagina
//     }
//     setTimeout(redireccionar, 900);
// });
const containerAlimentacion = document.getElementById("container-alimentacion");
const pasto =document.getElementById("pasto");
const grano =document.getElementById("grano");


pasto.addEventListener("click",function(){
    containerAlimentacion.innerHTML=`
    <div  class="contenedor">
                <div class="d-flex align-items-center center-xs">
                   <div>
                        <a href="./alimentacion.html" class="title">
                            <div class="title d-flex mb-5">
                                <img class="atras" src="../../assets/atras.svg" alt="">
                                <h1 class="color-green ml-3">PASTO</h1>
                            </div>
                        </a>
                        <img src="../../assets/Pasto.png" alt="" class="w-15rem fade-in-right ">
                    </div>
                </div>
                <div class="m-ul">
                        <ul>
                            <li>Alimentación</li>
                            <li>Manejo Del Animal</li>
                            <li>PED Lot</li>
                        </ul>
                            <a href="" class="d-flex">
                            <img class="atras-pasto pt-2" src="../../assets/adelante.svg" alt="">
                            <p class="ml-2 mt-2">Ver productos</p>
                            </a>
                    </div>
                <div class="w-30 ml-5 ml-xs w-30-mobile">
                    <figure><img src="../../assets/nutricionales.svg" alt="" class="w80"></figure>
                    <div class="d-flex">
                        <div class="border-all w-50 p-2 m-2 d-flex centrado">
                            <img src="../../assets/flecha-abajo.svg" alt="" class="img-xs">
                            <p class="grande ml-2 mr-2 separado">80%</p>
                            <p class="separado">MENOS <br> GRASA</p>
                        </div>
                        <div class="border-all w-50 p-2 m-2 d-flex centrado">
                            <img src="../../assets/flecha-abajo.svg" alt=""class="img-xs">
                            <p class="grande ml-2 mr-2 separado">30%</p>
                            <p class="separado">MENOS <br> COLESTEROL</p>
                        </div>
                    </div>
                    <div class="border-all p-2 m-2 d-flex centrado">
                        <img src="../../assets/corazon.svg" alt=""class="img-xs">
                        <p class="ml-3 separado">LA CARNE DE RES ALIMENTADA CON PASTO TIENE UN MAYOR CONTENIDO DE ACIDOS GRASOS
                            OMEGA-3 SALUDABLES PARA EL CORAZON
                        </p>
                    </div>
                    <div class="d-flex centrado">
                        <div class="w-70 p-2 m-2">
                            <div class="d-flex centrado"> 
                                <p class="separado-ojo">10X MAS VITAMINA A</p> 
                                <img src="../../assets/ojo.svg" alt="" class="ojo ml-3">
                            </div>
                            <hr class="my-2">
                            <p class="text-center separado-ojo">ALTO EN ANTIOXIDANTES</p>
                        </div>
                        <div class="d-flex centrado w-30 border-all p-2 m-2">
                                <p class="separado">
                                4X MAS<br> VITAMINA
                                </p>
                                <p class=" grande ml-2 mr-2">E</p>
                            </div>
                    </div>
                    <figure class="mt-3"><img src="../../assets/animal.svg" alt=""class="w80"></figure>
                    <div class="border-all p-2 m-2">
                        <span class="separado">SOSTENIBILIDAD</span>
                        <p class="">Nuestros carniceros expertos, dedicados en el arte de la carniceria de animales enteros
                            trabajan para garantizar que ninguna parte del animal se desperdicie.</p>
                    </div>
                    <div class="border-all p-2 m-2">
                        <span class="separado">CRIANZA</span>
                        <p class="">Sin esteroides, sin antibióticos, sin hormonas añadidas 100% carne de animales libres.</p>
                    </div>
                    <div class="border-all p-2 m-2">
                        <span class="separado">TRAZABILIDAD</span>
                        <p class="">controlamos toda la cadena de suministros garanatizando la producción de ganados con practicas de bienestar animal</p>
                    </div>
                </div>                   
            </div>   `
})

grano.addEventListener("click",function(){
    containerAlimentacion.innerHTML=`
    <div  class="contenedor">
                <div class="d-flex align-items-center center-xs">
                   <div>
                        <a href="./alimentacion.html" class="title">
                            <div class="title d-flex mb-5">
                                <img class="atras" src="../../assets/atras.svg" alt="">
                                <h1 class="color-green ml-3">GRANO</h1>
                            </div>
                        </a>
                        <img src="../../assets/grano.png" alt="" class="w-15rem fade-in-right">
                    </div>
                </div>
                <div class="m-ul">
                        <ul>
                            <li>Nuestra alimentación se</li>
                            <li>basa en maíz y soya.</li>
                        </ul>
                            <a href="" class="d-flex">
                            <img class="atras-pasto pt-2" src="../../assets/adelante.svg" alt="">
                            <p class="ml-2 mt-2">Ver productos</p>
                            </a>
                    </div>
                <div class="w-30 ml-5 ml-xs w-30-mobile">
                    <figure><img src="../../assets/nutricionales.svg" alt="" class="w80"></figure>
                    <div class="d-flex">
                        <div class="border-all w-100 p-2 m-2 d-flex centrado">
                            <img src="../../assets/more.svg" alt="" class="img-xs ml-2">
                            <p class="ml-3 separado">LA CARNE DE RES ALIMENTADA CON GRANO CONTIENE ACIDOS GRASOS OMEGA-6,
                                CONSIDERADOS COMO MAS SALUDABLES
                            </p>
                        </div>
                    </div>
                    <div class="d-flex centrado">
                        <div class="w-70 p-2 m-2">
                            <div class="d-flex centrado"> 
                                <p class="separado-ojo">10X MAS VITAMINA A</p> 
                                <img src="../../assets/ojo.svg" alt="" class="ojo ml-3">
                            </div>
                            <hr class="my-2">
                            <p class="text-center separado-ojo">ALTO EN ANTIOXIDANTES</p>
                        </div>
                        <div class="d-flex centrado w-30 border-all p-2 m-2">
                                <p class="separado">
                                4X MAS<br> VITAMINA
                                </p>
                                <p class=" grande ml-2 mr-2">E</p>
                            </div>
                    </div>
                    <figure class="mt-3"><img src="../../assets/animal.svg" alt=""class="w80"></figure>
                    <div class="border-all p-2 m-2">
                        <span class="separado">SOSTENIBILIDAD</span>
                        <p class="">Nuestros carniceros expertos, dedicados en el arte de la carniceria de animales enteros
                            trabajan para garantizar que ninguna parte del animal se desperdicie.</p>
                    </div>
                    <div class="border-all p-2 m-2">
                        <span class="separado">CRIANZA</span>
                        <p class="">Sin esteroides, sin antibióticos, sin hormonas añadidas 100% carne de animales libres.</p>
                    </div>
                    <div class="border-all p-2 m-2">
                        <span class="separado">TRAZABILIDAD</span>
                        <p class="">controlamos toda la cadena de suministros garanatizando la producción de ganados con practicas de bienestar animal</p>
                    </div>
                </div>                   
            </div>      `

})