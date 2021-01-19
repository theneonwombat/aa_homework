class Stack

  def initialize
    @array = Array.new
  end

  def push(el)
    @array.push(el)
  end

  def pop
    array.pop
  end

  def peek
    array.last
  end

end