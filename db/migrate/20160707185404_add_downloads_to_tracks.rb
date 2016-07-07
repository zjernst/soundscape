class AddDownloadsToTracks < ActiveRecord::Migration
  def change
    add_column :tracks, :downloads, :integer, :default => 0
  end
end
