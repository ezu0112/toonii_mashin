const display = document.getElementById('display');
display.value = '0';
function appendValue(value) {
    if (value === '.') {
        if (display.value.includes('.')) {
            return;
        }
    }

    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '0';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Алдаа';
    }
}

function toggleSign() {
    if (display.value.startsWith('-')) {
        display.value = display.value.substring(1);
    } else {
        display.value = '-' + display.value;
    }
}