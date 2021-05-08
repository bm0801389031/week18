//function statement named DNAStrand with parameter dna
function DNAStrand(dna){
    //create variable with an array of objecsts named pairs
    //array A: 'T', T: 'A', C: 'G', G: 'C' all of this wrapped
    //in curly brackets to indicate that it is an array of 
    //objects
        let pairs = {A: 'T', T: 'A', C: 'G', G: 'C'};
    //return dna property of replace method first parameter indicating
    //the element to be replace with regexp 
    //dot to indicat looking for any character
    //of my global variable wraped with g flag...........
    //second parameter replacer function
    // c indicating my element arrow function
    //pointing to pairs with c index 
        return dna.replace(/./g, c => pairs[c]);
    }
    
    