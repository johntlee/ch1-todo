define(function(require, exports, module) {

// Imports
var Task     = require('app/list/models/task');
var TaskView = require('app/list/views/task');

var helpers  = require('specs/vendor/specs-helpers');
var Events   = helpers.Events;

describe('Task View', function() {

	beforeEach(function(){

	    this.task = new Task({ id: 0, text: 'My task' });
	    this.taskView = new TaskView({ model: this.task });

    	//click on toggle checkbox
    	setFixtures(this.taskView.render().$el);

	});

    it('assigns correct class name', function(){

        expect($(this.taskView.$el).attr('class')).toBe('active');

    });

    it('toggles class for task', function(){
    	$(this.taskView.ui.toggle).click();

    	expect(this.task.get('complete')).toBeTruthy();
    	expect(this.taskView.$el.attr('class')).toBe('completed');

    	//click on toggle checkbox again
    	$(this.taskView.ui.toggle).click();

    	expect(this.task.get('complete')).toBeFalsy();
    	expect(this.taskView.$el.attr('class')).toBe('active');

    });

    it('deletes the model', function(){
        var spy = spyOn(this.task, 'destroy');

    	$(this.taskView.ui.remove).click();

        expect(spy).toHaveBeenCalled();
    });


}); // Eof describe
}); // Eof define
