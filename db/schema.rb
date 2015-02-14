# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141028195213) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "search_items", force: true do |t|
    t.string  "state1"
    t.string  "state2"
    t.string  "phrase"
    t.integer "results1"
    t.integer "results2"
    t.integer "user_id"
  end

  add_index "search_items", ["user_id"], name: "index_search_items_on_user_id", using: :btree

  create_table "search_items_senators", id: false, force: true do |t|
    t.integer "search_item_id", null: false
    t.integer "senator_id",     null: false
  end

  add_index "search_items_senators", ["search_item_id", "senator_id"], name: "index_search_items_senators_on_search_item_id_and_senator_id", using: :btree
  add_index "search_items_senators", ["senator_id", "search_item_id"], name: "index_search_items_senators_on_senator_id_and_search_item_id", using: :btree

  create_table "senators", force: true do |t|
    t.string "sr_senator"
    t.string "jr_senator"
    t.string "sr_member_ref"
    t.string "jr_member_ref"
  end

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
