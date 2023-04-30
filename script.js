const calculator = document.querySelector('.calculator-grid')
const keys = document.querySelector('.keys')
const display = document.querySelector('.display')

keys.addEventListener('click', e=>{
    if (e.target.matches('button')){
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        if(!action){
            if(displayedNum === '0')
                display.textContent = keyContent
            else{
                calculator.dataset.secondValue = keyContent
                display.textContent = displayedNum + keyContent
            }
                
        }
        else if(action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'){
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
            display.textContent = displayedNum + keyContent
        }
        else if(action === 'decimal'){
            display.textContent = displayedNum + '.'
        }
        else if(action === 'clear'){
            display.textContent = 0
        }
        else if(action === 'equal'){
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = calculator.dataset.secondValue
            display.textContent = calculate(firstValue,operator,secondValue)
        }

    }
})

const calculate = (n1, op, n2) => {
    let result = ''
    if(op === 'add'){
        result = parseFloat(n1) + parseFloat(n2)
    }
    else if(op === 'subtract'){
        result = parseFloat(n1) - parseFloat(n2)
    }
    else if(op === 'multiply'){
        result = parseFloat(n1) * parseFloat(n2)
    }
    else if(op === 'divide'){
        result = parseFloat(n1) / parseFloat(n2)
    }
    return result
}
