(function () {
    "use strict";

    angular.module('hippo.plugins', [])

    /**
     * Filter 'hippo.plugins.asset' that transforms a plugin-relative path to a packaged path.
     * The plugin can be specified on the scope, or in the template.  The template takes precedence.
     * <p>
     * Note that scope (prototypical) inheritance takes care of providing the plugin property in nested templates.
     */
            .filter('hippo.plugins.asset', ['hippo.plugins.url', function (buildUrl) {
                return function (path, plugin) {
                    return buildUrl((plugin ? plugin : this.plugin), path);
                };
            }])

        /*
         *
         */
            .provider('hippo.plugins.url', function () {
                this.prefix = 'components';
                this.exempt = [];

                this.setPrefix = function (prefix) {
                    this.prefix = prefix;
                };

                this.useRoot = function (pluginName) {
                    this.exempt.push(pluginName);
                };

                this.$get = function () {
                    var prefix = this.prefix,
                            exempt = this.exempt;
                    return function buildUrl(pluginName, path) {
                        if (!pluginName) {
                            return path;
                        } else if (exempt.indexOf(pluginName) < 0) {
                            return prefix + '/' + pluginName + '/dist/' + path;
                        } else {
                            return 'src/' + path;
                        }
                    };
                };
            });
})();