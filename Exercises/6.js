function seatsInTheater(nCols, nRows, col, row) {
    var audienceCol =nCols-(col+1);
    var audienceRow=nRows-(row-1);
    var audience=audienceCol*audienceRow;
    
    return audience;
  }