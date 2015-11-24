//	The goal of this file is to allow customized creation of a production-level
//		dataset using the 'Meteor-Factory' and 'Fake' Meteor packages for 
//		our application. Inputs into the top rows will customize the database.

RegisteredUsers = new Meteor.Collection('users');
Events = new Meteor.Collection('events');

Factory.define('user', RegisteredUsers, {
	//TODO: Update this to use an array for the users based on input at top
	//Fields: UID, firstName, lastName, email (from group meeting)
	name: 'Spencer Ryals'
});

Factory.define('event', Events, {
	//TODO: Lots of stuff here...
	//Fields: eventID, creatorID, name, date, start_time, end_time, description,
	//			location, tag1, tag2, tag3
	creatorID: Factory.get('user'),
	name: Fake.sentence(3),
	date: function() { return Date(_.random(1440000000000, 1460000000000))},
	start_time: function() {return _.random(12, 16); },
	end_time: function() {return _.random(17, 23); },
	description: function() {return Fake.sentence(15); },
	location: function () {return Fake.fromArray(['West','East','Central','Off-Campus']); },
	tag1: function() {return Fake.fromArray(['sports','music','greek','academic','other']); },
	tag2: function() {return Fake.fromArray(['sports','music','greek','academic','other']); },
	tag3: function() {return Fake.fromArray(['sports','music','greek','academic','other']); }
});

var user = Factory.create('user');

var event = Factory.create ('event');


/*

EXAMPLE CODE FROM 'METEOR-FACTORY' GITHUB 
https://github.com/percolatestudio/meteor-factory

***************************

Authors = new Meteor.Collection('authors');
Books = new Meteor.Collection('books');

Factory.define('author', Authors, {
  name: 'John Smith'
}).after(function(author) {
  // Do something smart
});

Factory.define('book', Books, {
  authorId: Factory.get('author'),
  name: 'A book',
  year: function() { return _.random(1900, 2014); }
});

// Inserts a new book into the books collection
var book = Factory.create('book');

// New fields can be added or overwritten
var book = Factory.create('book', { name: 'A better book' }); */