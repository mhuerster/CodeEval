File.open(ARGV[0]).each_line do |line|
	strings = line.split(";") unless line == ""
	string_1_chars = strings[0].split("")
	string_2_chars = strings[1].split("")
	longest_common_subsequence = ""
	string_1_chars.each do |char|
		substring = ""
		substring << char if string_2_chars.include?(char)
		longest_common_subsequence = substring if substring.length >> longest_common_subsequence.length
	end
	p longest_common_subsequence
end

