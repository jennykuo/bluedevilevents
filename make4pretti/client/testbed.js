if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.add.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.add.events({
    'click #add2': function () {
      // increment the counter when button is clicked
      //Session.set('counter', Session.get('counter') + 1);
      MyEvents.insert({
        "name" : document.getElementById("eventName").innerHTML,
        "location" : document.getElementById("eventLocation").innerHTML,
        "first" : document.getElementById("firstName").innerHTML,
        "last" : document.getElementById("lastName").innerHTML,
        "email" : document.getElementById("email").innerHTML,
        "netid" : document.getElementById("netId").innerHTML,
        "date" : document.getElementById("eventDate").innerHTML,
        "startTime" : document.getElementById("eventStart").innerHTML,
        "endTime" : document.getElementById("eventEnd").innerHTML
      })
    }
  });
}



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}