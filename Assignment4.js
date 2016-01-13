



function totarea(sq1,sq2){
    function square(m)  {
       return m * m;
      }
    return (square(sq1) + square(sq2));
}
console .log("The total area is" + totarea(10,15));
