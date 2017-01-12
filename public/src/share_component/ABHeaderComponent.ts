angular.module('ABShareModule',[]).component('herodetail', {

    template: `<div>123</div>`,
    bindings: {
        hero: '<',
        onDelete: '&',
        onUpdate: '&'
    }
});