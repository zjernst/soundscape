class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json @user.errors, status: 422
    end
  end

  def show
    @user = current_user
    if @user
      render 'api/users/show'
    else
      render json: nil, status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :profile_pic)
  end
end
