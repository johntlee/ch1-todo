define(function(require, exports, module) {

    var marionette = require('marionette');

	var TaskView  = require('app/list/views/task');

	// all tasks collection - the todo list
	var TaskCollectionView = marionette.CollectionView.extend({

		tagName: "ul",
		id: "todo",
		itemView: TaskView

	});

	return TaskCollectionView;

});
