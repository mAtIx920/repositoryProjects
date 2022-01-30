const styleCalculator = document.querySelector(':root');
const button = document.querySelector('.button');
let clickedChange = false;

button.addEventListener('click', () => {
    clickedChange = !clickedChange;
    button.classList.toggle('on');
    
    if(clickedChange){
        styleCalculator.style.setProperty('--main-color', '#bbb');
        styleCalculator.style.setProperty('--screen-color', '#444');
        styleCalculator.style.setProperty('--button-color', '#ddd');
        styleCalculator.style.setProperty('--button-color-two', '#c2c2c2');
        styleCalculator.style.setProperty('--before-color', '#999');
        styleCalculator.style.setProperty('--before-color-two', '#ddd');
        styleCalculator.style.setProperty('--border-color', '#ddd4');
        styleCalculator.style.setProperty('--before-border', '#ddd4');
        styleCalculator.style.setProperty('--font-color', '#000');
    } else {
        styleCalculator.style.setProperty('--main-color', '#333');
        styleCalculator.style.setProperty('--screen-color', 'rgb(89, 134, 85)');
        styleCalculator.style.setProperty('--button-color', '#2f2f2f');
        styleCalculator.style.setProperty('--button-color-two', '#3f3f3f');
        styleCalculator.style.setProperty('--before-color', '#2d2d2d');
        styleCalculator.style.setProperty('--before-color-two', '#4d4d4d');
        styleCalculator.style.setProperty('--border-color', '#0004');
        styleCalculator.style.setProperty('--before-border', '#fff4');
        styleCalculator.style.setProperty('--font-color', '#fff');
    }
})