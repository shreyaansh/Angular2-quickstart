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
                    if (control.value != '1234') {
                        return { oldPasswordCheck: true };
                    }
                    return null;
                };
                PasswordChangeValidators.confirmPassword = function (group) {
                    //var newPassword = group.find('newPassword').value;
                    //var conPassword = group.find('conPassword').value;
                    //if (newPassword != conPassword) {
                    //    return { confirmPassword: true };
                    //}
                    return null;
                };
                return PasswordChangeValidators;
            }());
            exports_1("PasswordChangeValidators", PasswordChangeValidators);
        }
    }
});
//# sourceMappingURL=passwordChangeValidators.js.map