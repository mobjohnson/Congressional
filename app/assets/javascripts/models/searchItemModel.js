App.SearchItemModel = Backbone.Model.extend({

  initialize: function(params){
    console.log('searchItemModel (#initialize) params:', params);
    // add state and phrase to params from router call, used to instantiate senator model
    this.state1 = params.state1;
    this.state2 = params.state2;
    this.phrase = params.phrase;
    this.congressrecords = new App.CongressRecordCollection({});
    // create new senatorModel and adding attributes to this model for state1Senator  
    this.state1Senator = new App.SenatorModel({phrase: this.phrase, state: this.state1, parentObject: this});

    // creating new senatorModel and adding attributes to this model for state1Senator
    
    this.state2Senator = new App.SenatorModel({phrase: this.phrase, state: this.state2, parentObject: this});      

  },

});