define(function(require, exports, module) {

// Imports
var keys = require('built/app/keys');

var Task           = require('app/list/models/task');
var TaskCollection = require('app/list/collections/task-collection');
var FooterView = require('app/list/views/footer');

var helpers = require('specs/vendor/specs-helpers');
var Events = helpers.Events;

describe('Footer View', function() {

    // Set Up
	var collection = new TaskCollection();
    var activeTask    = new Task({ text: 'This is an active task' });
    var completedTask = new Task({ text: 'This is a completed task', complete: true });

    collection.add(activeTask);
    collection.add(completedTask);

	var footer     = new FooterView({ collection: collection });
    footer.render();

    it('feeds count of active count to the ui', function(){

        // count active tasks
        footer.countActiveTasks();

        expect(footer.ui.count.html()).toBe('1');

    });

    it('recounts active tasks when adding a new task', function(){

        // add another active task
        var newTask = new Task({ text: 'This is a new task' });
        collection.add(newTask);

        expect(footer.ui.count.html()).toBe('2');

    });

    it('removes all active tasks', function(){

        footer.removeCompleted();

        expect(collection.getCompleted()).toEqual([]);

    });

}); // Eof describe
}); // Eof define
