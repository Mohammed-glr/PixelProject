function addAnimatedGradientOnHover(element) {
    element.addEventListener('mouseover', () => {
        document.body.classList.add('animated-gradient');
    });

    element.addEventListener('mouseout', () => {
        document.body.classList.remove('animated-gradient');
    });
}

const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const container3 = document.getElementById('container3'); 

addAnimatedGradientOnHover(container1);
addAnimatedGradientOnHover(container2);
addAnimatedGradientOnHover(container3);
console.log("cp.js loaded")

// linear-gradient(135deg,hsl(38deg 89% 39%) 0%,hsl(37deg 67% 51%) 20%,hsl(37deg 86% 61%) 40%,hsl(37deg 100% 74%) 60%,hsl(37deg 100% 87%) 80%,hsl(0deg 0% 100%) 100%)
