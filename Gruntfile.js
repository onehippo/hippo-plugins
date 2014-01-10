'use strict';
module.exports = function (grunt) {

    // display execution time of each task
    require('time-grunt')(grunt);

    // load all grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    var mountFolder = function (connect, dir) {
        return connect.static(require('path').resolve(dir));
    };

    var cfg = {};

    // project configuration
    grunt.initConfig({
        // configuration
        cfg: cfg,

        // clean target (distribution) folder
        clean: [ 'dist/**/*' ],

        // copy files
        copy: {
            main: {
                expand: true,
                cwd: 'src',
                src: [
                    'js/loader.js',
                    'js/main.js',
                    '!**/*.spec.js'
                ],
                dest: 'dist/'
            }
        },

        // jshint
        jshint: {
            all: [
                'src/js/loader.js',
                'src/js/main.js',
                '!**/*.spec.js'
            ],
            options: {
                'jshintrc': true
            }
        },

        // testing with karma
        karma: {
            options: {
                //logLevel: 'debug',
                configFile: 'karma.conf.js',
                autoWatch: true
            },

            single: {
                singleRun: true
            },

            continuous: {
                singleRun: false
            }
        },

        concat: {
            dist: {
                src: [
                    'src/js/main.js'
                ],
                dest: 'dist/js/main.js'
            }
        },

        uglify: {
            dist: {
                files: {
                    'dist/js/main.min.js': ['dist/js/main.js'],
                    'dist/js/loader.min.js': ['dist/js/loader.js'],
                }
            }
        }
    });

    // default
    grunt.registerTask('default', ['build']);

    // build
    grunt.registerTask('build', function (target) {
        var tasks = [
            'jshint',
            'karma:single',
            'clean',
            'copy',
            'concat:dist',
            'uglify:dist'
        ];

        grunt.task.run(tasks);
    });

    // test
    grunt.registerTask('test:unit', [
        'karma:single'
    ]);

    grunt.registerTask('test:unit:continuous', [
        'karma:continuous'
    ]);

};
