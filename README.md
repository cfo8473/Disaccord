# Disaccord

[Live Demo](https://disaccord-c.herokuapp.com)

<p align="center">
  <img src="https://github.com/cfo8473/Disaccord/blob/master/disaccordanim.gif">
</p>
Disaccord is a single-page application clone of the popular web chatting service Discord. The chat application is created using Rails and React providing the main text-communication based functions you would expect from Discord (servers, channels, private messages complete with users and roles.)

## Technologies

This application was created using <b>Ruby, Rails, React, JavaScript</b> and <b>PostGresQL</b>

## How Disaccord works

Disaccord takes advantage of the PostGreSQL database to handle information tables which are then called by the front-end using two main objects: users and messages. Each user is an entity which has the following: `ID, username, password_digest, session_token` and `email`. Each message has an `author_id` which will link it to an individual user and a `channel_id` which will link it to the Channels table.

The channels and servers will hold both users and messages through a polymorphic association table `memberships` which will store both `type` and `id`.

## Features

![Features](https://i.imgur.com/TPCteOa.png)

- Material Design
- Chat support
- Multiple server functionality
- Public or private channels that handle text communications
- Ability to delete servers, channels or messages (for respective administrators)
- Other upcoming features


## Example

```
class Api::MembershipsController < ApplicationController
  def index
    @memberships = Membership.all
    render :index
  end
 
  def create
    @membership = Membership.new(membership_params)
    @membership.user_id = current_user.id
    
    if @membership.save
      render :show
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @membership = Membership.find(params[:id])
    if @membership.update_attributes(membership_params)
      render :show
    else
      render json: @membership.errors.full_messages, status:422
    end
  end

  private
  def membership_params
    params.require(:server).permit(:membership_type)
  end
end

```

## Setup
```
npm run webpack
rails s
bundle exec rails db:seed
bundle exec rails db:reset
```

Clone the repository onto your desktop and run `npm run webpack` to install all the dependencies.

Run `rails s` to load the PostgreSQL database and populate with the commands `bundle exec rails db:seed` and `bundle exec rails db:reset`

You will then be able to access the demo site using localhost:3000

To test out a sample state, click the Login button on the top right and use the Guest Login which will access a user with an already populated server and channel list complete with other users and their messages

