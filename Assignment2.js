


function area(rectangle){
   return function(square){
         return square * rectangle;
        };
}
  var totarea = area(100);
console.log(totarea(20));