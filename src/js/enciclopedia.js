const pescuezoCircle = document.getElementById("pescuezo");
const pescuezoText = document.getElementById('pescuezoText')

pescuezoCircle.addEventListener('click', () => {
    pescuezoText.classList.toggle("invisible");
});