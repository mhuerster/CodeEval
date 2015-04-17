def get_victim(prisoners, m)
	while m >= prisoners.length
		m -= prisoners.length
	end
	return m
end

def execute_prisoners(prisoners, m)
	p prisoners
	until prisoners.empty?
		if m < prisoner.length
			
		@dead_prisoners << prisoners.delete_at(get_victim(prisoners, m-1))
		execute_prisoners(prisoners, m *= 2ø)
	end
end

File.open(ARGV[0]).each_line do |line|
	@dead_prisoners = []
	number_of_prisoners = line.split(",")[0].to_i
	prisoners = (0..number_of_prisoners - 1).to_a
	mth_person = line.split(",")[1].to_i
	execute_prisoners(prisoners, mth_person)
	puts @dead_prisoners.join(" ")
end

# // [0,1,2,3,4,5,6,7,8,9]
#     // 2, 5, 8
# // [0,1,3,4,6,7,9]
#     // 1, 6
# // [0, 3, 4, 7, 9]
#     // 0, 7
# // [3,4,9]
#     // 4
# // [3,9]
#     // 9
# // [3]