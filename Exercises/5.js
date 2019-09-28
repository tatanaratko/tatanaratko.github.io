function monkeyCount(n) {
    var result=[];
        while (n>0) {
            result.unshift(n);
            n--;
        }
    return result;
}

monkeyCount(27)