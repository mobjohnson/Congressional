App.SearchItemCollection = Backbone.Collection.extend({
  model: App.SearchItemModel,
  url: '/search_items',
  initialize: function(){
    console.log('New Search Item Collection');
  }
});