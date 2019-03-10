

function summation(arr){
	var sum = 0;
	for (var i=arr[0]; i <= arr[1]; i++){
		sum += i;
	}
	return sum;
}

function summation2(arr){
	var max = Math.max(arr[0], arr[1]);
  	var min = Math.min(arr[0], arr[1]);

  	if (min === 1){
  		return gauss(max);
  	} else {
		return gauss(max) - gauss(min) + min;
  	}
}

console.log(summation2([1, 100]));
console.log(summation2([3, 7]));
console.log(summation2([5, 10]));
console.log(summation([1, 100]));
console.log(summation([3, 7]));


function gauss(range){
	return (range * (range + 1)) / 2;
}