define(function(require, exports, module) {

    var backbone = require('backbone');

	var Task = backbone.Model.extend({

		defaults: {
			text: 'A to-do item',
			complete: false
		},

		// switch between complete, incomplete
		toggle: function() {
			return this.set('complete', !this.get('complete'));
		},

		isCompleted: function() {
			return this.get('complete');
		}

	});

	return Task;

});
