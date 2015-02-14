class CreateSearchItems < ActiveRecord::Migration
  def change
    create_table :search_items do |t|
      t.string :phrase
      t.string :state1
      t.string :state2
    end
  end
end
