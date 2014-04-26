module.exports = function(grunt) {
    var targets = [
        'Gruntfile.js',
        'assertions/**/*.js',
        'commands/**/*.js',
        'tests/**/*.js'
    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: targets
        },
        jscs: {
            options: {
                config: '.jscsrc'
            },
            src: targets
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks("grunt-jscs-checker");

    grunt.registerTask('default', ['jshint:files', 'jscs:src']);

};