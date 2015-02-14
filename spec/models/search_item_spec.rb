require "rails_helper"

RSpec.describe SearchItem, :type => :model do
  it "should create a SearchItem with a state1" do
    search_item1 = SearchItem.create!( state1: 'NC', state2: 'SC', phrase: 'tobacco')
    expect(search_item1.state1).to eq('NC')
  end

    it "should create a SearchItem with a state2" do
    search_item1 = SearchItem.create!( state1: 'NC', state2: 'SC', phrase: 'tobacco')
    expect(search_item1.state2).to eq('SC')
  end

    it "should create a SearchItem with a phrase" do
    search_item1 = SearchItem.create!( state1: 'NC', state2: 'SC', phrase: 'tobacco')
    expect(search_item1.phrase).to eq('tobacco')
  end
end