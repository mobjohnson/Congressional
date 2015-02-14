console.log('congressRecordView connected');

var CongressRecordView = Backbone.View.extend({
  className: 'congress-record',

  initialize: function(){
    console.log('New Congress Record View');
    this.listenTo(this.model, 'change', this.render)

    var source = $('#congress-record-template').html();
    this.template = Handlebars.compile(source);
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }

});