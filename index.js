const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {

    display.value = "";
}

function calculate() {
    try {
    display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
}

const calculatorContainer = document.getElementById('calculator');

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

calculatorContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - calculatorContainer.offsetLeft;
    offsetY = e.clientY - calculatorContainer.offsetTop;
    calculatorContainer.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    calculatorContainer.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        calculatorContainer.style.left = (e.clientX - offsetX) + 'px';
        calculatorContainer.style.top = (e.clientY - offsetY) + 'px';
    }
});
