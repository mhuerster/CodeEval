File.open(ARGV[0]).each_line do |line|
  nums = line.split(" ")
	output = []
	nums.each do |num|
		if num.to_i%15 == 0
			output << "FB"
		elsif num.to_i%3 == 0
			output << "F"
		elsif num.to_i%5 == 0
			output << "B"
		else
			output << num
		end
	end
	p output.join(" ")
end