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
      if($('#eventName').val() != "" && $('#eventHost').val() != "" && $('#eventContact').val() != "" && $('#eventLocation').val() != null && $('#eventDate').val() != "" && $('#netID').val() != "" && $('#email').val() != "" && $('#lastName').val() != "" && $('#firstName').val() != "" && $('#specificLocation').val() != ""){
      alert($('#eventName').val() + " has been successfully added to the database.");
      MyEvents.insert({
        "name" : $('#eventName').val(),
        "host" : $('#eventHost').val(),
        "contact" : $('#eventContact').val(),
        "location" : $('#eventLocation').val(),
        "specific" : $('#specificLocation').val(),
        "first" : $('#firstName').val(),
        "last" : $('#lastName').val(),
        "email" : $('#email').val(),
        "netid" : $('#netID').val(),
        "date" : $('#eventDate').val(),
        "tag" : $('#eventTag').val(),
        "startTime" : $('#eventStart').val(),
        "endTime" : $('#eventEnd').val()
      })
    } else {
        alert("Please fill out all the required fields");
      };
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
    /*'submit .search-events-by-name': function (event, template) {
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
    },*/
    'submit .search-events-by-location': function (event, template) {
      event.preventDefault();

      var query_location = template.find(".query-location").value;
      var results = MyEvents.find({}).fetch(); 
      var filteredResults = _.filter(results, function (r){
        return r.location.indexOf(query_location) > -1; 
      });

      Session.set("currentSearchResults", filteredResults);
    },

    'submit .search-events-by-host': function (event, template) {
      event.preventDefault();

      var query_host = template.find(".query-host").value;
      var results = MyEvents.find({}).fetch(); 
      var filteredResults = _.filter(results, function (r){
        return r.host.indexOf(query_host) > -1; 
      });

      Session.set("currentSearchResults", filteredResults);
    },

    /*'submit .search-events-by-first': function (event, template) {
      event.preventDefault();

      var query_first = template.find(".query-first").value;
      var results = MyEvents.find({}).fetch(); 
      var filteredResults = _.filter(results, function (r){
        return r.first.indexOf(query_first) > -1; 
      });

      Session.set("currentSearchResults", filteredResults);
    },

    'submit .search-events-by-last': function (event, template) {
      event.preventDefault();

      var query_last = template.find(".query-last").value;
      var results = MyEvents.find({}).fetch(); 
      var filteredResults = _.filter(results, function (r){
        return r.last.indexOf(query_last) > -1; 
      });

      Session.set("currentSearchResults", filteredResults);
    },

    'submit .search-events-by-email': function (event, template) {
      event.preventDefault();

      var query_email = template.find(".query-email").value;
      var results = MyEvents.find({}).fetch(); 
      var filteredResults = _.filter(results, function (r){
        return r.email.indexOf(query_email) > -1; 
      });

      Session.set("currentSearchResults", filteredResults);
    },

    'submit .search-events-by-netid': function (event, template) {
      event.preventDefault();

      var query_netid = template.find(".query-netid").value;
      var results = MyEvents.find({}).fetch(); 
      var filteredResults = _.filter(results, function (r){
        return r.netid.indexOf(query_netid) > -1; 
      });

      Session.set("currentSearchResults", filteredResults);
    },*/

    'submit .search-events-by-date': function (event, template) {
      event.preventDefault();

      var query_date = template.find(".query-date").value;
      var results = MyEvents.find({}).fetch(); 
      var filteredResults = _.filter(results, function (r){
        return r.date.indexOf(query_date) > -1; 
      });

      Session.set("currentSearchResults", filteredResults);
    },

    'submit .search-events-by-startTime': function (event, template) {
      event.preventDefault();

      var query_startTime = template.find(".query-startTime").value;
      var results = MyEvents.find({}).fetch(); 
      var filteredResults = _.filter(results, function (r){
        return r.startTime.indexOf(query_startTime) > -1; 
      });

      Session.set("currentSearchResults", filteredResults);
    },

    'submit .search-events-by-endTime': function (event, template) {
      event.preventDefault();

      var query_endTime = template.find(".query-endTime").value;
      var results = MyEvents.find({}).fetch(); 
      var filteredResults = _.filter(results, function (r){
        return r.endTime.indexOf(query_endTime) > -1; 
      });

      Session.set("currentSearchResults", filteredResults);
    },
    'submit .general-search': function (event, template) {
      event.preventDefault();
      var query_name = template.find(".query-name").value;
      var query_location = template.find(".query-location").value;
      /*var query_first = template.find(".query-first").value;
      var query_last = template.find(".query-last").value;
      var query_email = template.find(".query-email").value;
      var query_netid = template.find(".query-netid").value;*/
      var query_date = template.find(".query-date").value;
      var query_startTime = template.find(".query-startTime").value;
      var query_endTime = template.find(".query-endTime").value;
      var query_tag = template.find(".query-tag").value; 
      var query_host = template.find(".query-host").value;


      var filteredResults = MyEvents.find({}).fetch();

      if (query_name) {
        filteredResults = _.filter(filteredResults, function (r) {
          return r.name.indexOf(query_name) > -1;
        })
      }

      if (query_location) {
        filteredResults = _.filter(filteredResults, function (r) {
          return r.location.indexOf(query_location) > -1;
        })
      }

      if (query_host) {
        filteredResults = _.filter(filteredResults, function (r) {
          return r.host.indexOf(query_host) > -1;
        })
      }

      /*if (query_first) {
        filteredResults = _.filter(filteredResults, function (r) {
          return r.first.indexOf(query_first) > -1;
        })
      }

      if (query_last) {
        filteredResults = _.filter(filteredResults, function (r) {
          return r.last.indexOf(query_last) > -1;
        })
      }

      if (query_email) {
        filteredResults = _.filter(filteredResults, function (r) {
          return r.email.indexOf(query_email) > -1;
        })
      }

      if (query_netid) {
        filteredResults = _.filter(filteredResults, function (r) {
          return r.netid.indexOf(query_netid) > -1;
        })
      }*/

      if (query_date) {
        filteredResults = _.filter(filteredResults, function (r) {
          return r.date.indexOf(query_date) > -1;
        })
      }

      if (query_tag) {
        filteredResults = _.filter(filteredResults, function (r) {
          return r.tag.indexOf(query_tag) > -1;
        })
      }

      if (query_startTime) {
        filteredResults = _.filter(filteredResults, function (r) {
          return r.startTime.indexOf(query_startTime) > -1;
        })
      }

      if (query_endTime) {
        filteredResults = _.filter(filteredResults, function (r) {
          return r.endTime.indexOf(query_endTime) > -1;
        })
      }

      Session.set("currentSearchResults", filteredResults)
    }









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