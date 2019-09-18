  //loading...For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]),
  // the volume of a is 12 and the volume of b is 20. 
  //Therefore, the function should return 8.

function findDifference(a,b) {
    var i=0;
    var aResult=1;
    var bResult=1;
    while (i<3) {
        aResult=aResult*a[i];
        bResult=bResult*b[i];
        i++;
    }
    
    var result= bResult-aResult;        
    var modulResult=Math.abs(result);
    return modulResult;
}

findDifference([2, 2, 3], [5, 4, 1]);