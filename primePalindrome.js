function isPrime(number) {
	if (number < 2) {
		return false;
	}
	for(i=2;i<=(number/2);i++) {
		if (number % i === 0) {
			return false;
		}
	}
	return true;
}

function isPalindrome(number) {
	var stringifiedNumber = number.toString();
	if (stringifiedNumber === stringifiedNumber.split("").reverse().join("")) {
		return true;
	} else {
		return false;
	}
}

function largestPrimePalindrome(maxNumber) {
	var largestValue = 0;
	for (i=1;i<maxNumber;i++) {
		console.log(i);
		if (isPrime(i) && isPalindrome(i)) {
			largestValue = i;
		}
	}
	return largestValue;
}

console.log(largestPrimePalindrome(1000));