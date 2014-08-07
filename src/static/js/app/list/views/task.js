define(function(require, exports, module) {

	var marionette   = require('marionette');

	var templateTask = require('hbs!app/list/templates/task');

	// task item
	var TaskView = marionette.ItemView.extend({

		tagName: "li",
		template: templateTask,

		ui: {
			'toggle': '.toggle',
			'remove': '.remove'
		},

		className: function() {
			return (this.model.isCompleted()) ? "completed" : "active";
		},

		events: {
			'click .toggle': 'toggle',
			'click .remove': 'delete'
		},

		// toggle between complete, active
		toggle: function(){
			this.model.toggle();
			this.$el.toggleClass('completed active');
		},

		delete: function(){
			this.model.destroy();
		}

	});

	return TaskView;

});
