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

addGradient(image1, 'linear-gradient(  270deg,hsl(0deg 0% 100%) 0%,hsl(30deg 71% 89%) 20%,hsl(31deg 66% 78%) 40%,hsl(33deg 62% 66%) 60%,hsl(34deg 58% 54%) 80%,hsl(38deg 89% 39%) 100%)');
addGradient(image2, 'linear-gradient( 180deg,hsl(0deg 0% 100%) 0%,hsl(340deg 100% 93%) 20%,hsl(339deg 100% 85%) 40%,hsl(338deg 96% 77%) 60%,hsl(335deg 89% 67%) 80%,hsl(329deg 85% 52%) 100%)');
addGradient(image3, 'linear-gradient(  90deg,hsl(0deg 0% 100%) 0%,hsl(255deg 22% 83%) 20%,hsl(254deg 22% 67%) 40%,hsl(251deg 21% 51%) 60%,hsl(247deg 36% 36%) 80%,hsl(228deg 98% 18%) 100%)');
