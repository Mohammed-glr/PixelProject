// document.querySelector('.container2').addEventListener('mouseover', function() {
//     document.body.style.background = 'linear-gradient(180deg, )';
// });

// const container2 = document.querySelector('.container2');
// container2.addEventListener('mouseover', () => {
//     document.body.style.backgroundImage = 'linear-gradient(180deg,  hsl(329deg 85% 52%) 0%,hsl(332deg 86% 58%) 1%,hsl(333deg 87% 63%) 2%,hsl(335deg 89% 66%) 3%,hsl(336deg 91% 70%) 5%,hsl(337deg 93% 73%) 7%,hsl(337deg 95% 76%) 10%,hsl(338deg 97% 79%) 13%,hsl(339deg 100% 81%) 18%,hsl(339deg 100% 84%) 23%,hsl(339deg 100% 86%) 31%,hsl(340deg 100% 89%) 42%,hsl(340deg 100% 91%) 58%,hsl(340deg 100% 93%) 74%,hsl(340deg 100% 95%) 86%,hsl(340deg 100% 98%) 94%,hsl(0deg 0% 100%) 100% )';
// });

// container2.addEventListener('mouseout', () => {
//     document.body.style.backgroundImage = ''; // Reset to original background
// });
// Function to add the gradient on hover
function addGradient(image, gradient) {
    image.addEventListener('mouseover', () => {
        document.body.style.background = gradient;
    });

    image.addEventListener('mouseout', () => {
        
        document.body.style.background = 'none'; // Reset to no background after hover
    });
}

// Select each image and apply its respective gradient
const image1 = document.getElementById('hl');
const image2 = document.getElementById('cm');
const image3 = document.getElementById('gt');

// Call the function with specific gradients for each image
addGradient(image1, 'linear-gradient(  270deg,hsl(0deg 0% 100%) 0%,hsl(30deg 71% 89%) 20%,hsl(31deg 66% 78%) 40%,hsl(33deg 62% 66%) 60%,hsl(34deg 58% 54%) 80%,hsl(38deg 89% 39%) 100%)');
addGradient(image2, 'linear-gradient( 180deg,hsl(0deg 0% 100%) 0%,hsl(340deg 100% 93%) 20%,hsl(339deg 100% 85%) 40%,hsl(338deg 96% 77%) 60%,hsl(335deg 89% 67%) 80%,hsl(329deg 85% 52%) 100%)');
addGradient(image3, 'linear-gradient(  90deg,hsl(0deg 0% 100%) 0%,hsl(255deg 22% 83%) 20%,hsl(254deg 22% 67%) 40%,hsl(251deg 21% 51%) 60%,hsl(247deg 36% 36%) 80%,hsl(228deg 98% 18%) 100%)');