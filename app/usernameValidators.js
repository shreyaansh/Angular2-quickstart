System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UsernameValidators;
    return {
        setters:[],
        execute: function() {
            UsernameValidators = (function () {
                function UsernameValidators() {
                }
                UsernameValidators.cannotContainSpace = function (control) {
                    if (control.value.indexOf(' ') >= 0)
                        return { cannotContainSpace: true };
                    return null;
                };
                UsernameValidators.shouldBeUnique = function (control) {
                    // return new Promise((resolve, reject) => {
                    //     setTimeout(() => {
                    //         if (control.value == 'sbassi') {
                    //             resolve({ shouldBeUnique: true });
                    //         } else {
                    //             resolve(null);
                    //         }
                    //     }, 1000);
                    // });
                };
                return UsernameValidators;
            }());
            exports_1("UsernameValidators", UsernameValidators);
        }
    }
});
//# sourceMappingURL=usernameValidators.js.map