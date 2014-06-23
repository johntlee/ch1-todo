define(function(require, exports, module) {

	var marionette = require('marionette');
var keys = require('built/app/keys');

	var templateHeader  = require('hbs!app/list/templates/header');

	// adding a new task
	var HeaderView = marionette.ItemView.extend({

		template: templateHeader,

		ui: {
			'newTask': '.task-name'
		},

		keyDown: function(e) {
			var key = keys.getKeyFromEvent(e);

			//if user pressed enter and input is in focus
			if(key == "\r" && this.ui.newTask.is(':focus')) {
				this.addNewTask();
			}
		},

		addNewTask: function() {

			var taskText = this.ui.newTask.val();

			// if input is not empty, add to collection
			if(taskText) {
				this.collection.add({ text: this.ui.newTask.val() });
				this.ui.newTask.val('');
			}

		},

	});

	return HeaderView;

});
