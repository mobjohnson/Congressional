console.log('linechartView.js is connected');

  // 
  // Not yet implemented
  // 

var LinechartView = Backbone.View.extend({
  el: '#linechart',

  initialize: function(){
    console.log('New lineChart View');
    this.listenTo(this.model, 'change', this.render);

    var source = $('#linechart-template').html();
    this.template = Handlebars.compile(source);
    this.render();
  },

  render: function(){
    if (this.model) {      
      this.$el.html(this.template(this.model.toJSON()));
    } else {
      this.$el.html(this.template());
    }
  }
  
});