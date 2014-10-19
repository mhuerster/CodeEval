class Stack
	attr_accessor :store
	
	def initialize
		@store = []
	end

	def push(element)
		@store.push(element)
	end

	def pop
		popped = store.last
		@store.delete_at(@store.length - 1)
		return popped
	end

	def length
		return @store.length
	end

end

File.open(ARGV[0]).each_line do |line|
	integers = line.split(" ").map { |char| char.to_i }
	my_stack = Stack.new
	integers.each { |integer| my_stack.push(integer) }
	i = 0
	to_print = []
	while i <= my_stack.length do
		i.even? ? to_print << my_stack.pop : my_stack.pop
		i+=1
	end
	puts to_print.join(" ")
end