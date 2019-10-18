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
  {user_id: users[1].id, membership_id: servers[0].id, membership_type: "Server"},
  {user_id: users[2].id, membership_id: servers[0].id, membership_type: "Server"},
  {user_id: users[3].id, membership_id: servers[0].id, membership_type: "Server"},
  {user_id: users[4].id, membership_id: servers[0].id, membership_type: "Server"},
  {user_id: users[5].id, membership_id: servers[0].id, membership_type: "Server"},
  {user_id: users[6].id, membership_id: servers[0].id, membership_type: "Server"},
  {user_id: users[7].id, membership_id: servers[0].id, membership_type: "Server"},
  {user_id: users[8].id, membership_id: servers[0].id, membership_type: "Server"},
  {user_id: users[9].id, membership_id: servers[0].id, membership_type: "Server"},
  {user_id: users[10].id, membership_id: servers[0].id, membership_type: "Server"},
  {user_id: users[11].id, membership_id: servers[0].id, membership_type: "Server"},
  {user_id: users[12].id, membership_id: servers[0].id, membership_type: "Server"},
  

  {user_id: users[0].id, membership_id: servers[1].id, membership_type: "Server"},
  {user_id: users[0].id, membership_id: servers[2].id, membership_type: "Server"},
  {user_id: users[0].id, membership_id: servers[3].id, membership_type: "Server"},
  {user_id: users[0].id, membership_id: servers[4].id, membership_type: "Server"},
  {user_id: users[0].id, membership_id: servers[5].id, membership_type: "Server"},
  {user_id: users[0].id, membership_id: servers[6].id, membership_type: "Server"},
  {user_id: users[0].id, membership_id: servers[7].id, membership_type: "Server"},

  {user_id: users[1].id, membership_id: servers[2].id, membership_type: "Server"},
  {user_id: users[4].id, membership_id: servers[2].id, membership_type: "Server"},
  {user_id: users[4].id, membership_id: servers[2].id, membership_type: "Server"},
  {user_id: users[12].id, membership_id: servers[2].id, membership_type: "Server"},
  {user_id: users[11].id, membership_id: servers[2].id, membership_type: "Server"},
  {user_id: users[8].id, membership_id: servers[2].id, membership_type: "Server"},
  
  {user_id: users[2].id, membership_id: servers[3].id, membership_type: "Server"},
  {user_id: users[3].id, membership_id: servers[3].id, membership_type: "Server"},
  {user_id: users[5].id, membership_id: servers[3].id, membership_type: "Server"},
  {user_id: users[4].id, membership_id: servers[3].id, membership_type: "Server"},
  {user_id: users[8].id, membership_id: servers[3].id, membership_type: "Server"},
  {user_id: users[7].id, membership_id: servers[3].id, membership_type: "Server"},
  {user_id: users[6].id, membership_id: servers[2].id, membership_type: "Server"},
  {user_id: users[9].id, membership_id: servers[2].id, membership_type: "Server"},


  {user_id: users[4].id, membership_id: servers[4].id, membership_type: "Server"},
  {user_id: users[9].id, membership_id: servers[4].id, membership_type: "Server"},
  {user_id: users[11].id, membership_id: servers[4].id, membership_type: "Server"},
  {user_id: users[12].id, membership_id: servers[4].id, membership_type: "Server"},
  {user_id: users[10].id, membership_id: servers[4].id, membership_type: "Server"},
  {user_id: users[8].id, membership_id: servers[4].id, membership_type: "Server"},

  {user_id: users[5].id, membership_id: servers[5].id, membership_type: "Server"},
  {user_id: users[7].id, membership_id: servers[5].id, membership_type: "Server"},
  {user_id: users[6].id, membership_id: servers[5].id, membership_type: "Server"},
  {user_id: users[12].id, membership_id: servers[5].id, membership_type: "Server"},
  {user_id: users[8].id, membership_id: servers[5].id, membership_type: "Server"},

  {user_id: users[9].id, membership_id: servers[6].id, membership_type: "Server"},
  {user_id: users[7].id, membership_id: servers[6].id, membership_type: "Server"},
  {user_id: users[6].id, membership_id: servers[6].id, membership_type: "Server"},
  

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

  {body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ", author_id: users[0].id, channel_id: channels[1].id, pinned: false},
  {body: "Tincidunt nunc pulvinar sapien et ligula", author_id: users[0].id, channel_id: channels[1].id, pinned: false},
  {body: "suere sollicitudin aliquam ultrices. Aliquam eleifend mi in nulla posuere sollicitudin. ", author_id: users[1].id, channel_id: channels[1].id, pinned: false},
  {body: "nulla posuere sollicitudin. Accumsan lacus vel facilisis volutpat est velit egestas dui. Phasellus faucibus sc", author_id: users[2].id, channel_id: channels[1].id, pinned: false},

  {body: "im trying to get messages into my reducer, which isnt hard but i was hungry", author_id: users[4].id, channel_id: channels[1].id, pinned: false},
  {body: "and I fixed my broken asf newsfeed!", author_id: users[10].id, channel_id: channels[1].id, pinned: false},
  {body: "Seems we each have like one thing that completely eluded us", author_id: users[0].id, channel_id: channels[2].id, pinned: false},
  {body: "uh be careful with the search if you don't already have yarn working", author_id: users[1].id, channel_id: channels[2].id, pinned: false},
  {body: "iw anted to add modal transitions", author_id: users[5].id, channel_id: channels[2].id, pinned: false},
  {body: "since if i cant get scroll to bottom i need at least one thing", author_id: users[2].id, channel_id: channels[2].id, pinned: false},
  {body: "search was one of the fastest things i could implement
cuz it has minimal css, doesn't disrupt anything else, etc", author_id: users[11].id, channel_id: channels[2].id, pinned: false},

  {body: "i'll take a look! Thanks!", author_id: users[12].id, channel_id: channels[3].id, pinned: false},
  {body: "im preserving aspect ratio", author_id: users[1].id, channel_id: channels[3].id, pinned: false},
  {body: "for some reason it doesnt take 100% of the container its in", author_id: users[6].id, channel_id: channels[3].id, pinned: false},
  {body: "people relaly are ditching yipes and teamspeech huh", author_id: users[7].id, channel_id: channels[3].id, pinned: false},
  {body: "im okay with that", author_id: users[8].id, channel_id: channels[3].id, pinned: false},
  {body: "i actually just noticed that now", author_id: users[4].id, channel_id: channels[3].id, pinned: false},
  {body: "I'm stopping at the main 25 users", author_id: users[4].id, channel_id: channels[3].id, pinned: false},

  {body: "but im mssing a div
alright", author_id: users[1].id, channel_id: channels[4].id, pinned: false},
  {body: "You might be able to get it to work", author_id: users[5].id, channel_id: channels[4].id, pinned: false},
  {body: "Mess with the height in your css for the various container", author_id: users[6].id, channel_id: channels[4].id, pinned: false},
  {body: "not fitting in this grid", author_id: users[7].id, channel_id: channels[4].id, pinned: false},
  {body: "Did you make it scrollable?", author_id: users[8].id, channel_id: channels[4].id, pinned: false},
  {body: "idk wha thappeend", author_id: users[2].id, channel_id: channels[4].id, pinned: false},
  {body: "and now I have to start it over
", author_id: users[10].id, channel_id: channels[4].id, pinned: false},

  {body: "i'll take a look! Thanks!", author_id: users[12].id, channel_id: channels[8].id, pinned: false},
  {body: "im preserving aspect ratio", author_id: users[1].id, channel_id: channels[8].id, pinned: false},
  {body: "for some reason it doesnt take 100% of the container its in", author_id: users[9].id, channel_id: channels[3].id, pinned: false},
  {body: "people relaly are ditching yipes and teamspeech huh", author_id: users[9].id, channel_id: channels[3].id, pinned: false},
  {body: "im okay with that", author_id: users[8].id, channel_id: channels[8].id, pinned: false},
  {body: "i actually just noticed that now", author_id: users[4].id, channel_id: channels[8].id, pinned: false},
  {body: "I'm stopping at the main 25 users", author_id: users[4].id, channel_id: channels[8].id, pinned: false},

  {body: "i can't think", author_id: users[1].id, channel_id: channels[9].id, pinned: false},
  {body: "of any memes", author_id: users[4].id, channel_id: channels[9].id, pinned: false},
  {body: "to put in this seed file", author_id: users[0].id, channel_id: channels[9].id, pinned: false},
  {body: "named this channel incorrectly ", author_id: users[4].id, channel_id: channels[9].id, pinned: false},
  {body: "move on to the next one to test", author_id: users[2].id, channel_id: channels[9].id, pinned: false},
  {body: "abcdefghilknopqrtuvwxyz", author_id: users[3].id, channel_id: channels[9].id, pinned: false},

  {body: "winnie the pooh", author_id: users[0].id, channel_id: channels[10].id, pinned: false},
  {body: "cant even log into localhost", author_id: users[0].id, channel_id: channels[10].id, pinned: false},
  {body: "lmfao", author_id: users[0].id, channel_id: channels[10].id, pinned: false},
  {body: "what a joke", author_id: users[0].id, channel_id: channels[10].id, pinned: false},
  {body: "thunk", author_id: users[0].id, channel_id: channels[10].id, pinned: false},

  {body: "weeb", author_id: users[5].id, channel_id: channels[11].id, pinned: false},
  {body: "study", author_id: users[6].id, channel_id: channels[11].id, pinned: false},
  {body: "group", author_id: users[3].id, channel_id: channels[11].id, pinned: false},
  {body: "mern project asdf", author_id: users[8].id, channel_id: channels[11].id, pinned: false},
  {body: "no ideas left", author_id: users[6].id, channel_id: channels[11].id, pinned: false},
  {body: "random seed msgs", author_id: users[11].id, channel_id: channels[11].id, pinned: false},

  {body: "Yeah, anywhere that's ruby-based
current_user.roles.where(server_id: 2)
Stuff like that", author_id: users[4].id, channel_id: channels[15].id, pinned: false},
  {body: "added by SNP+s5AegxckQvMF9sQo1psj/EYSItGa [04:47]
[", author_id: users[12].id, channel_id: channels[15].id, pinned: false},
  {body: "Found and added 12 songs from playlist", author_id: users[11].id, channel_id: channels[15].id, pinned: false},
  {body: "Found and added 41 songs from playlist ✿ham.
The player is now shuffled.", author_id: users[3].id, channel_id: channels[15].id, pinned: false},
  {body: "-p cosp louder", author_id: users[2].id, channel_id: channels[15].id, pinned: false},
])