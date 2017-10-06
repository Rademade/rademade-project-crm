collection @developers
attributes :name
node(:toggle_time) do |developer|
  if developer.toggl_api_key
    now = DateTime.current
    Toggle::Developer.new(developer: developer).duration(@from, @to)
  end
end

