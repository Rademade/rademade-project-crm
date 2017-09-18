collection @developers
attributes :id, :name, :toggl_api_key, :email

child department: :department do
  extends('departments/create')
end
