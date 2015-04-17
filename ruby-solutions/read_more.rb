def abbreviate(str)
	str = str.chomp
	if str.length <= 55
    puts str
    return
  else
		str = str[0...40]
    if str.include?(' ')
		  counter = -1
      counter -= 1 while str[counter] != ' '
      str = str[0...counter]
    end
		str += '... <Read More>'
	end
	puts str
end

File.open(ARGV[0]).each_line do |line|
	abbreviate(line)
end