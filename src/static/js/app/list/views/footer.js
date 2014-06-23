define(function(require, exports, module) {

	var marionette = require('marionette');

	var templateFooter 	= require('hbs!app/list/templates/footer');

	// footer with options and info
	var FooterView = marionette.ItemView.extend({

		template: templateFooter,

		ui: {
			'count': '.count'
		},

		events: {
			'click .clear': 'removeCompleted',
			'click .active': 'showActive',
			'click .completed': 'showCompleted'
		},

		initialize: function() {
			// whenever colelction is updated, update the count of total active tasks
			this.listenTo(this.collection, 'all', this.countActiveTasks);
		},

		countActiveTasks: function() {
			this.ui.count.html(this.collection.getActive().length);
		},

		// remove - not just hide - all completed tasks
		removeCompleted: function() {
			this.collection.remove(this.collection.getCompleted());
		}

	});

	return FooterView;

});
