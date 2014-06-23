define(function(require, exports, module) {

var $ = require('jquery');
var marionette = require('marionette');
var keys = require('built/app/keys');
var app = require('app/app');

var TaskCollection = require('app/list/collections/task-collection');

var HeaderView = require('app/list/views/header');
var TaskView = require('app/list/views/task');
var TaskCollectionView = require('app/list/views/task-collection');
var FooterView = require('app/list/views/footer');

var AppController = marionette.Controller.extend({

    initialize: function(options){
        this.app = app;

        var taskCollection = new TaskCollection();

        // create all views
        var headerView = new HeaderView({ collection: taskCollection });
        var taskCollectionView = new TaskCollectionView({ collection: taskCollection });
        var footerView = new FooterView({ collection: taskCollection });

        // add all views to regions
        this.app.header.show(headerView);
        this.app.list.show(taskCollectionView);
        this.app.footer.show(footerView);
    },

    // default view
    index: function() {
        this.app.list.currentView.el.className = 'show-all';
    },

    filter: function(filterType) {
        // depending on route, show/hide active/completed
        this.app.list.currentView.el.className = 'show-' + filterType;
    },

    keyDown: function(e){
        var key = keys.getKeyFromEvent(e);

        if(key == "\r") {
            // to do
        }
    }
});

exports.AppController = AppController;
});
