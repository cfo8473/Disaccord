# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  {username: "GuestUser", email: "guest@guest.com", password: "hunter2", photo: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c2e1c2c0c04d952eb3061f4b80de9d73cd3dd85c/corgi-example.png"},
  {username: "Cfoo", email: "cfoo@examples.com", password: "hunter3" },
  {username: "Okabe", email: "okabe@sg.com", password: "hunter2" },
  {username: "Hunter", email: "hunter@sg.com", password: "hunter2" },
])