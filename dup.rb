require 'byebug'
class Object
  def primitive?
    begin
      self.dup
      false
    rescue TypeError
      true
    end
  end
end

class Array
  def deep_dup
    # Argh! Mario and Kriti beat me with a one line version?? Must
    # have used `inject`...

    [].tap do |new_array|
      self.each do |el|
        new_array << (el.is_a?(Array) ? el.deep_dup : el)
      end
    end
  end

  # The renowned one-line inject version of deep_dup
  # Beware inject!
  def dd_inject
    inject([]) { |dup, el| dup << (el.is_a?(Array) ? el.dd_inject : el) }
  end

  # Beware map! The ultimate one-liner.
  def dd_map
    map { |el| el.is_a?(Array) ? el.dd_map : el }
  end

  def my_deep_dup
    if self.empty?
      return []
    elsif self.first.class == Array
      [self.first.my_deep_dup] + self[1..-1].my_deep_dup
    else
      return [self.first] + self[1..-1].my_deep_dup if self.first.primitive?
      [self.first.dup] + self[1..-1].my_deep_dup
    end
  end
end



a = [[['a'], ['b'], ['c']], [['d'], ['e'], ['f']], [['h'], ['i'], ['j']]]
b = a.deep_dup

a.first.first.first << "mutate"
p a
p b
a = [[['a'], ['b'], ['c']], [['d'], ['e'], ['f']], [['h'], ['i'], ['j']]]
b = a.my_deep_dup
a.first.first.first << "mutate"
p a
p b

class Cat
  attr_accessor :name, :array
  def initialize
    @name = "hello kitty"
    @array = ["a", "b", ["c", "d"]]
  end
end
