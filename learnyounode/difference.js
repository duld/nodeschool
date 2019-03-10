
// var strA = ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"];
// var strB = ["diorite", "andesite", "grass", "dirt", "dead shrub"];


// // var newArr = strA.filter(function(val){
// // 	console.log(val);
// // 	return !strB.includes(val) ;
// // })

// // console.log(newArr);


// // function delta(arrA, arrb){
// // 	var sA = new Set(arrA);
// // 	var sB = new Set(arrB);
// // 	return 
// // }

// // console.log(delta(strA, strB));

// var a4 = ["andesite", "grass", "dirt", "pink wool", "dead shrub"];
// var a5 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];

// var newArr = a4.filter(function(val){
// 	return !a5.includes(val);
// })

// var arrB = a5.filter(function(val){
// 	return !a4.includes(val);
// })

// console.log(newArr.concat(arrB));



// ROMAN //
function convertToRoman(num) {
  var numRanges = splitNumberByRomanRanges(num);
  var romanNumber = '';

  // thousands
  if (numRanges.thousands > 0) 
  	romanNumber += 'M'.repeat(numRanges.thousands);
  

  // five hundred +
  if (numRanges.fiveHundred > 0 && numRanges.hundreds < 4){
  	romanNumber += 'D';
  } else if (numRanges.fiveHundred > 0 && numRanges.hundreds == 4){
  	romanNumber += 'CM'; // 900
  } else if (numRanges.fiveHundred == 0 && numRanges.hundreds == 4){
  	romanNumber += 'CD';
  }

  // hundreds
  if (numRanges.hundreds > 0){
  	if (numRanges.hundreds < 4)
  		romanNumber += "C".repeat(numRanges.hundreds);
  }

  // fifty +
  if (numRanges.fifty > 0 && numRanges.tens < 4){
  	romanNumber += 'L';
  } else if (numRanges.fifty > 0 && numRanges.tens == 4){
  	romanNumber += 'XC'; // 90
  } else if (numRanges.fifty == 0 && numRanges.tens == 4){
  	romanNumber += 'XL'; // 40
  }

  // tens
  if (numRanges.tens < 4){
	romanNumber += 'X'.repeat(numRanges.tens);
  }


  // fives
  if (numRanges.five > 0 && numRanges.ones < 4){
  	romanNumber += 'V';
  } else if (numRanges.five > 0 && numRanges.ones == 4){
  	romanNumber += 'IX'; // 90
  } else if (numRanges.five == 0 && numRanges.ones == 4){
  	romanNumber += 'IV';
  }

  // ones
  if (numRanges.ones < 4)
  	romanNumber += 'I'.repeat(numRanges.ones);
  	

  //console.log(num, numRanges);
  return romanNumber;
}

// console.log(convertToRoman(4000));
// console.log(convertToRoman(900));

// console.log(convertToRoman(5));
// console.log(convertToRoman(8));
// console.log(convertToRoman(1));
// console.log(convertToRoman(3));
// console.log(convertToRoman(4));
// console.log(convertToRoman(9));
// console.log(convertToRoman(10));
// console.log(convertToRoman(11));
// console.log(convertToRoman(15));
// console.log(convertToRoman(28));
// console.log(convertToRoman(429));

// console.log(convertToRoman(99), ' should return "XCVII"');
// console.log(convertToRoman(97), ' should return "XCIX"');
// console.log(convertToRoman(798));
// console.log(convertToRoman(891));
// console.log(convertToRoman(3999));


console.log(convertToRoman(68), ' should return "LXVIII');
console.log(convertToRoman(83), ' should return "LXXXIII');

function splitNumberByRomanRanges(num){
	nums = {
		thousands : 0,
		fiveHundred : 0,
		hundreds : 0,
		fifty : 0,
		tens : 0,
		five : 0,
		ones : 0
	}

	var curNum = num;
	// thousands //
	if (curNum >= 1000){
		nums.thousands = Math.floor(curNum / 1000);
		curNum -= nums.thousands * 1000;
	}

	// hundreds //
	if (curNum >= 100){
		nums.hundreds = Math.floor(curNum / 100);
		curNum -= nums.hundreds * 100;
		// account for values of 500+
		if (nums.hundreds >= 5){
			nums.fiveHundred = 1;
			nums.hundreds -= 5;
		}
	}

	// tens //
	if (curNum >= 10){
		nums.tens = Math.floor(curNum / 10);
		curNum -= nums.tens * 10;
		// account for values of 50+
		if (nums.tens >= 5){
			nums.fifty = 1;
			nums.tens -= 5;
		}
	}

	// ones //
	nums.ones = curNum;
	// account for values of 5+
	if (nums.ones >= 5){
		nums.five = 1;
		nums.ones -= 5;
	}

	return nums;
}