File.open(ARGV[0]).each_line do |line|
	letters = line.split("").select { |char| char[/[A-Za-z]/] }.map { |char| char.downcase }
	beautiful_letters = Hash.new(0)
	letters.each { |letter| beautiful_letters[letter] += 1 }
	beautiful_letters = beautiful_letters.sort_by { |letter, frequency| frequency }.reverse
	value = 26
	beauty_of_string = 0
	beautiful_letters.each do |letter|
		beauty_of_string += (value*letter[1])
		value-=1
	end
	puts beauty_of_string
end