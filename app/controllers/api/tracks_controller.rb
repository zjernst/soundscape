class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def show
    @track = Track.find(params[:id])
  end

  def track_params
    params.require(:track).permit(:title, :track_url, :artist_id,
      :soundscape_id, :description, :rating, :location)
  end
end
