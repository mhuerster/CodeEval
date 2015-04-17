def print_table
	x = 1
	table = []
	while x <= 12
		y = 1
		while y <= 12
			table << x*y
			y+=1
		end
		x+=1
	end
	table.map! { |x| x.to_s.rjust(4) }
	table.each_slice(12) { |row| puts row.join("") }
end

print_table