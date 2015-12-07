if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.add.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.add.events({
    'click #add2': function (event) {
      // increment the counter when button is clicked
      //Session.set('counter', Session.get('counter') + 1);
      event.preventDefault();
      alert($('#eventName').val() + "HELLO");
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

  // Pattern for search
  Template.search.helpers({
    // This puts the variable on the view
    // Don't touch this
    currentSearchResults: function () {
      return Session.get('currentSearchResults');
    }
  });

  Template.search.events({
    'submit .search-events-by-name': function (event, template) {
      event.preventDefault(); // Always have this in your events so the page doesn't keep reloading
      // String entered into the field
      var query_name = template.find(".query-name").value;

      var results = MyEvents.find({}).fetch();
      var filteredResults = _.filter(results, function (r) {

        // if (r.name.indexOf(query_name) > -1) {
        //   return true;
        // }
        // else {
        //   return false;
        // }

        return r.name.indexOf(query_name) > -1; // How javascript does contains string
      });

      // Setting session variables for search results is terrible/hacky, but it's probably the fastest way to do this
      Session.set("currentSearchResults", filteredResults);
      // searchResults.push({name: 'blah'});
      // console.log(searchResults);
    },
    'submit .search-events-by-location': function (event, template) {
      event.preventDefault();

      var query_location = template.find(".query-location").value;
      var results = MyEvents.find({}).fetch(); 
      var filteredResults = _.filter(results, function (r){
        return r.name.indexOf(query_location) > -1; 
      });

      Session.set("currentSearchResults", filteredResults);
    },
    'submit .search-events-by-first': function (event, template) {
      event.preventDefault();

      var query_first = template.find(".query-first").value;
      var results = MyEvents.find({}).fetch(); 
      var filteredResults = _.filter(results, function (r){
        return r.name.indexOf(query_first) > -1; 
      });

      Session.set("currentSearchResults", filteredResults);
    },

    'submit .search-events-by-last': function (event, template) {
      event.preventDefault();

      var query_last = template.find(".query-last").value;
      var results = MyEvents.find({}).fetch(); 
      var filteredResults = _.filter(results, function (r){
        return r.name.indexOf(query_last) > -1; 
      });

      Session.set("currentSearchResults", filteredResults);
    },

    'submit .search-events-by-email': function (event, template) {
      event.preventDefault();

      var query_email = template.find(".query-email").value;
      var results = MyEvents.find({}).fetch(); 
      var filteredResults = _.filter(results, function (r){
        return r.name.indexOf(query_email) > -1; 
      });

      Session.set("currentSearchResults", filteredResults);
    },

    'submit .search-events-by-netid': function (event, template) {
      event.preventDefault();

      var query_netid = template.find(".query-netid").value;
      var results = MyEvents.find({}).fetch(); 
      var filteredResults = _.filter(results, function (r){
        return r.name.indexOf(query_netid) > -1; 
      });

      Session.set("currentSearchResults", filteredResults);
    },

    'submit .search-events-by-date': function (event, template) {
      event.preventDefault();

      var query_date = template.find(".query-date").value;
      var results = MyEvents.find({}).fetch(); 
      var filteredResults = _.filter(results, function (r){
        return r.name.indexOf(query_date) > -1; 
      });

      Session.set("currentSearchResults", filteredResults);
    },

    'submit .search-events-by-startTime': function (event, template) {
      event.preventDefault();

      var query_startTime = template.find(".query-startTime").value;
      var results = MyEvents.find({}).fetch(); 
      var filteredResults = _.filter(results, function (r){
        return r.name.indexOf(query_startTime) > -1; 
      });

      Session.set("currentSearchResults", filteredResults);
    },

    'submit .search-events-by-endTime': function (event, template) {
      event.preventDefault();

      var query_endTime = template.find(".query-endTime").value;
      var results = MyEvents.find({}).fetch(); 
      var filteredResults = _.filter(results, function (r){
        return r.name.indexOf(query_endTime) > -1; 
      });

      Session.set("currentSearchResults", filteredResults);
    },









  })
}



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

    // To get your data populated on startup
    // Import data, for each item:
    // MyEvents.insert({});
  });
}