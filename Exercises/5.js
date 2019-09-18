function monkeyCount(n) {
    var result=[];
        while (n>0) {
            var resultPushing = result.unshift(n);
            n--;
        }
    return result;
}

monkeyCount(27)