class GymsController < ApplicationController
  def index
    @gyms = if params[:query].present?
              Gym.where('address LIKE ? ', "%#{params[:query]}%")
            else
              Gym.all
            end
    @markers = @gyms.map do |gym|
      get_markers(gym)
    end
  end

  def search
    @gyms = if params[:query].present?
              redirect_to gyms_path(query: params[:query])
            else
              redirect_to gyms_path
            end
  end

  def show
    @gym = Gym.find(params[:id])
    @review = Review.new
    @reviews = @gym.reviews.order(created_at: :desc).page(params[:page]).per(5)
    @average_rating = average_rating(@gym)
    @markers = [get_markers(@gym)]
  end

  def new
    @gym = Gym.new
  end

  def create
    @gym = Gym.new(gym_params)
    if @gym.save
      redirect_to @gym
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @gym = Gym.find(params[:id])
  end

  def update
    @gym = Gym.find(params[:id])
    if @gym.update(gym_params)
      redirect_to @gym
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @gym = Gym.find(params[:id])
    @gym.destroy

    redirect_to gyms_path, status: :see_other
  end

  private

  def gym_params
    params.require(:gym).permit(:name, :address, :climbing_type)
  end

  def average_rating(gym)
    @reviews = gym.reviews
    num_reviews = @reviews.count
    sum = 0
    if num_reviews != []
      @reviews.each do |review|
        sum += review.rating
      end
    end
    sum /= num_reviews if num_reviews != 0
    sum.round(1)
  end

  def get_markers(gym)
    {
      lat: gym.latitude,
      lng: gym.longitude
    }
  end
end
