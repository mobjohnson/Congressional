class CreateJoinTableSearchItemSenator < ActiveRecord::Migration
  def change
    create_join_table :search_items, :senators do |t|
      t.index [:search_item_id, :senator_id]
      t.index [:senator_id, :search_item_id]
    end
  end
end
