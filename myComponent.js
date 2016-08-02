angular.module('myComponent', []);

angular
    .module('myComponent')
    .component('myComponent', {
        template: '<h1>{{$ctrl.name}}</h1>',
        controller: function() {
            var self = this;
            self.name = 'This is my component';
        }
    });