console.log('formView.js is connected')

App.SearchItemFormView = Backbone.View.extend({
  el: '#search-item-form',

  events: {
    'click span.new-search-item': 'newSearchItem',
    'click span.edit-search-item': 'submitSearchItem',
    'click span.cancel': 'cancel'
  },

  initialize: function(){
    console.log('New Search Item Form View');

    var source = $('#search-item-form-template').html();
    this.template = Handlebars.compile(source);
    this.render();
  },

  render: function(){
    if (this.model) {
      this.$el.html(this.template(this.model.toJSON()));
    } else {
      this.$el.html(this.template());
    }
  },

  getFormData: function(){
    var data = {
      state1: this.$("[name='state1']").val(),
      state2: this.$("[name='state2']").val(),
      phrase: this.$("[name='phrase']").val()
    };
    return data;
  },

  newSearchItem: function(){
    var data = this.getFormData();

    this.collection.create(data, {
      success: function(){
        $('input').val('');
        $('#search-item-form').hide(100);

        $('.add').show(100);
        App.router.navigate('');
      }
    });
  },

  submitSearchItem: function(){
    var data = this.getFormData();

    this.model.save(data, {
      success: function() {
        App.router.navigate('/', { trigger: true });
      }
    });
  },

  cancel: function(){
    this.$el.fadeOut(200);
    App.router.navigate('')
  }


});


