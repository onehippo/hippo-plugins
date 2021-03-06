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
// Tests exist alongside the component they are testing with no separate test directory required; the build process should be sophisticated enough to handle this.
// via https://github.com/ngbp/ng-boilerplate#philosophy

module.exports = function (config) {

    var hippo = {
        bowerComponents : 'components'
    };

    config.set({
        basePath: '',
        frameworks: ['jasmine'],

        // files to load in the browser
        files: [
            // components
            hippo.bowerComponents + '/jquery/jquery.js',
            hippo.bowerComponents + '/jasmine-jquery/lib/jasmine-jquery.js',
            hippo.bowerComponents + '/angular/angular.js',
            hippo.bowerComponents + '/angular-mocks/angular-mocks.js',
            hippo.bowerComponents + '/js-detect-ie/detect-ie.js',

            'src/js/main.js',
            'src/js/loader.js',
            'src/js/*.spec.js'
        ],

        // generate js files from html templates to expose them during testing
        preprocessors: {
            '**/*.html': 'ng-html2js'
        },

        // https://github.com/karma-runner/karma-ng-html2js-preprocessor#configuration
        ngHtml2JsPreprocessor: {
            // setting this option will create only a single module that contains templates
            // from all the files, so you can load them all with module('foo')
            //moduleName: 'hippo.templates'
        },

        // files to exclude
        exclude: [],

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_WARN,

        port: 9876,
        browsers: ['PhantomJS'],
        reporters: ['dots', 'junit'],

        junitReporter: {
            outputFile: 'target/test-results.xml'
        }
    });
};
