class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      params[:track][:tags_added].each do |tag|
        Tagging.create(track_id: @track.id, tag_id: tag)
      end
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def show
    @track = Track.find(params[:id])
  end

  def update
    @track = Track.find(params[:id])
    if @track.update_attributes(track_params)
      @track.taggings.each do |tagging|
        tagging.destroy
      end
      params[:track][:tags_added].each do |tag|
        Tagging.create(track_id: @track.id, tag_id: tag)
      end
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = Track.find(params[:id])
    copy = @track
    if @track.destroy
      copy.taggings.each do |tagging|
        tagging.destroy
      end
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def track_params
    params.require(:track).permit(:title, :track_url, :artist_id,
      :soundscape_id, :description, :rating, :location, :tags_added)
  end
end
