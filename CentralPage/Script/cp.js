function addAnimatedGradientOnHover(elembent) {
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
