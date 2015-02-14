class CreateSenators < ActiveRecord::Migration
  def change
    create_table :senators do |t|
      t.string :sr_senator
      t.string :jr_senator
    end
  end
end
