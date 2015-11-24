if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.add.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.add.events({
    'click button': function () {
      // increment the counter when button is clicked
      //Session.set('counter', Session.get('counter') + 1);
      MyEvents.insert({
        "name" : document.getElementById("label1").innerHTML,
        "location" : document.getElementById("locationId").innerHTML,
        "first" : document.getElementById("first").innerHTML,
        "last" : document.getElementById("last").innerHTML,
        "email" : document.getElementById("email").innerHTML,
        "netid" : document.getElementById("netid").innerHTML,
        "date" : document.getElementById("date").innerHTML,
        "time" : document.getElementById("time").innerHTML
      })
    }
  });

  Template.person.events({
    'click #first': function () {
      // increment the counter when button is clicked
      //Session.set('counter', Session.get('counter') + 1);
      var person = prompt("Please enter your name", "harry potter");
      if (prompt != null){
        document.getElementById("first").innerHTML = person;
        //Pla
      }
    },
    'click #last': function () {
      // increment the counter when button is clicked
      //Session.set('counter', Session.get('counter') + 1);
      var person = prompt("Please enter your name", "harry potter");
      if (prompt != null){
        document.getElementById("last").innerHTML = person;
        //Pla
      }
    },
    'click #netid': function () {
      // increment the counter when button is clicked
      //Session.set('counter', Session.get('counter') + 1);
      var person = prompt("Please enter your name", "harry potter");
      if (prompt != null){
        document.getElementById("netid").innerHTML = person;
        //Pla
      }
    },
    'click #email': function () {
      // increment the counter when button is clicked
      //Session.set('counter', Session.get('counter') + 1);
      var person = prompt("Please enter your name", "harry potter");
      if (prompt != null){
        document.getElementById("email").innerHTML = person;
        //Pla
      }
    }
  });

  Template.changeName.events({
    'click label' : function(){
      //var text = document.getElementById("label1").innerHTML;
     // console.log(text);
      var person = prompt("Please enter your name", "harry potter");
      if (prompt != null){
        document.getElementById("label1").innerHTML = person;
        //Pla
      } else{
        document.getElementById("label1").innerHTML = "coolest event on campus";
      }
    }
  });

  Template.changeLocation.events({
    'click label' : function(){
      var location = prompt("Please enter your name", "harry potter");
      if (prompt != null){
        document.getElementById("locationId").innerHTML = location;
        //Pla
      }
    }
    
  });
}



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}