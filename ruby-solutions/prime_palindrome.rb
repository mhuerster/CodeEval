def is_prime?(num)
	x = 2
	while x < (num/2) do
	 return false if num % x == 0
	 x+=1
	end
	true		
end

def is_palindrome?(num)
	num.to_s == num.to_s.reverse ? true : false
end

def largest_prime_palindrome(max_num)
	largest_prime_palindrome = 0
	x = 0
	while x < max_num
		if is_prime?(x) && is_palindrome?(x) && x > largest_prime_palindrome
			largest_prime_palindrome = x
		end
		x+=1
	end
	largest_prime_palindrome
end

p largest_prime_palindrome(1000)