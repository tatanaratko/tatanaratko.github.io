var haystack=['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'];
//should return "found the needle at position 5"

function findNeedle(haystack) {
    return 'found the needle at position '  + haystack.indexOf('needle');
  }

  findNeedle(haystack);