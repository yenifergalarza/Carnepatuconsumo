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

const funcOfMeat1 = () => {
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

});

// const funcOfMeat2 = ()=>{ }
op2.addEventListener("click", () => {
    guisos.classList.add("dBlock");
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
});

op3.addEventListener("click", () => {
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
});

op4.addEventListener("click", () => {
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
});

op5.addEventListener("click", () => {
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
                      <img class="arrowWhite11 " src="../../assets/atras.svg">
                        <div><span class=" f1_51"> PARRILLERAS</span>
                            <p class="green  f1_21 pl-2 ">
                                BISTECK DE CUADRIL</p>
                        </div>


                    </div>


                    <p class="f11 pl-5 ">
                        ideal para parillas al horno y estufa
                    </p>

                </div>
                <img class="carnePrincipalCard1 ml-5 mr-1" src="../../assets/carne1.png " id="toParrillera" alt=" ">

                <div class="container-market31 p-4 ">
                    <img src="../../assets/logo-metro.png " alt=" " class="markets31 ">
                    <img src="../../assets/Logo_Jumbo_Cencosud.png " alt=" " class="markets31 ">
                    <img src="../../assets/Logo_Wong_Cencosud.png " alt=" " class="markets31"></div>

            </div>
        </div>

    </article>
</div>`;
    const toP = document.getElementById('toParrillera');



})