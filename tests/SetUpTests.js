/* global JasmineFaviconReporter, jasmineRequire */
window.dojoConfig = {
    baseUrl: './',
    packages: [
        {
            name: 'agrc',
            location: '.'
        }, {
            name: 'dojo',
            location: 'bower_components/dojo'
        }, {
            name: 'dijit',
            location: 'bower_components/dijit'
        }, {
            name: 'dojox',
            location: 'bower_components/dojox'
        }, {
            name: 'esri',
            location: 'bower_components/esri'
        }, {
            name: 'stubmodule',
            location: 'bower_components/stubmodule/src',
            main: 'stub-module'
        }, {
            name: 'spin',
            location: 'bower_components/spinjs',
            main: 'spin'
        }
    ],
    has: {'dojo-undef-api': true}
};

// for jasmine-favicon-reporter
jasmine.getEnv().addReporter(new JasmineFaviconReporter());
jasmine.getEnv().addReporter(new jasmineRequire.JSReporter2());
