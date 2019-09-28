var x= ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'];
function sumMix(x){
    var sum= 0;
    var typedX=[];
    for (var i=0; i<x.length; i++) {
        if (typeof x[i]==='string') {
            var parsedString=parseInt(x[i]);
            typedX.push(parsedString);
        }

        else {
        typedX.push(x[i]);
        }
    }

    for ( i=0; i<typedX.length; i++) {
        sum= sum+typedX[i];
    }
    return sum;
}

sumMix (x);



var x= ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'];
var typedX=[];
var sum= 0;
function sumMix(x){
    for (var i=0; i<x.length; i++) {
        if (typeof x[i]==='string') {
            var parsedString=parseInt(x[i]);
            typedX.push(parsedString);
        }

        else {
        typedX.push(x[i]);
        }
    }

    for ( i=0; i<typedX.length; i++) {
        sum= sum+typedX[i];
    }
    return sum;
}

sumMix (x);