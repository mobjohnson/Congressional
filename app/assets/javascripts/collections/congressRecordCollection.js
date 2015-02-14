App.CongressRecordCollection = Backbone.Collection.extend({
  model: App.CongressRecordModel,
  url: '/congress_records',
  initialize: function(){
    console.log('New Congress Record Collection');
  }
});