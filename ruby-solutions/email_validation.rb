def validate_email(string)
	puts string[/\w+@\w+\.\w+/] ? true : false
end

File.open(ARGV[0]).each_line { |line| validate_email(line) }