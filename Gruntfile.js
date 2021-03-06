/*
 * Copyright 2014 Hippo B.V. (http://www.onehippo.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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

        // clean dependencies and distribution folder
        clean: {
            bower: [ 'components/**' ],
            dist: [ 'dist/**/*' ]
        },

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
            options: {
                stripBanners: true
            },
            dist: {
                src: [
                    'src/js/main.js'
                ],
                dest: 'dist/js/main.js'
            }
        },

        uglify: {
            options: {
                preserveComments: 'some'
            },
            dist: {
                files: {
                    'dist/js/main.min.js': ['dist/js/main.js'],
                    'dist/js/loader.min.js': ['dist/js/loader.js'],
                }
            }
        }
    });

    // default
    grunt.registerTask('default', 'Build and test', [
        'build',
        'test'
    ]);

    // build
    grunt.registerTask('build', 'Build everything', [
        'jshint',
        'clean:dist',
        'copy',
        'concat:dist',
        'uglify:dist'
    ]);

    // test
    grunt.registerTask('test', 'Test the source code', [
        'karma:single'
    ]);

    grunt.registerTask('test:continuous', 'Test the source code continuously', [
        'karma:continuous'
    ]);

};
