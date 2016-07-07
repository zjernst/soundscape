class AddColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :cover_photo, :string, :default => "https://res.cloudinary.com/soundscape/image/upload/v1467909650/dark_pretty_mountains_hoxryd.jpg"
    add_column :users, :bio, :text
  end
end
