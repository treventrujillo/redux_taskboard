complete = [true, false]

25.times do
  Task.create(
    name: Faker::Lorem.word,
    description: Faker::Lorem.sentence(3),
    complete: complete.sample
  )
end