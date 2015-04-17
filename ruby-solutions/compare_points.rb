File.open(ARGV[0]).each_line do |line|
  coords = line.split(' ').map { |coord| coord.to_i }
  dir = ''
  
  if coords[1] < coords[3]
    dir += 'N'
  elsif coords[1] > coords[3]
    dir += 'S'
  end
  
  if coords[0] < coords[2]
    dir += 'E'
  elsif coords[0] > coords[2]
    dir += 'W'
  end

  puts dir == '' ? 'here' : dir
end