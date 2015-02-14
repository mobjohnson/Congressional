console.log('senatorListView.js is connected');

App.SenatorListView = Backbone.View.extend({
  el: '#senator-list',

  initialize: function(){
    console.log('New Senator List View');
    this.listenTo(this.collection, 'add', this.addOne);
    this.listenTo(this.collection, 'reset', this.addAll); 
    console.log('congressRecordListView#initialize this: ', this);   
    this.addAll();

    this.collection.add(this);
  },

  addOne: function(senator){ 
     console.log('inside senatorListView#addOne this:', this);
    var senatorView = new SenatorView({ model: senator});
    senatorView.$el.insertAfter(this.$('span.add-senator'));
  },

  addAll: function(){
    console.log('inside senatorListView#addAll this:', this);    
    this.collection.each(function(senator){
    this.addOne(senator);
    }, this)
  }

});