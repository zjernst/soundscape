class Api::TaggingsController < ApplicationController
  validates :track_id, :tag_id, presence: true
end
