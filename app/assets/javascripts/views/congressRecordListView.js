console.log('congressRecordListView.js is connected');

App.CongressRecordListView = Backbone.View.extend({
  el: '#congress-record-list',

  initialize: function(){
    console.log('New Congress Record View');
    this.listenTo(this.collection, 'add', this.addOne);
    this.listenTo(this.collection, 'reset', this.addAll);
    console.log('congressRecordListView#initialize this: ', this);
    this.addAll();
  },

  addOne: function(congressRecord){
    console.log('inside congressRecordListView#addOne this:', this);
    var congressRecordView = new CongressRecordView({ model: congressRecord});
    congressRecordView.$el.insertAfter(this.$('span.add-congress-record'));
    var models = this.collection.models;
  },

  addAll: function(){
    console.log('inside congressRecordListView#addAll this:', this);
    this.collection.each(function(congressRecord){
      this.addOne(congressRecord);
    },this);
  },

});