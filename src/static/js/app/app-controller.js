define(function(require, exports, module) {

var $ = require('jquery');
var marionette = require('marionette');
var keys = require('built/app/keys');
var app = require('app/app');

var TaskCollection = require('app/list/collections/task-collection');

var HeaderView = require('app/list/views/header');
var TaskCollectionView = require('app/list/views/task-collection');
var FooterView = require('app/list/views/footer');

var AppController = marionette.Controller.extend({

    initialize: function(options){
        this.app = app;

        var taskCollection = new TaskCollection();
        var viewOptions = { collection: taskCollection };

        // get tasks from local storage
        taskCollection.fetch();

        // create all views
        var headerView = new HeaderView(viewOptions);
        var taskCollectionView = new TaskCollectionView(viewOptions);
        var footerView = new FooterView(viewOptions)

        // add all views to regions
        this.app.header.show(headerView);
        this.app.list.show(taskCollectionView);
        this.app.footer.show(footerView);

        // make header view accessible by other funcs
        this.headerView = headerView;

        this.BUILT();
    },

    // default view
    index: function() {
        this.app.list.currentView.el.className = 'show-all';
    },

    filter: function(filterType) {
        // depending on route, show/hide active/completed
        this.app.list.currentView.el.className = 'show-' + filterType;
    },

    BUILT: function(){

        // Key Management
        // If you are not using the modal system,
        // but are using the key system, you can omit
        // the dictionary passed here.
        keys.initialize();

        // The responder chain is a stack of views/controllers.
        // When a key event is detected, the stack is searched
        // from the bottom up. AKA Last in First Out (LIFO).
        // Views that participate in the chain can choose to implement
        // keyDown(e) or performKeyEquivalent(e).
        //
        // performKeyEquivalent is checked first then keyDown is checked.
        // If either of those returns 'true' the chain is no longer traversed.
        //
        // Note that we automatically add the ApplicationDelegate.
        // This ensures it will be the last one checked for key events.
        // Then we implement keyDown above to handle looking for
        // our desired key press.
        //
        // Any additional view or controller that would like
        // to participate in this chain is required to register
        // itself into the chain like we do here.
        keys.registerInResponderChain(this.headerView);

    }

});

exports.AppController = AppController;
});
