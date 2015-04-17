def abbreviate(str)
	str = str.chomp
	if str.length > 55
		str = str[0..40]
		str.chop! if str[-1] == " "
		str += "... <Read More>"
	end
	puts str
end

File.open(ARGV[0]).each_line do |line|
	abbreviate(line)
end