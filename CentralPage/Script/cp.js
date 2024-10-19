// function addAnimatedGradientOnHover(elembent) {
//     element.addEventListener('mouseover', () => {
//         document.body.classList.add('animated-gradient');
//     });

//     element.addEventListener('mouseout', () => {
//         document.body.classList.remove('animated-gradient');
//     });
// }

// const container1 = document.getElementById('container1');
// const container2 = document.getElementById('container2');
// const container3 = document.getElementById('container3'); 

// addAnimatedGradientOnHover(container1);
// addAnimatedGradientOnHover(container2);
// addAnimatedGradientOnHover(container3);
// Function to add the gradient on hover
function addGradient(image, gradient) {
    image.addEventListener('mouseover', () => {
        image.style.background = gradient;
    });

    image.addEventListener('mouseout', () => {
        image.style.background = 'none';
    });
}
t
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

addGradient(image1, 'linear-gradient(180deg, hsl(329deg 85% 52%) 0%, hsl(340deg 100% 98%) 100%)');
addGradient(image2, 'linear-gradient(180deg, hsl(200deg 85% 52%) 0%, hsl(210deg 100% 98%) 100%)');
addGradient(image3, 'linear-gradient(180deg, hsl(100deg 85% 52%) 0%, hsl(110deg 100% 98%) 100%)');