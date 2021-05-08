//string object prototype named toJadenCase assigned function() 
String.prototype.toJadenCase = function() {
    //this split to create an array of individual words
    //map method with parameter named item to create a new array with the 
    //results from applying the function on every element zero indexed caracter
    //[item at the zero index] with method toUpperCase to call that words first 
    //letter upper case plus item with slice method and parameter of slice 1
    //the slice will give us back all the letters at the index indicated and on
    //and join everying back in to a string from an array of words with join 
    //method and quotes with a space as its pattern
    
        return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
    };