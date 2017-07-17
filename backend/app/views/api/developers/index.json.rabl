collection @developers
attributes :id, :name, :toggl_api_key

child department: :department do
  extends('departments/create')
end