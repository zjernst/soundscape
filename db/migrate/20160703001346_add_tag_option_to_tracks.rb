class AddTagOptionToTracks < ActiveRecord::Migration
  def change
    add_column :tracks, :tags_added, :string, array: true, default: []
  end
end
