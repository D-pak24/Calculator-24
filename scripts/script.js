const body = document.querySelector('body');
const stheme = document.querySelector('.sun');
const mtheme = document.querySelector('.moon');
const change = document.querySelectorAll('.s');
const display = document.querySelector('.livescreen');
const del = document.querySelector('.del');
const equal = document.querySelector('.equal');

//accessing operators and numbers
let keyPadValues = document.querySelectorAll('.numbers');

keyPadValues.forEach(keyPadValues => {
    keyPadValues.addEventListener('click', (e) => {
        display.value += e.target.value;
    })
})
equal.addEventListener('click', () => {
    function calculate(value) {
        const calculatedValue = eval(value || null);
        if (isNaN(calculatedValue)) {
            display.value = "Can't divide 0 with 0 🤷‍♂️";
            setTimeout(() => {
                display.value = "";
            }, 2000);
        } else {
            display.value = calculatedValue;
        }
    }
    try {
        calculate(display.value);
    }
    catch (err) {
        display.value = "Enter a Valid Input";
        setTimeout(() => {
            display.value = '';
        }, 2500)

    }
})
del.addEventListener('click', () => {
    display.value = display.value.slice(0, - 1);
})


//theme change 
stheme.addEventListener('click', function () {
    display.style.color = '#09090a';
    for (let s of change) {
        s.style.color = '#09090a';
    }
    body.style.backgroundColor = "#ebebeb";
    body.style.transition = "0.6s";
    stheme.style.display = "none";
})
mtheme.addEventListener('click', function () {
    display.style.color = '#ebebeb';
    for (let s of change) {
        s.style.color = '#ebebeb';
    }
    body.style.backgroundColor = "#09090a";
    stheme.style.display = "block";
})