define(function(require, exports, module) {

var Task = require('app/list/models/task');

describe('Task Model', function() {

    // Set Up
    beforeEach(function() {
    });

    afterEach(function() {
    });

    // Helpers
    function getOptions(augments) {
        augments = augments || {};

        var testSuiteDefaults = {
        };

        return _.extend(testSuiteDefaults, augments);
    }

    it('toggles completition', function(){

    	var task = new Task({
    		text: 'My new task'
    	});

    	expect(task.get('complete')).toBe(false);

    	task.toggle();

    	expect(task.get('complete')).toBe(true);

    });

}); // Eof describe
}); // Eof define
