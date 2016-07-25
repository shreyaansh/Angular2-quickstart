System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordChangeValidators;
    return {
        setters:[],
        execute: function() {
            PasswordChangeValidators = (function () {
                function PasswordChangeValidators() {
                }
                PasswordChangeValidators.oldPasswordCheck = function (control, passwordChangeComponent) {
                    if (control.value == passwordChangeComponent.oldPassword) {
                        return { oldPasswordCheck: true };
                    }
                    return null;
                };
                PasswordChangeValidators.newPassword = function (control) {
                };
                return PasswordChangeValidators;
            }());
            exports_1("PasswordChangeValidators", PasswordChangeValidators);
        }
    }
});
//# sourceMappingURL=passwordChangeValidators.js.map