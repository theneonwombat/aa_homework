require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef") }
  subject(:mochi) {Dessert.new("mochi", 8, "chef")}

  describe "#initialize" do
    it "sets a type" do
      expect(mochi.type).to eq("mochi")
    end

    it "sets a quantity" do 
      expect(mochi.quantity).to eq(8)
    end

    it "starts ingredients as an empty array" do
      expect(mochi.ingredients).to eq([])
    end

    it "raises an argument error when given a non-integer quantity" do
      expect {Dessert.new("flan", "eight", "chef")}.to raise_error
    end
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      expect(mochi.add_ingredient("red_bean")).to include("red_bean")
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
      mochi.add_ingredient("flower")
      mochi.add_ingredient("water")
      mochi.add_ingredient("love")
      unmixed = mochi.ingredients.dup
      expect(mochi.mix!).to_not be(unmixed)
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      expect(mochi.eat(4)).to eq(4)
    end


    it "raises an error if the amount is greater than the quantity" do
      expect { mochi.eat(12) }.to raise_error("not enough left!")
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      expect(mochi.serve).to include("Chef")
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(mochi.make_more).to eq(400)
    end
  end
end
