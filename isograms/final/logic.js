
//function statement named isIsogram with param str
function isIsogram(str){
    //return statement new operator Set() constructor with parameters
    //str with toUpperCase method this gives us a set of objects
    //with only unique caracters from the uppercase string
    //size accessor property at the end of set, which returns
    //the number of unique elements in a set object equal to 
    //str length
      return new Set(str.toUpperCase()).size == str.length;
    }