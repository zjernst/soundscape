class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :track_url, null: false
      t.integer :soundscape_id, null: false
      t.integer :artist_id, null: false
      t.text :description
      t.string :location
      t.float :rating

      t.timestamps null: false
    end
    add_index :tracks, :soundscape_id, unique: true
    add_index :tracks, :artist_id
  end
end
