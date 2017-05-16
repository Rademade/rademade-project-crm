object @developer
attributes :id, :name

child department: :department do
  extends('departments/create')
end
