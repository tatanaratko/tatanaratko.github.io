function exponentiate (firstNumber, exponente) {

    var result = 1;
    for (var i=0;i<exponente;i++) {
        result=result*firstNumber;
    }
    return result;
}