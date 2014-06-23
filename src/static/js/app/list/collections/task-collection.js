define(function(require, exports, module) {

    var backbone = require('backbone');
    var Task = require('app/list/models/task');

    var TaskCollection = backbone.Collection.extend({

        model: Task,

        // get all incompleted tasks
        getActive: function() {
            return this.where({ complete: false });
        },

        // get all completed tasks
        getCompleted: function() {
            return this.where({ complete: true });
        }

    });

    return TaskCollection;

});
