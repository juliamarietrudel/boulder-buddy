class ReviewsController < ApplicationController
  def index
    @gym = Gym.find(params[:gym_id])
    @reviews = @gym.reviews
    redirect_to @gym
    # @reviews = @gym.reviews.order(created_at: :desc).page(params[:page]).per(5)
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
    @review.user ||= Faker::Name.name
    if @review.save
      redirect_to @gym
    else
      redirect_to gym_path(@gym), status: :see_other
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :comment, :user)
  end
end
