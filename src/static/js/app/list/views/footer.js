define(function(require, exports, module) {

	var templateFooter 	= require('hbs!app/list/templates/footer');

	// footer with options and info
	var FooterView = Marionette.ItemView.extend({

		template: templateFooter,

		ui: {
			'count': '.count'
		},

		events: {
			'click .clear': 'destroyCompleted',
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
		destroyCompleted: function() {
			var completed = this.collection.getCompleted();
			completed.forEach(function(todo) {
				todo.destroy();
			});
		}

	});

	return FooterView;

});