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

ActiveRecord::Schema.define(version: 20160629055745) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "soundscapes", force: :cascade do |t|
    t.string   "title",       null: false
    t.string   "image_url",   null: false
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "soundscapes", ["title"], name: "index_soundscapes_on_title", unique: true, using: :btree

  create_table "tracks", force: :cascade do |t|
    t.string   "title",         null: false
    t.string   "track_url",     null: false
    t.integer  "soundscape_id", null: false
    t.integer  "artist_id",     null: false
    t.text     "description"
    t.string   "location"
    t.float    "rating"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "tracks", ["artist_id"], name: "index_tracks_on_artist_id", using: :btree
  add_index "tracks", ["soundscape_id"], name: "index_tracks_on_soundscape_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "profile_pic"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
