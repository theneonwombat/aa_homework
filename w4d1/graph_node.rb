class GraphNode

  attr_accessor :val, :neighbors

  def initialize(val)
    self.val = val
    self.neighbors = []
  end

  def add_neighbor(node)
    self.neighbors << node
  end

end

def bfs(starting_node, target_val)
  q = [starting_node]
  visited = Set.new()

  until q.empty?
    node = q.shift
    
    unless visited.include?(node)
      return node.val if node.val == target_val
      visited.add(node)
      q += node.neighbors
    end
  end
  
  nil
end