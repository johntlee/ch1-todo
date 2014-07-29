define(function(require, exports, module) {

// Imports
var keys = require('built/app/keys');

var TaskCollection = require('app/list/collections/task-collection');
var HeaderView = require('app/list/views/header');

var helpers = require('specs/vendor/specs-helpers');
var Events = helpers.Events;

describe('Header View', function() {

    // Set Up
	var collection = new TaskCollection();
	var header     = new HeaderView({ collection: collection });

	header.render();

	var $input	   = header.$('.task-name');

    beforeEach(function() {

    });

    afterEach(function() {
    });

    // Test Suite
    it('does nothing when key down', function(){

    	var spy = spyOn(header, 'addNewTask');

    	// enter in 'task' into input
    	Events.simulateKeyDown($(header.ui.newTask), helpers.KeyCodes.t);
    	Events.simulateKeyDown($(header.ui.newTask), helpers.KeyCodes.a);
    	Events.simulateKeyDown($(header.ui.newTask), helpers.KeyCodes.s);
    	Events.simulateKeyDown($(header.ui.newTask), helpers.KeyCodes.k);

    	expect(spy).not.toHaveBeenCalled();

    });

    it('calls addNewTask when pressing return key with some task name', function(){

    	var spy = spyOn(header, 'addNewTask');

    	// enter in 'task' into input
    	Events.simulateKeyDown($(header.ui.newTask), helpers.KeyCodes.t);
    	Events.simulateKeyDown($(header.ui.newTask), helpers.KeyCodes.a);
    	Events.simulateKeyDown($(header.ui.newTask), helpers.KeyCodes.s);
    	Events.simulateKeyDown($(header.ui.newTask), helpers.KeyCodes.k);

    	// enter in return key
    	Events.simulateKeyDown($(header.ui.newTask), helpers.KeyCodes.return);

    	expect(spy).toHaveBeenCalled();

    });


}); // Eof describe
}); // Eof define
