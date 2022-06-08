let err_message = `The type of varaiable is different ${num1}, ${num2}`

function collectingOfNumbers(num1, num2){
    if(typeof num1 !== Number, num2 !== Number){
        return err_message
    }
    return num1 + num2
}


function subtractionOfNumbers(num1, num2){
    if(typeof num1 !== Number, num2 !== Number){
        return err_message
    }
    return num1 - num2
}


function multiplicationOfNumbers(num1, num2){
    if(typeof num1 !== Number, num2 !== Number){
        return err_message
    }
    return num1 * num2
}


function divisionOfNumbers(num1, num2){
    if(typeof num1 !== Number, num2 !== Number || num1 === 0, num2 === 0){
        return err_message
    }
    return num1 / num2
}