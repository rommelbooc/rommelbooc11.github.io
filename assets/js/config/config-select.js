require.config({
    paths: {
        'angular': 'bower_components/angular/angular',
        'angular-ui-select': 'bower_components/angular-ui-select/dist/select'
    },
    shim: {
        'angular-ui-select': ['angular']
    }
});