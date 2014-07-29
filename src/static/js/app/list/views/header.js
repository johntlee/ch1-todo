define(function(require, exports, module) {

	var marionette     = require('marionette');
	var keys           = require('built/app/keys');

	var Task           = require('app/list/models/task');
	var TemplateHeader = require('hbs!app/list/templates/header');

	// adding a new task
	var HeaderView = marionette.ItemView.extend({

		template: TemplateHeader,

		ui: {
			'newTask': '.task-name'
		},

		events: {
			'keydown .task-name': 'keyDown'
		},

		keyDown: function(e) {
			var key = keys.getKeyFromEvent(e);

			console.log(key == '');

			//if user pressed enter and input is in focus
			if(key == "") {
				this.addNewTask();
			}
		},

		addNewTask: function() {

			var taskText = this.ui.newTask.val();

			// if input is not empty, add to collection
			if(taskText) {
				var newTask = new Task({ text: taskText });
				this.collection.add(newTask);
				newTask.save();
				this.ui.newTask.val('');
			}

		}

	});

	return HeaderView;

});
