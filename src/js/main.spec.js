describe('Hippo plugins Module', function () {

    angular.module('plugin', ['hippo.plugins']);

    beforeEach(function () {
        module('plugin');
    });

    describe('asset filter', function() {

        it('uses scope plugin when specified', function () {
            var elm, scope;

            inject(function($rootScope, $compile) {
                scope = $rootScope;
                scope.plugin = 'plugin';

                elm = angular.element('<span>{{ \'aap\' | hippo.plugins.asset }}</span>');
                $compile(elm)(scope);
                scope.$digest();
            });
            expect(angular.element(elm[0]).text()).toMatch(/components\/plugin\/dist\/aap/);
        });

        it('uses attribute plugin when specified', function () {
            var elm, scope;

            inject(function($rootScope, $compile) {
                scope = $rootScope;

                elm = angular.element('<span>{{ \'aap\' | hippo.plugins.asset:\'plugin\' }}</span>');
                $compile(elm)(scope);
                scope.$digest();
            });
            expect(angular.element(elm[0]).text()).toMatch(/components\/plugin\/dist\/aap/);
        });
    });

});