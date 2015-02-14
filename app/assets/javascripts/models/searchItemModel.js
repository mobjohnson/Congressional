App.SearchItemModel = Backbone.Model.extend({

  initialize: function(params){
    console.log('searchItemModel (#initialize) params:', params);
    // add state and phrase to params from router call, used to instantiate senator model
    this.state1 = params.state1;
    this.state2 = params.state2;
    this.phrase = params.phrase;
    this.congressrecords = new App.CongressRecordCollection({});

    // create new congressRecordModel and adding attributes to this model for state1Record  
    this.state1Record = new App.CongressRecordModel({phrase: this.phrase, state: this.state1, parentObject: this});

    // creating new congressRecordModel and adding attributes to this model for state1Record   
    this.state2Record = new App.CongressRecordModel({phrase: this.phrase, state: this.state2, parentObject: this});      

  },

});