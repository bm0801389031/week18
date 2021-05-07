//function statement named findShort with parameter s
function findShort(s){
	//turn s into an array of strings calling the split method and en
	//empty space as a separator call the map method to create a new
	//array out of splits content arrow function that checks every string
	//and returns its length
	//pass the string as an argument of Math.min() function with a small
	//twist.. Math.min returns the smallest of zero or more numbers, but
	//wont work with arrays. Thus, add the spread operator ... to split
	//so that its array is 'expanded into numbers:'
	return Math.min(...s.split(' ').map(w => w.length))
}