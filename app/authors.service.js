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
                    return [
                        { "name": "Author 1", "handle": "@author1", "image": "http://lorempixel.com/100/100/people?1",
                            "tweet": "This is my tweet" },
                        { "name": "Author 2", "handle": "@author2", "image": "http://lorempixel.com/100/100/people?2",
                            "tweet": "This is my tweet" },
                        { "name": "Author 3", "handle": "@author3", "image": "http://lorempixel.com/100/100/people?3",
                            "tweet": "This is my tweet" },
                        { "name": "Author 4", "handle": "@author4", "image": "http://lorempixel.com/100/100/people?4",
                            "tweet": "This is my tweet" }
                    ];
                };
                return AuthorsService;
            }());
            exports_1("AuthorsService", AuthorsService);
        }
    }
});
//# sourceMappingURL=authors.service.js.map