define(function(require, exports, module) {

// Imports
var TaskCollection = require('app/list/collections/task-collection');
var Task           = require('app/list/models/task');

describe('Task Collection', function() {

    // Set Up
	var collection    = new TaskCollection();
	var activeTask    = new Task({ text: 'This is an active task' });
	var completedTask = new Task({ text: 'This is a completed task', complete: true });

	collection.add(activeTask);
	collection.add(completedTask);

    // Test Suite
    it('returns all active tasks', function(){

    	var activeTasks = collection.getActive();

    	expect(activeTasks).toContain(activeTask);
    	expect(activeTasks).not.toContain(completedTask);

    });

    it('returns all completed tasks', function(){

    	var completedTasks = collection.getCompleted();

    	expect(completedTasks).toContain(completedTask);
    	expect(completedTasks).not.toContain(activeTask);

    });


}); // Eof describe
}); // Eof define
