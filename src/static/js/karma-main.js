var tests = [
    // Load mocks and vendor init
    'tests/mocks/init',
    'tests/vendor/init',

    // ---------------------------
    // Load Specs (AKA tests)
    //'tests/spec-app',
    'tests/spec-model-task',
    'tests/spec-collection',
    'tests/spec-header'
];

requirejs.config({
    baseUrl: '/base/src/static/js',

    paths:{
        'tests': 'specs',
        'jasmine': 'specs/vendor/jasmine',
    },

    shim: {
        'jasmine/jasmine-jquery': {
            'deps': ['jquery']
        },
    },

    deps: tests,

    callback: window.__karma__.start
});
