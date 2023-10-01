class ReviewsController < ApplicationController
  def index
    @gym = Gym.find(params[:gym_id])
    @reviews = @gym.reviews
    redirect_to @gym
  end

  def new
    @gym = Gym.find(params[:gym_id])
    @review = Review.new
    redirect_to gym_path(@gym)
  end

  def create
    @gym = Gym.find(params[:gym_id])
    @review = Review.new(review_params)
    @review.gym = @gym
    if @review.save
      redirect_to @gym
    else
      raise
      redirect_to gym_path(@gym), status: :see_other
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :comment, :user)
  end
end
