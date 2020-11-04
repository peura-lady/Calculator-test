
onLoad="document.getElementById('leave').options[0].selected = 'selected';"

let selectedInput = null
let selectedOperation = null

let operations = ['plus']
// let operations = ['plus', 'minus', 'multiply', 'divide']

let inputData1 = document.getElementById('inputData1')
let inputData2 = document.getElementById('inputData2')
let resultElement = document.getElementById('result')

function selectOperation(operation) {
    selectedOperation = operation
    for(let op of operations) {
        document.getElementById(op).style.display = 'none'
    }
    document.getElementById(selectedOperation).style.display = 'block'
}

function onInputData1Focus() {
    selectedInput = inputData1
}

function onInputData2Focus() {
    selectedInput = inputData2
}

inputData1.onfocus = onInputData1Focus
inputData2.onfocus = onInputData2Focus

function numpad(number) {
    if(selectedInput.value.length < 5)
        selectedInput.value += number
    // is the same as selectedInput.value = selectedInput.value + number
}

function calculate() {
    if(selectedOperation !== null && selectedOperation !== undefined) {
        let a = parseInt(inputData1.value)
        let b = parseInt(inputData2.value)
        let c = 0

        if(selectedOperation === 'plus'){
            c = a + b
        }

        // if(selectedOperation === 'minus'){
        //     c = a - b
        // }
        // if(selectedOperation === 'multiply'){
        //     c = a * b
        // }
        // if(selectedOperation === 'divide'){
        //     c = a / b
        // }


        resultElement.value = c
    }
} 