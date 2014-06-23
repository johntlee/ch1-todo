define(function(require, exports, module) {

	var marionette = require('marionette');

	var templateHeader  = require('hbs!app/list/templates/header');

	// adding a new task
	var HeaderView = marionette.ItemView.extend({

		template: templateHeader,

		ui: {
			'newTask': '.task-name'
		},

		events: {
			'keypress .task-name': 'onKeyPress'
		},

		onKeyPress: function(e) {

			var taskText = this.ui.newTask.val();

			if(e.which == 13 && taskText) {
				this.collection.add({ text: this.ui.newTask.val() });
				this.ui.newTask.val('');
			}
		}
	});

	return HeaderView;

});
