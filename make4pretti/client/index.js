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
      alert($('#eventName').val());
      MyEvents.insert({
        "name" : $('#eventName').val(),
        "location" : $('#eventLocation').val(),
        "first" : $('#firstName').val(),
        "last" : $('#lastName').val(),
        "email" : $('#email').val(),
        "netid" : $('#netID').val(),
        "date" : $('#eventDate').val(),
        "startTime" : $('#eventStart').val(),
        "endTime" : $('#eventEnd').val()
      })
    }
  });
}



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}