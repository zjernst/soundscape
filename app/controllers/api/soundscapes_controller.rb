class Api::SoundscapesController < ApplicationController
  def index
    @soundscapes = Soundscape.all
  end

  def create
    @soundscape = Soundscape.new(soundscape_params)
    if @soundscape.save
      render :show
    else
      render json: @soundscape.errors.full_messages, status: 422
    end
  end

  def show
    @soundscape = Soundscape.find(params[:id])
  end

  def soundscape_params
    params.require(:soundscape).permit(:title, :image_url, :description)
  end
end
