File.open(ARGV[0]).each_line do |line|
	input = line.split(";")
	rows = input.shift
	columns = input.shift.to_i
	matrix = input[0].split(" ")
end

def unspiral(matrix)

end

# 1 2 3 4 5 6 7 8 9

# 1 2 3
# 4 5 6
# 7 8 9

# OUTPUT VALUES
# 1 2 3 6 9 8 7 4 5

# OUTPUT INDICES
# 0 1 2 5 8 7 6 3 4

# LAST COLUMN: 2, 5, 8 > 3, 6, 9
	# i.e. where (idx + 1)%(columns) == 0

# push first row except for last element
	# i.e. where index < row length && index does not fit last_col criterion
# push values in last columns
# push values in bottom row except for first and last element
# 

