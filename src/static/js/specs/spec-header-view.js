define(function(require, exports, module) {

// Imports
var keys           = require('built/app/keys');

var TaskCollection = require('app/list/collections/task-collection');
var HeaderView     = require('app/list/views/header');

var helpers        = require('specs/vendor/specs-helpers');
var Events         = helpers.Events;

describe('Header View', function() {

    // Set Up
	var collection = new TaskCollection();
	var header     = new HeaderView({ collection: collection });

	header.render();

	var $input	   = header.$('.task-name');

    beforeEach(function() {
        $(header.ui.newTask).val('');
    });

    afterEach(function() {
    });

    // Test Suite
    it('does nothing when key down', function(){

    	var spy = spyOn(header, 'addNewTask').and.callThrough();

    	// enter in 'task' into input
        Events.insertChar($(header.ui.newTask), 't');
        Events.insertChar($(header.ui.newTask), 'a');
        Events.insertChar($(header.ui.newTask), 's');
        Events.insertChar($(header.ui.newTask), 'k');

        // expect 'task' to not be in collection
        expect(collection.where({ text: 'task' })).toEqual([]);

    });

    it('adds new task', function(){

    	var spy = spyOn(header, 'addNewTask').and.callThrough();

    	// enter in 'task' into input
        Events.insertChar($(header.ui.newTask), 't');
        Events.insertChar($(header.ui.newTask), 'a');
        Events.insertChar($(header.ui.newTask), 's');
        Events.insertChar($(header.ui.newTask), 'k');

    	// enter in return key
    	Events.simulateKeyDown($(header.ui.newTask), helpers.KeyCodes.return);

        // expect to have called function to add new task
    	expect(spy).toHaveBeenCalled();

        // expect 'task' to be in collection
        expect(collection.where({ text: 'task' })).not.toEqual([]);

    });


}); // Eof describe
}); // Eof define
