class CreateSoundscapes < ActiveRecord::Migration
  def change
    create_table :soundscapes do |t|
      t.string :title, null: false
      t.string :image_url, null: false
      t.text :description

      t.timestamps null: false
    end
    add_index :soundscapes, :title, unique: true
  end
end
