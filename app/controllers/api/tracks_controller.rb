class Api::TracksController < ApplicationController
  def index
    if params[:filters]
      @tracks = Track.filter(params[:filters])
    else
      @tracks = Track.all
    end
    @tracks.order(:title)
  end

    # @tracks = Track.all
    # if params[:tags] && params[:soundscapes]
    #   @tracks = Track.tag_and_soundscape(params[:tags], params[:soundscapes])
    # elsif params[:tags]
    #   @tracks = Track.has_tag(params[:tags])
    # elsif params[:soundscapes]
    #   @tracks = Track.in_soundscape(params[:soundscapes])
    # end
    # if params[:query] && !params[:query].empty?
    #   @tracks = @tracks.where(
    #     [
    #       'title LIKE :query OR description LIKE :query',
    #       {query: "%#{params[:query]}%"}
    #     ]
    #   )
    # end

  def create
    @track = Track.new(track_params)
    if @track.save
      if params[:track][:tags_added]
        params[:track][:tags_added].each do |tag|
          Tagging.create(track_id: @track.id, tag_id: tag)
        end
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
      if params[:track][:tags_added]
        @track.taggings.each do |tagging|
          tagging.destroy
        end
        params[:track][:tags_added].each do |tag|
          Tagging.create(track_id: @track.id, tag_id: tag)
        end
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
      :soundscape_id, :description, :rating, :location, :downloads, :tags_added)
  end
end
