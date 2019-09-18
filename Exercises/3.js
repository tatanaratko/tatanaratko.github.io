function getSeparetedNumber (number) {
    var stringedNumber= number+'';
    var firstSeparatedString=stringedNumber.substr(0,1);
    var secondSeparatedString=stringedNumber.substr(1);

    var firstNumber=parseInt(firstSeparatedString, 10);
    var secondNumber=parseInt(secondSeparatedString, 10);
    
    var numberMas= {firstNumber, secondNumber}
    return numberMas;
}

getSeparetedNumber();

