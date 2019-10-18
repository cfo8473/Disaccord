# Disaccord

![Splash](https://i.imgur.com/mT8I05C.png)

Disaccord is an application clone of the popular web chatting service Discord. The chat application is created using Rails and React providing the main text-communication based functions you would expect from Discord (servers, channels, private messages complete with users and roles.)

## Features

![Features](https://i.imgur.com/TPCteOa.png)

- Material Design
- Chat support
- Multiple server functionality
- Public or private channels that handle text communication
- Ability to delete servers, channels or messages (for respective administrators)
- Other upcoming features

## Setup
Clone the repository onto your desktop and run `npm run webpack` to install all the dependencies.

Run `rails s` to load the PostgreSQL database and populate with the commands `bundle exec rails db:seed` and `bundle exec rails db:reset`

You will then be able to access the demo site using localhost:3000

To test out a sample state, click the Login button on the top right and use the Guest Login which will access a user with an already populated server and channel list complete with other users and their messages

