define(function(require, exports, module) {

	var TaskView  = require('app/list/views/task');

	// all tasks collection - the todo list
	var TaskCollectionView = Marionette.CollectionView.extend({

		tagName: "ul",
		itemView: TaskView
		
	});

	return TaskCollectionView;

});