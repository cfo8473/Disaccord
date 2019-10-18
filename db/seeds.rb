# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  {username: "GuestUser", email: "guest@guest.com", password: "hunter2"},
  {username: "Cfoo", email: "cfoo@examples.com", password: "hunter3" },
  {username: "Okabe", email: "okabe@sg.com", password: "hunter2" },
  {username: "tap", email: "tap@gmail.com", password: "hunter2"},
  {username: "SNP+S5Whatevertherestis", email: "snp@gmail.com", password: "hunter2"},
  {username: "???", email: "questionmarks@gmail.com", password: "hunter2"},
  {username: "Kars", email: "kars@gmail.com", password: "hunter2"},
  {username: "Torch", email: "torch@gmail.com", password: "hunter2"},
  {username: "Soup", email: "soup@gmail.com", password: "hunter2"},
  {username: "eagle 7", email: "eagle@gmail.com", password: "hunter2"},
  {username: "IntricateBabies", email: "Ib@gmail.com", password: "hunter2"},
  {username: "maiz", email: "maiz@gmail.com", password: "hunter2"},
  {username: "ThisPlaceHasEverything", email: "tphe@gmail.com", password: "hunter2"},
  {username: "J4484", email: "js@gmail.com", password: "hunter2"},
])

servers = Server.create([
  {title: "Main", admin_id: users[0].id},
  {title: "General", admin_id: users[0].id},
  {title: "Game", admin_id: users[0].id},
  {title: "Secret", admin_id: users[0].id},
  {title: "Test", admin_id: users[0].id},
  {title: "Heroku", admin_id: users[1].id},
  {title: "Oops", admin_id: users[1].id},
  {title: "Voice", admin_id: users[3].id},
])

memberships = Membership.create([
  {user_id: users[0].id, membership_id: servers[0].id, membership_type: "Server"},
  {user_id: users[0].id, membership_id: servers[1].id, membership_type: "Server"},
  {user_id: users[0].id, membership_id: servers[2].id, membership_type: "Server"},
  {user_id: users[0].id, membership_id: servers[3].id, membership_type: "Server"},
  {user_id: users[0].id, membership_id: servers[4].id, membership_type: "Server"},
  {user_id: users[0].id, membership_id: servers[5].id, membership_type: "Server"},
  {user_id: users[0].id, membership_id: servers[6].id, membership_type: "Server"},
  {user_id: users[0].id, membership_id: servers[7].id, membership_type: "Server"},

  {user_id: users[1].id, membership_id: servers[0].id, membership_type: "Server"},
  {user_id: users[1].id, membership_id: servers[1].id, membership_type: "Server"},
  {user_id: users[1].id, membership_id: servers[2].id, membership_type: "Server"},
  {user_id: users[1].id, membership_id: servers[3].id, membership_type: "Server"},
  {user_id: users[1].id, membership_id: servers[4].id, membership_type: "Server"},
  {user_id: users[1].id, membership_id: servers[5].id, membership_type: "Server"},
  {user_id: users[1].id, membership_id: servers[6].id, membership_type: "Server"},
  {user_id: users[1].id, membership_id: servers[7].id, membership_type: "Server"},

  {user_id: users[2].id, membership_id: servers[0].id, membership_type: "Server"},
  {user_id: users[2].id, membership_id: servers[1].id, membership_type: "Server"},
  {user_id: users[2].id, membership_id: servers[2].id, membership_type: "Server"},
  {user_id: users[2].id, membership_id: servers[3].id, membership_type: "Server"},
  {user_id: users[2].id, membership_id: servers[4].id, membership_type: "Server"},
  {user_id: users[2].id, membership_id: servers[5].id, membership_type: "Server"},
  {user_id: users[2].id, membership_id: servers[6].id, membership_type: "Server"},
  {user_id: users[2].id, membership_id: servers[7].id, membership_type: "Server"},

  {user_id: users[3].id, membership_id: servers[0].id, membership_type: "Server"},
  {user_id: users[3].id, membership_id: servers[1].id, membership_type: "Server"},
  {user_id: users[3].id, membership_id: servers[2].id, membership_type: "Server"},
  {user_id: users[3].id, membership_id: servers[3].id, membership_type: "Server"},
  {user_id: users[3].id, membership_id: servers[4].id, membership_type: "Server"},
  {user_id: users[3].id, membership_id: servers[5].id, membership_type: "Server"},
  {user_id: users[3].id, membership_id: servers[6].id, membership_type: "Server"},
  {user_id: users[3].id, membership_id: servers[7].id, membership_type: "Server"},

  {user_id: users[4].id, membership_id: servers[0].id, membership_type: "Server"},
  {user_id: users[4].id, membership_id: servers[1].id, membership_type: "Server"},
  {user_id: users[4].id, membership_id: servers[2].id, membership_type: "Server"},
  {user_id: users[4].id, membership_id: servers[3].id, membership_type: "Server"},

])

channels = Channel.create([
  {title: "general", server_id: servers[0].id, topic: "Default landing topic for a fresh server!"},
  {title: "general", server_id: servers[1].id, topic: "Default landing topic for a fresh server!"},
  {title: "general", server_id: servers[2].id, topic: "Default landing topic for a fresh server!"},
  {title: "general", server_id: servers[3].id, topic: "Default landing topic for a fresh server!"},
  {title: "general", server_id: servers[4].id, topic: "Default landing topic for a fresh server!"},
  {title: "general", server_id: servers[5].id, topic: "Default landing topic for a fresh server!"},
  {title: "general", server_id: servers[6].id, topic: "Default landing topic for a fresh server!"},
  {title: "general", server_id: servers[7].id, topic: "Default landing topic for a fresh server!"},

  {title: "transcriptions", server_id: servers[0].id, topic: "Transcriptions'R'Us!"},
  {title: "memefile-lock", server_id: servers[0].id, topic: "All memes go in here"},
  {title: "localhost3000", server_id: servers[0].id, topic: "Asdfeghijklmnop"},
  {title: "degenerates-redux", server_id: servers[0].id, topic: "Worst study group"},

  {title: "DJ-SNP", server_id: servers[1].id, topic: "Queue until google breaks the bot"},
  {title: "Study-Group", server_id: servers[1].id, topic: "Nothing gets done here from 5-7pm"},
  {title: "Solo-Assist", server_id: servers[1].id, topic: "Tap TA"},
  {title: "bot-commands", server_id: servers[0].id, topic: "Queue all day"},

])

messages = Message.create([
  {body: "Abcefghijklnopqrvjtghau", author_id: users[0].id, channel_id: channels[0].id, pinned: false},
  {body: "Rest of the alphabet goes here in an unnecessarily long message", author_id: users[0].id, channel_id: channels[0].id, pinned: false},
  {body: "Quick message to try to break the app", author_id: users[1].id, channel_id: channels[0].id, pinned: false},
  {body: "Worlds is on", author_id: users[2].id, channel_id: channels[0].id, pinned: false},
  {body: "But no time to watch", author_id: users[3].id, channel_id: channels[0].id, pinned: false},
  {body: "Using scopes with has_many and belongs_to", author_id: users[4].id, channel_id: channels[0].id, pinned: false},
  {body: "https://ducktypelabs.com/using-scope-with-associations/ where was all this when i needed it!?", author_id: users[10].id, channel_id: channels[0].id, pinned: false},


])