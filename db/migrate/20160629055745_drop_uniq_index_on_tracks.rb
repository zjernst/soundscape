class DropUniqIndexOnTracks < ActiveRecord::Migration
  def change
    remove_index :tracks, :soundscape_id
    add_index :tracks, :soundscape_id
  end
end
