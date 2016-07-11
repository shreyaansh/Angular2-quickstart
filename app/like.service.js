System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LikeService;
    return {
        setters:[],
        execute: function() {
            LikeService = (function () {
                function LikeService() {
                    this.likes = 1;
                }
                LikeService.prototype.getLikes = function () {
                    return this.likes;
                };
                LikeService.prototype.setLikes = function (counter) {
                    this.likes += counter;
                };
                return LikeService;
            }());
            exports_1("LikeService", LikeService);
        }
    }
});
//# sourceMappingURL=like.service.js.map