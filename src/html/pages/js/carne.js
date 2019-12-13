const op1 = document.getElementById('cat1');
const op2 = document.getElementById('cat2');
const op3 = document.getElementById('cat3');
const op4 = document.getElementById('cat4');
const op5 = document.getElementById('cat5');

const cp1 = document.getElementById('cp1');
const cp2 = document.getElementById('cp2');
const cp3 = document.getElementById('cp3');
const cp4 = document.getElementById('cp4');
const divPlusItemContainer = document.getElementById('plusItem');
const parrilleras = document.getElementById('parrilleras');
const guisos = document.getElementById('guisos');
const sancochados = document.getElementById('sancochados');
const especiales = document.getElementById('especiales');
const enlatados = document.getElementById('enlatados');


const view40 = document.getElementById("vw40HideOrShow");
const view60 = document.getElementById("vw60HideOrShow");
const goBackP = document.querySelectorAll(".goBackP");

const funcOfMeat1 = () => {
    parrilleras.classList.remove("dNone");
    parrilleras.classList.add("dBlock");
    guisos.classList.remove("dBlock");
    sancochados.classList.remove("dBlock");
    especiales.classList.remove("dBlock");
    enlatados.classList.remove("dBlock");
    guisos.classList.add("dNone");
    sancochados.classList.add("dNone");
    especiales.classList.add("dNone");
    enlatados.classList.add("dNone");
    divPlusItemContainer.classList.remove("dBlock");
    divPlusItemContainer.classList.add("dNone");


}


op1.addEventListener("click", () => {
    funcOfMeat1();
    if (screen.width < 769) {


        view40.classList.add("dNone");
        view60.classList.remove("dNone");
    }


});

const funcOfMeat2 = () => {
    guisos.classList.add("dBlock");
    guisos.classList.remove("dNone");
    parrilleras.classList.remove("dBlock");
    sancochados.classList.remove("dBlock");
    especiales.classList.remove("dBlock");
    enlatados.classList.remove("dBlock");
    parrilleras.classList.add("dNone");
    sancochados.classList.add("dNone");
    especiales.classList.add("dNone");
    enlatados.classList.add("dNone");
    divPlusItemContainer.classList.remove("dBlock");
    divPlusItemContainer.classList.add("dNone");

}
op2.addEventListener("click", () => {
    funcOfMeat2();
    if (screen.width < 769) {


        view40.classList.add("dNone");
        view60.classList.remove("dNone");
    }

});

const funcOfMeat3 = () => {
    sancochados.classList.remove("dNone");
    sancochados.classList.add("dBlock");
    parrilleras.classList.remove("dBlock");
    guisos.classList.remove("dBlock");
    especiales.classList.remove("dBlock");
    enlatados.classList.remove("dBlock");
    parrilleras.classList.add("dNone");
    guisos.classList.add("dNone");
    especiales.classList.add("dNone");
    enlatados.classList.add("dNone");
    divPlusItemContainer.classList.remove("dBlock");
    divPlusItemContainer.classList.add("dNone");

}
op3.addEventListener("click", () => {
    funcOfMeat3();
    if (screen.width < 769) {


        view40.classList.add("dNone");
        view60.classList.remove("dNone");
    }

});


const funcOfMeat4 = () => {
    especiales.classList.remove("dNone");
    especiales.classList.add("dBlock");
    parrilleras.classList.remove("dBlock");
    sancochados.classList.remove("dBlock");
    guisos.classList.remove("dBlock");
    enlatados.classList.remove("dBlock");
    parrilleras.classList.add("dNone");
    sancochados.classList.add("dNone");
    guisos.classList.add("dNone");
    enlatados.classList.add("dNone");
    divPlusItemContainer.classList.remove("dBlock");
    divPlusItemContainer.classList.add("dNone");

}
op4.addEventListener("click", () => {
    funcOfMeat4();
    if (screen.width < 769) {


        view40.classList.add("dNone");
        view60.classList.remove("dNone");
    }

});

const funcOfMeat5 = () => {
    enlatados.classList.remove("dNone");
    enlatados.classList.add("dBlock");
    parrilleras.classList.remove("dBlock");
    sancochados.classList.remove("dBlock");
    guisos.classList.remove("dBlock");
    especiales.classList.remove("dBlock");
    parrilleras.classList.add("dNone");
    sancochados.classList.add("dNone");
    guisos.classList.add("dNone");
    especiales.classList.add("dNone");
    divPlusItemContainer.classList.remove("dBlock");
    divPlusItemContainer.classList.add("dNone");


}
op5.addEventListener("click", () => {
    funcOfMeat5();
    if (screen.width < 769) {


        view40.classList.add("dNone");
        view60.classList.remove("dNone");
    }

});

cp1.addEventListener('click', () => {
    parrilleras.classList.remove("dBlock");
    parrilleras.classList.add("dNone");
    divPlusItemContainer.classList.remove("dNone");
    parrilleras.classList.remove("dBlock");
    parrilleras.classList.remove("dBlock");


    divPlusItemContainer.innerHTML = `     <div class="centered-carnes">
    <article class="one-container">


        <div class="card-meat1 ">
            <div class=" h801 ">

                <div class=" p-2 pl-5 pr-5 pt-5 h50m">
                    <div class="title-card-meat1 ">
                      <img class="arrowWhite11 " src="../../assets/atras.svg" id="toParrillera" >
                        <div><span class=" f1_51"> PARRILLERAS</span>
                            <p class="green  f1_21 pl-2 ">
                                BISTECK DE CUADRIL 1</p>
                        </div>


                    </div>


                    <p class="f11 pl-5 ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quibusdam laboriosam ipsum earum quas impedit obcaecati beatae porro dicta

                    </p>

                </div>
                <img class="carnePrincipalCard1 ml-5 mr-1" src="../../assets/carne1.png " alt=" ">

                <div class="container-market31 p-4 ">
                    <img src="../../assets/logo-metro.png " alt=" " class="markets31 ">
                    <img src="../../assets/Logo_Jumbo_Cencosud.png " alt=" " class="markets31 ">
                    <img src="../../assets/Logo_Wong_Cencosud.png " alt=" " class="markets31"></div>

            </div>
        </div>

    </article>
</div>`;


    const toP = document.getElementById('toParrillera');
    toP.addEventListener("click", () => {
        funcOfMeat1();
    })



});

cp2.addEventListener('click', () => {
    parrilleras.classList.remove("dBlock");
    parrilleras.classList.add("dNone");
    divPlusItemContainer.classList.remove("dNone");
    parrilleras.classList.remove("dBlock");
    parrilleras.classList.remove("dBlock");


    divPlusItemContainer.innerHTML = `     <div class="centered-carnes">
    <article class="one-container">


        <div class="card-meat1 ">
            <div class=" h801 ">

                <div class=" p-2 pl-5 pr-5 pt-5 h50m">
                    <div class="title-card-meat1 ">
                      <img class="arrowWhite11 " src="../../assets/atras.svg" id="toParrillera" >
                        <div><span class=" f1_51"> PARRILLERAS</span>
                            <p class="green  f1_21 pl-2 ">
                                BISTECK DE CUADRIL 2</p>
                        </div>


                    </div>


                    <p class="f11 pl-5 ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quibusdam laboriosam ipsum earum quas impedit obcaecati beatae porro dicta

                    </p>

                </div>
                <img class="carnePrincipalCard1 ml-5 mr-1" src="../../assets/carne1.png " alt=" ">

                <div class="container-market31 p-4 ">
                    <img src="../../assets/logo-metro.png " alt=" " class="markets31 ">
                    <img src="../../assets/Logo_Jumbo_Cencosud.png " alt=" " class="markets31 ">
                    <img src="../../assets/Logo_Wong_Cencosud.png " alt=" " class="markets31"></div>

            </div>
        </div>

    </article>
</div>`;


    const toP = document.getElementById('toParrillera');
    toP.addEventListener("click", () => {
        funcOfMeat1();
    })



});


cp3.addEventListener('click', () => {
    parrilleras.classList.remove("dBlock");
    parrilleras.classList.add("dNone");
    divPlusItemContainer.classList.remove("dNone");
    parrilleras.classList.remove("dBlock");
    parrilleras.classList.remove("dBlock");


    divPlusItemContainer.innerHTML = `     <div class="centered-carnes">
    <article class="one-container">


        <div class="card-meat1 ">
            <div class=" h801 ">

                <div class=" p-2 pl-5 pr-5 pt-5 h50m">
                    <div class="title-card-meat1 ">
                      <img class="arrowWhite11 " src="../../assets/atras.svg" id="toParrillera" >
                        <div><span class=" f1_51"> PARRILLERAS</span>
                            <p class="green  f1_21 pl-2 ">
                                BISTECK DE CUADRIL 3</p>
                        </div>


                    </div>


                    <p class="f11 pl-5 ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quibusdam laboriosam ipsum earum quas impedit obcaecati beatae porro dicta

                    </p>

                </div>
                <img class="carnePrincipalCard1 ml-5 mr-1" src="../../assets/carne1.png " alt=" ">

                <div class="container-market31 p-4 ">
                    <img src="../../assets/logo-metro.png " alt=" " class="markets31 ">
                    <img src="../../assets/Logo_Jumbo_Cencosud.png " alt=" " class="markets31 ">
                    <img src="../../assets/Logo_Wong_Cencosud.png " alt=" " class="markets31"></div>

            </div>
        </div>

    </article>
</div>`;


    const toP = document.getElementById('toParrillera');
    toP.addEventListener("click", () => {
        funcOfMeat1();
    })



})

goBackP.forEach(function(oneEach) {
    oneEach.addEventListener("click", () => {
        view60.classList.add("dNone");
        view40.classList.remove("dNone");
    });
});




if (screen.width < 769) {


    view60.classList.add("dNone")
}