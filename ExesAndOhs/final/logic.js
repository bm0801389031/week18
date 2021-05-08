//function statement named XO with parameter str
function XO(str){
    //str assigned to str property of toLowerCase mwthod called to split method
    //with no space pattern
        str = str.toLowerCase().split('');
    //return str called to filter method, element named x, statement to filter, x equals
    //x string called to length operator equal to str filter x arrow function
    //equals 'o' string length operator
        return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
    }