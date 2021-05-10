
//function statement named maskify with parameter cc
function maskify(cc){
    // cc asigned call split on cc with no space pattern
      cc = cc.split('');
    //for loop first statement i asigned to 0 as initiator
    //executed one time before the code block
    //second statement condition i is less than cc.length minus 4
    //[this will change every element from the array until is gets
    //to the last four] // i plus plus third statement
      for(var i = 0; i < cc.length - 4; i++){
    //code block to be run on every iteration of the 
        //for loop cc at i index assigned to '#'
        cc[i] = "#";
      }
      //cc asigned to join method called on cc variable 
      //with empty string pattern as parameter
      cc = cc.join('');
      //return  variable cc
      return cc
    }