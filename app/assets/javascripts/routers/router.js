console.log('router.js connected');

App.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'search_items/new': 'newSearchItem',
    'search_items/:id/edit': 'editSearchItem',
    'congress_records/:state/:phrase': 'runRecord',

    // Not implemented yet
    // 'congress_records/:senator_name/recordCounts': 'loadChart'
  },

  initialize: function(){
    // Instantiate searchItems collection. Does NOT fetch yet
    App.Collections.searchItems = new App.SearchItemCollection(App.TempData.searchItems);

    // Instantiate congressRecords collection.
    // Does NOT fetch yet
    App.Collections.congressRecords = new App.CongressRecordCollection({});

    // Instantiate searchItem list view, pass collection to it
    App.Views.searchItemListView = new App.SearchItemListView({collection: App.Collections.searchItems});
    // Instantiate searchItem form view, pass collection to it
    App.Views.searchItemFormView = new App.SearchItemFormView({collection: App.Collections.searchItems});


    // Instantiate congressRecords list view, pass collection to it
    App.Views.congressRecordListView = new App.CongressRecordListView({collection: App.Collections.congressRecords});

  },

  index: function(){
    // Hide form, show list
    $('#search-item-form').hide();
    $('#search-item-list').show();
    $('.add').show();
    // $('#senator-list').hide();
  },

  newSearchItem: function(){
    // Hide Search button
    $('.add').hide();
    
    // Unset the model on formView if one exists
    App.Views.searchItemFormView.model = null;

    // Re-render form view without model
    App.Views.searchItemFormView.render();

    // Fade in form
    $('#search-item-form').fadeIn(500);

  },

  editSearchItem: function(searchItemId){
    // Hide list
    // $('#search-item-list').hide();

    // Find the specific searchItem model to edit
    var searchItem = App.Collections.searchItems.get(searchItemId);

    // Set the model property on form view
    App.Views.searchItemFormView.model = searchItem;

    // Re-render form view with model data
    App.Views.searchItemFormView.render();

    // Show form
    $('#search-item-form').show();


  },
    
  runSearch: function(state1, state2, phrase){
    console.log('in runSearch', state1, state2, phrase);
    this.state1 = state1;
    this.state2 = state2;
    if (this.state1 != undefined){
      var activeSearch = new App.SearchItemModel({state1: this.state1, state2: this.state2, phrase: phrase});
        console.log(activeSearch);     
    }

    // Show Add Search button
    $('.add').show(500);
  },

  runRecord: function(state, phrase){
    console.log('in runRecord', state, phrase);
    this.phrase = phrase;
    if (this.phrase != undefined){
      var activeCongressRecord = new App.CongressRecordModel({state: state, phrase: this.phrase});
      console.log(activeCongressRecord);
    }
    // $('.add').show(500);
  },

  // 
  // Not yet implemented
  // 
  // loadChart: function(senatorName, recordCounts){
  //   console.log('in loadChart', senatorName, recordCounts);
 
  //   // Find the specific congressRecord to reference
  //   var congressRecord = App.Collections.congressRecords.get(congressRecordId);

  //   // Set the model property on form view
  //   App.Views.lineChartView.model = congressRecord;

  //   // Re-render the lineChart view
  //   App.Views.lineChart.render();

  //   // Show lineChart
  //   $('#linechart').show();

    

  // }

});