System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AuthorsService;
    return {
        setters:[],
        execute: function() {
            AuthorsService = (function () {
                function AuthorsService() {
                }
                AuthorsService.prototype.getAuthors = function () {
                    return { "authors": [
                            { "name": "Author 1", "handle": "@author1" },
                            { "name": "Author 2", "handle": "@author2" },
                            { "name": "Author 3", "handle": "@author3" }
                        ] };
                };
                return AuthorsService;
            }());
            exports_1("AuthorsService", AuthorsService);
        }
    }
});
//# sourceMappingURL=authors.service.js.map