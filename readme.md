rpgLoot
----

- [Direct Link](http://rpgloot.meteorapp.com/)


## About
- rpgLoot was designed to aid tabletop gamers by keeping track of their gear in a simple, reactive, and fun application. Instead of frantically scribbling item descriptions on scratch paper, game leaders can prepare all the details in advance and all players have to do it login and snag items from the group pool.

##Tech Stack

- rpgLoot was built on [Meteor](https://docs.meteor.com/), utilizing their in-house front-end, [BlazeJS](http://blazejs.org/). Meteor was chosen for this project in particular to take advantage of Meteor's "data on the wire" feature. This made possible the instant, multiplayer interaction possible without complicated add-ons.
- A simplistic methaphor to compare Meteor to standard MongoDB apps is a coat check vs. luggage conveyor belt.
	- At a coat check, you hand data(coat) to a clerk who then gives you a ticket to retrive it later. Later, if you want to edit that data, you hand the clerk that ticket, edit the data, and hand it back. There are calls that have to be made everytime.
	- Rather in Meteor, its more like the data is on a looping belt and as long as you subscribe to that data, you can pick up, change, and put back data without interuppting data stream.

## Install Procedure

-	Fork and clone this repo.

-	In project directory,

- 	Install Meteor ([more info](https://www.meteor.com/install))

	`$ curl https://install.meteor.com/ | sh`

	`$ meteor npm install`

	 `meteor`

	  This will install all the dependencies and then start a Meteor server.
- 	Navigate in browser to localhost:3000.

## Users/Wireframes

- Typical user for rpgLoot are tabletop RPG players looking for a tool to simplify treasure tracking and distribution. This application was designed without committing to anyone game system, as such is suitible for most role-playing game systems.  

-	[Wireframes & ERD](http://i.imgur.com/CxmXAXw.png)

##Future Development

- 	Experience tracker and auto-leveling
-	Integrating a currency tracker.
- 	In-app dice roller/Random number generator.
-  Character attribute tracker with stat calculator.
