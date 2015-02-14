class CreateSearchItems < ActiveRecord::Migration
  def change
    create_table :search_items do |t|
      t.string :state1
      t.string :state2
      t.string :phrase
      t.integer :results1
      t.integer :results2
      t.references :user, index: true
    end
  end
end
