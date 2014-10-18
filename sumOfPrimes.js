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

function sumOfPrimesUnder(number) {
	var primeCount = 0;
	var sum = 0;
	var x = 1;
	while (primeCount < number) {
		if (isPrime(x)) {
			sum += x;
			primeCount+=1;
		}
		x += 1;
	}
	return sum;
}

console.log(sumOfPrimesUnder(1000));