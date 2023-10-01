require 'faker'

20.times do
  gym = Gym.new(
    name: Faker::Adjective.positive,
    address: Faker::Address.city,
    climbing_type: ['Boulder', 'Rope'].sample
  )
  gym.save
  (1..5).to_a.sample.times do
    r = Review.new(
      rating: (1..5).to_a.sample,
      comment: Faker::Lorem.paragraph,
      user: Faker::Name.first_name,
      gym: gym
    )
    r.save
  end
end
