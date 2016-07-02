class Api::TagsController < ApplicationController
  def show
    @tag = Tag.find(params[:id])
  end

  def index
    @tags = Tag.all
  end

  def create
  end

  def tag_params
    params.require(:tag).permit(:name)
  end
end
