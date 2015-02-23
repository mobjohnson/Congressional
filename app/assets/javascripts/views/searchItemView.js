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
    var monthValues = ['x'];

    // set up for test for undefined
    console.log('searchItemView - this.models in render:', this.models);
    console.log('searchItemView - this in render:', this);
    this.models = recordCollection.models
    if (this.models != undefined){
      for (var i = 1; i < recordCollection.models.length; i++) {

        var chartValue = [];
        var monthValue = [];
        console.log('recordCollection.models[i].attributes.state', recordCollection.models[i].attributes.state);

        // Add the state name to chartValue array
        chartValue.push(recordCollection.models[i].attributes.state);

        if (recordCollection.models[i].attributes.results != undefined){
          console.log('recordCollection.models[i].attributes.results', recordCollection.models[i].attributes.results);
          var results = recordCollection.models[i].attributes.results


         // // Add months to monthValue array
         //  for (var j = 0; j < results.length; j++) {
         //    monthValue.push(results[j].month);
         //  };

         //  // Add monthValue array to front of chartValues array
         //  //  fo first record only
         //  if (i = 0) {
         //    chartValues.push(monthValue);
         //  };
          



          // Add the record counts to chartValues Array
 
          for (var j = 0; j < results.length; j++) {
            chartValue.push(results[j].count);
            monthValue.push(results[j].month)
          };
          // Add this chartValue to chartValues array
          chartValues.push(chartValue);
          console.log('chartValues: ', chartValues);
          // // set the months to monthValues array

          if (monthValue.length > monthValues.length) {
            monthValues = monthValue;
          // } else if (monthValue.length > monthValues.length) {
          //   monthValues = monthValue;
          };  

           // on last run through
          if (chartValues.length == 2) {

            // make the two arrays equal length
            while (chartValues[0].length > chartValues[1].length) {
              chartValues[0].pop();
              monthValues.pop();
            };
              
            while (chartValues[1].length > chartValues[0].length) {
              chartValues[1].pop();
              monthValues.pop(); 
            };

            // Add months as first item in chartValues array
            monthValues.unshift('x');
            chartValues.unshift(monthValues);
          };

          // put months in front of 
          // chartValues array

          // if (i == 3) {
          //   chartValues.unshift(monthValues);
          // };



        };
      };
    };
      
    // C3 template for D3 linechart
    var chart2 = c3.generate({
      bindto: '#chart2',
      data: {
        x: 'x',
        xFormat: '%Y%m',
        columns: chartValues
 
      },
      axis: {
        x: {
          label: 'Prior Months',

          // add a comma above

          tick: {
           format: '%Y%m'
         }       
        },
  
        y: {
          label: 'Congressional Records'
        }
      }
    });

    this.$el.delay(750).html(this.template(this.model.toJSON()));

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
  },


  onRun: function(){
    console.log('onRun in SearchItemView')
    // we want something like http://localhost:3000/#/senators/CA/NV/health
    App.router.navigate('/senators/' + this.model.state1 + '/' + this.model.state2 + '/' + this.model.phrase, { trigger: true });
  }

});