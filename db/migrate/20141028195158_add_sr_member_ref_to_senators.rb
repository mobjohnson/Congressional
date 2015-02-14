class AddSrMemberRefToSenators < ActiveRecord::Migration
  def change
    add_column :senators, :sr_member_ref, :string
  end
end
