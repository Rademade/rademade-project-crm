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

ActiveRecord::Schema.define(version: 20170731090306) do

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
    t.string   "email"
    t.index ["department_id"], name: "index_developers_on_department_id", using: :btree
  end

  create_table "issues", force: :cascade do |t|
    t.string   "jira_key"
    t.datetime "start_at"
    t.datetime "end_at"
    t.datetime "completed_at"
    t.integer  "status"
    t.decimal  "story_points"
    t.json     "jira_info"
    t.integer  "project_id"
    t.integer  "project_sprint_id"
    t.integer  "assignee_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.index ["assignee_id"], name: "index_issues_on_assignee_id", using: :btree
    t.index ["project_id", "jira_key"], name: "index_issues_on_project_id_and_jira_key", unique: true, using: :btree
    t.index ["project_id"], name: "index_issues_on_project_id", using: :btree
    t.index ["project_sprint_id"], name: "index_issues_on_project_sprint_id", using: :btree
  end

  create_table "project_members", force: :cascade do |t|
    t.integer  "project_id"
    t.integer  "developer_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "rate"
    t.integer  "hours"
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
    t.datetime "start_at"
    t.datetime "end_at"
    t.decimal  "backlog_estimation"
    t.decimal  "sprint_story_point"
    t.decimal  "closed_story_point"
    t.decimal  "time_spent"
    t.integer  "status"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.integer  "jira_key"
    t.index ["project_id"], name: "index_project_sprints_on_project_id", using: :btree
  end

  create_table "projects", force: :cascade do |t|
    t.string   "name"
    t.decimal  "rate",               precision: 5, scale: 2
    t.string   "toggl_pid"
    t.datetime "created_at",                                                 null: false
    t.datetime "updated_at",                                                 null: false
    t.string   "jira_key"
    t.decimal  "total_story_points",                         default: "0.0"
  end

  add_foreign_key "developers", "departments"
  add_foreign_key "issues", "developers", column: "assignee_id", on_delete: :nullify
  add_foreign_key "issues", "project_sprints", on_delete: :nullify
  add_foreign_key "issues", "projects", on_delete: :cascade
  add_foreign_key "project_members", "developers"
  add_foreign_key "project_members", "projects"
  add_foreign_key "project_sprint_member_details", "project_members"
  add_foreign_key "project_sprint_member_details", "project_sprints"
  add_foreign_key "project_sprints", "projects"
end
