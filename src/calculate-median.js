function calculate_median(arr) {
	var median=[];
 if(arr.length%2!=0)
 {
	 median=arr[(arr.length-1)/2];
	 return median;
 }
 else {
	 median=arr[arr.length/2];
	 return median;
 }
}

module.exports = calculate_median;
console.log(calculate_median([1,2,3,4,5,6]));