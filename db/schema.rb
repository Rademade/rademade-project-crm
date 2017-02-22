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

ActiveRecord::Schema.define(version: 20170124223238) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "departments", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "developers", force: :cascade do |t|
    t.string   "name"
    t.string   "last_name"
    t.string   "toggl_api_key"
    t.integer  "department_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["department_id"], name: "index_developers_on_department_id", using: :btree
  end

  create_table "project_members", force: :cascade do |t|
    t.integer  "project_id"
    t.integer  "developer_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["developer_id"], name: "index_project_members_on_developer_id", using: :btree
    t.index ["project_id"], name: "index_project_members_on_project_id", using: :btree
  end

  create_table "project_sprint_member_details", force: :cascade do |t|
    t.integer  "project_sprint_id"
    t.integer  "project_member_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.index ["project_member_id"], name: "index_project_sprint_member_details_on_project_member_id", using: :btree
    t.index ["project_sprint_id"], name: "index_project_sprint_member_details_on_project_sprint_id", using: :btree
  end

  create_table "project_sprints", force: :cascade do |t|
    t.string   "name"
    t.integer  "project_id"
    t.date     "date_start"
    t.date     "date_end"
    t.decimal  "backlog_estimation"
    t.decimal  "sprint_story_point"
    t.decimal  "closed_story_point"
    t.decimal  "time_spent"
    t.decimal  "status"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.index ["project_id"], name: "index_project_sprints_on_project_id", using: :btree
  end

  create_table "projects", force: :cascade do |t|
    t.string   "name"
    t.decimal  "rate",       precision: 5, scale: 2
    t.string   "toggl_pid"
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
  end

  add_foreign_key "developers", "departments"
  add_foreign_key "project_members", "developers"
  add_foreign_key "project_members", "projects"
  add_foreign_key "project_sprint_member_details", "project_members"
  add_foreign_key "project_sprint_member_details", "project_sprints"
  add_foreign_key "project_sprints", "projects"
end
