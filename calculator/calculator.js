function App () {
    const self = this;

    const FIELDS = {
        WRAP: document.querySelector('#calc'),
        BUTTONS: document.querySelectorAll('.button'),
        DISPLAY: document.querySelector('.display')
    }

    const ALLOPERATION = [
        {
            sign: '+',
            operation: (a, b) => a + b
        },
        {
            sign: '*',
            operation: (a, b) => a * b
        },
        {
            sign: '-',
            operation: (a, b) => a - b
        },
        {
            sign: '/',
            operation: (a, b) => a / b
        }
    ];

    function operation (expr) {
        const sign = expr.match(/[\+\-\*\/]/g)[0];
        const [num1, num2] = expr.match(/\d+/g);
        const funcOperation = ALLOPERATION.find((elem) => sign === elem.sign );

        return funcOperation.operation(+num1, +num2);
    }

    function addSymbolDisplay(display, text) {
        const predText = display.value;
        display.value = predText + text;
    }

    function getSymbolsDisplay(display) {
        return display.value;
    }

    function setNewSymbolDisplay(display, text) {
        display.value = text;
    }

    function clearSymbolDisplay(display) {
        display.value = "";
    }

    function calc(symbol) {
        if ((symbol === 'Enter') || (symbol === "=")) {
            const expression = getSymbolsDisplay(FIELDS.DISPLAY);
            const result = operation(expression);

            setNewSymbolDisplay(FIELDS.DISPLAY, result);

        } else if (symbol === "C") {
            clearSymbolDisplay(FIELDS.DISPLAY)

        } else if (symbol === 'Backspace') {
            const symbols = getSymbolsDisplay(FIELDS.DISPLAY);

            setNewSymbolDisplay(FIELDS.DISPLAY, symbols.substring(0, symbols.length - 1))
        } else {
            addSymbolDisplay(FIELDS.DISPLAY, symbol)
        }
    }

    function clickedOnButton(event) {
        calc(event.target.dataset.type)
    }

    function activateButtonsOnClick(buttons) {
        buttons.forEach(button => {
            button.addEventListener('click', clickedOnButton)
        })
    }

    function checkKeyBoardButtons(event) {
        if ((event.key).match(/[0-9%\/*\-+\(\)=]|Backspace|Enter/)) calc(event.key);
    }

    function activateKeyBoardButtons() {
      document.addEventListener('keydown', checkKeyBoardButtons)
    }

    this.init = () =>  {
        activateButtonsOnClick(FIELDS.BUTTONS);
        activateKeyBoardButtons()
    }

    return {
        init: self.init
    }
};

// init calculator app
const app = new App();

app.init();