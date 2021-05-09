
//function statement named GetSum with parameters a and b
function GetSum(a,b){
    //empty variable named result assigned 0
        var result = 0;
    //variable named bigger assigned a greater than b turnary operator a if truthy
    // b falsy
        var bigger = a > b ? a : b;
    //variable named smaller assigned a greater than b turnary op b if truthy a if falsy
        var smaller = a > b ? b : a;
    //for loop (variable i assigned smaller [initiator]; i lesserthan or equal to bigger
    ///[condition]; statement to be run at the end of every loop iteration
    //i plus plus)
        for (var i = smaller; i <= bigger; i++){
    //result plus equal i
            result += i
        }
    //return result
        return result;
    }