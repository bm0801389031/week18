//function named filter_list with parameter l
function filter_list(l){
    //return call filter on to l, parameter of filter element named e
    //pointing out a string arrow function to be passed through each
    //element Number.isInteger method which determins wheter the passed
    //value is an integer. thus for filtering out anything other than
    //a string and returning only numbers
        return l.filter(e => Number.isInteger(e))
    }