App.SenatorCollection = Backbone.Collection.extend({
  model: App.SenatorModel,
  url: '/senators',
  initialize: function(){
    console.log('New Senator Collection');
  }
});