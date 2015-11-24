Users = new Meteor.Collection('users');
Events = new Meteor.Collection('events');

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
