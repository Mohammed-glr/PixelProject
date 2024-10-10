function addGradient(image, gradient) {
    image.addEventListener('mouseover', () => {
        document.body.style.background = gradient;
    });

    image.addEventListener('mouseout', () => {
        
        document.body.style.background = 'none'; 
    });
}

const image1 = document.getElementById('hl');
const image2 = document.getElementById('cm');
const image3 = document.getElementById('gt');

addGradient(image1, 'linear-gradient(135deg,hsl(38deg 89% 39%) 0%,hsl(37deg 67% 51%) 20%,hsl(37deg 86% 61%) 40%,hsl(37deg 100% 74%) 60%,hsl(37deg 100% 87%) 80%,hsl(0deg 0% 100%) 100%)');
addGradient(image2, 'linear-gradient(0deg,hsl(329deg 85% 52%) 0%,hsl(332deg 89% 70%) 20%,hsl(330deg 95% 83%) 40%,hsl(329deg 100% 90%) 60%,hsl(329deg 100% 95%) 80%,hsl(0deg 0% 100%) 100%)');
addGradient(image3, 'linear-gradient(225deg,hsl(228deg 98% 18%) 0%,hsl(230deg 74% 31%) 20%,hsl(229deg 67% 43%) 40%,hsl(238deg 59% 63%) 60%,hsl(247deg 61% 81%) 80%,hsl(0deg 0% 100%) 100%)');

// linear-gradient(135deg,hsl(38deg 89% 39%) 0%,hsl(37deg 67% 51%) 20%,hsl(37deg 86% 61%) 40%,hsl(37deg 100% 74%) 60%,hsl(37deg 100% 87%) 80%,hsl(0deg 0% 100%) 100%)
