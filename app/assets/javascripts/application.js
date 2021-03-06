// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require handlebars
//= require backbone
//= require d3
//= require c3
//= require_self
//= require models/searchItemModel
//= require models/congressRecordModel
//= require collections/searchItemCollection
//= require collections/congressRecordCollection
//= require views/searchItemListView
//= require views/searchItemView
//= require views/linechartView
//= require views/congressRecordListView
//= require views/congressRecordView
//= require views/formView

//= require routers/router

$(document).ready(function(){
  App.router = new App.Router();
  Backbone.history.start();
});



