class AddJrMemberRefToSenators < ActiveRecord::Migration
  def change
    add_column :senators, :jr_member_ref, :string
  end
end
