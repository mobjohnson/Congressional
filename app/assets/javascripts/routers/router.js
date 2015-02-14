console.log('router.js connected');

App.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'search_items/new': 'newSearchItem',
    'search_items/:id/edit': 'editSearchItem',
    'senators/:state1/:state2/:phrase': 'runSearch',
    'congress_records/:bioguideid/:phrase': 'runRecord',
    'congress_records/:senator_name/recordCounts': 'loadChart'
  },

  initialize: function(){
    // Instantiate searchItems collection. Does NOT fetch yet
    App.Collections.searchItems = new App.SearchItemCollection(App.TempData.searchItems);
    // Instantiate senators collection. Does NOT fetch yet
    App.Collections.senators = new App.SenatorCollection({});
    // Instantiate congressRecords collection.
    // Does NOT fetch yet
    App.Collections.congressRecords = new App.CongressRecordCollection({});


    // Instantiate searchItem collection view, pass collection to it
    App.Views.searchItemListView = new App.SearchItemListView({collection: App.Collections.searchItems});
    // Instantiate searchItem form view, pass collection to it
    App.Views.searchItemFormView = new App.SearchItemFormView({collection: App.Collections.searchItems});

    // Instantiate senator collection view, pass collection to it
    App.Views.senatorListView = new App.SenatorListView({collection: App.Collections.senators});

    // Instantiate congressRecords collection view, pass collection to it
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
    // Unset the model on formView if one exists
    App.Views.searchItemFormView.model = null;

    // Re-render form view without model
    App.Views.searchItemFormView.render();

    // Hide Search button
    // $('.add').hide();

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

  runRecord: function(phrase, bioguideid){
    console.log('in runRecord',phrase, bioguideid);
    this.phrase = phrase;
    if (this.phrase != undefined){
      var activeCongressRecord = new App.CongressRecordModel({phrase: this.phrase, bioguideid: bioguideid});
      console.log(activeCongressRecord);
    }
    // $('.add').show(500);
  },

  // 
  // Not yet implemented
  // 
  loadChart: function(senatorName, recordCounts){
    console.log('in loadChart', senatorName, recordCounts);
 
    // Find the specific congressRecord to reference
    var congressRecord = App.Collections.congressRecords.get(congressRecordId);

    // Set the model property on form view
    App.Views.lineChartView.model = congressRecord;

    // Re-render the lineChart view
    App.Views.lineChart.render();

    // Show lineChart
    $('#linechart').show();

    

  }

});