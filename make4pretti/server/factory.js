//	The goal of this file is to allow customized creation of a production-level
//		dataset using the 'Meteor-Factory' and 'Fake' Meteor packages for 
//		our application. Inputs into the top rows will customize the database.

//****** INPUTS FOR THE SEEDER *******

numUsers 		= 30;
numEvents 		= 100;
populateDB 		= true;
clearDB			= true;

//****** SETTING UP THE FACTORIES *******

RegisteredUsers.remove({});
MyEvents.remove({});

Factory.define('registeredUser', RegisteredUsers, {
	//TODO: Update this to use an array for the users based on input at top
	//Fields: UID, firstName, lastName, email (from group meeting)

	UID: function() {return _.random(1,1000); },

	first: function() {return Fake.user({fields: ['name'],}).name; },

	last: function() {return Fake.user({fields: ['surname'],}).surname; },

	email: function() {return Fake.user({fields: ['email'],}).email; }
});

Factory.define('myEvent', MyEvents, {
	//Fields: eventID, creatorID, name, date, start_time, end_time, description,
	//			location, tag1, tag2, tag3
	creatorID: Factory.get('registeredUser'),
	name: function() {return Fake.sentence(3); },

	//Date returns a date between time script is run and 7 days in the future.
	//date: function() { return new Date(Math.floor((Math.random() * 604800000) +  Date.now() ) ); },
	date:function() {return '2015-12-' + Math.floor((Math.random() * 15) + 10); },

	//Start time b/w 10:10 and 17:59 
	start_time: function() {return Math.floor((Math.random() * 7) + 10) +
	":" + Math.floor((Math.random() * 59) + 10); },

	//End time b/w 18:10 and 23:59
	end_time: function() {return Math.floor((Math.random() * 5) + 18) +
	":" + Math.floor((Math.random() * 59) + 10); },

	description: function() {return Fake.sentence(15); },
	location: function () {return Fake.fromArray(['West Campus','East Campus','Central Campus','Off-Campus']); },
	specific: function () {return Fake.fromArray(['Soc Sci 139', 'ABP', 'Vondy', 'LSRC D327']); },
	tag: function() {return Fake.fromArray(['Academic','Art','Competition','Cultural',
		'Debates/Discussion', 'Greek', 'Jobs/Internships', 'Music', 'Philanthropy',
		'Performances', 'Political', 'Religious', 'Social', 'Sports', 'Volunteering']); }
});

//******* POPULATING THE PRODUCTION-LEVEL DATABASE *******

if(populateDB){

	if(clearDB){
		RegisteredUsers.remove({});
		MyEvents.remove({});
	}

	for (i = 1; i <= numUsers; i++){
		Factory.create('registeredUser');
	};

	for (i = 1; i <= numEvents; i++){
		Factory.create('myEvent');
	};

};
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