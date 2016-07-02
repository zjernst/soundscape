class Tagging < ActiveRecord::Base
  validates :track_id, :tag_id, presence: true

  belongs_to :track
  belongs_to :tag
end
