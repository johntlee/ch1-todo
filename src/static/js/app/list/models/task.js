define(function(require, exports, module) {

    var backbone = require('backbone');
    var localStorage = require('vendor/backbone/backbone.localStorage');

	var Task = backbone.Model.extend({

        localStorage: new localStorage("TaskCollection"),

		defaults: {
			text: 'A to-do item',
			complete: false
		},

		// switch between complete, incomplete
		toggle: function() {
			this.save({ complete: !this.get('complete') });
		},

		isCompleted: function() {
			return this.get('complete');
		}

	});

	return Task;

});
