console.log('searchItemView connected');

var SearchItemView = Backbone.View.extend({
  className: 'search-item',

  events: {
    'click span.destroy': 'onDestroy',
    'click span.edit': 'onEdit',
    'click a.runlink': 'onRun'
  },

  initialize: function(){
    console.log('New Search Item View');
    this.listenTo(this.model, 'change', this.render);
 
     // listen for a change to collection of congressrecords associated with this searchItem model 
    this.listenTo(this.model.congressrecords, 'change', this.changeCongressRecord);
    var source = $('#search-item-template').html();
    this.template = Handlebars.compile(source);
    this.render(this.model.congressrecords);
  },

  // function runs if the collection of CongressRecords in this searchItem changes
  changeCongressRecord: function(){
    console.log('this.model.congressrecords', this.model.congressrecords);
    this.render(this.model.congressrecords);
  },

  render: function(recordCollection){
    // render one chart for each searchItem
    console.log('searchItemView - recordCollection in render:', recordCollection);
    var chartValues = [];

    // set up for test for undefined
    this.models = recordCollection.models
    if (this.models != undefined){
      for (var i = 1; i < recordCollection.models.length; i++) {

        var chartValue = [];
        console.log('recordCollection.models[i].attributes.senator_name', recordCollection.models[i].attributes.senatorName);

        // Add the senator name to chartValue array
        chartValue.push(recordCollection.models[i].attributes.senatorName);

        if (recordCollection.models[i].attributes.results != undefined){
          console.log('recordCollection.models[i].attributes.results', recordCollection.models[i].attributes.results);
          var results = recordCollection.models[i].attributes.results

          // // Add the record counts to chartValues Array
          for (var j = 0; j < results.length; j++) {
            chartValue.push(results[j].count);
          };
          // Add this chartValue to chartValues array
          chartValues.push(chartValue);
          console.log('chartValues: ', chartValues);

        };
      };
    };
      
    // C3 template for D3 linechart
    var chart2 = c3.generate({
      bindto: '#chart2',
      data: {
        columns: chartValues
      }
    });

    this.$el.html(this.template(this.model.toJSON()));

  },

  onEdit: function(){
    App.router.navigate('search_items/' + this.model.id + '/edit', { trigger: true});
  },

  onDestroy: function(){
    var self = this;
    this.model.destroy({
      success: function(model, response, options){
        self.remove();
      },
      error: function(model, response, options){
        alert("Your Search Item could not be destroyed.");
      }
    });
    
    // Annoying pop-up box;
    // if (confirm('Are you sure?')){
    //   this.model.destroy({
    //     success: function(model, response, options){
    //       self.remove();
    //     },
    //     error: function(model, response, options){
    //       alert("Your Search Item could not be destroyed.");
    //     }
    //   });
    // }
  },


  onRun: function(){
    console.log('onRun in SearchItemView')
    // we want something like http://localhost:3000/#/senators/CA/NV/health
    App.router.navigate('/senators/' + this.model.state1 + '/' + this.model.state2 + '/' + this.model.phrase, { trigger: true });
  }

});