(function(){
    'use strict';
    angular.module('todo',[]);
})();

////////////////

(function(){
    'use strict';

    angular.module('todo').component('app', {
        templateUrl: 'components/app.tpl.html',
        controller: App,
        controllerAs: 'appCtrl'
    });

    ////////////////

    function App(){
        var vm = this;

        vm.user = {name: 'world'};
    }
})();