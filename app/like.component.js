System.register(['angular2/core', './like.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, like_service_1;
    var LikeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (like_service_1_1) {
                like_service_1 = like_service_1_1;
            }],
        execute: function() {
            LikeComponent = (function () {
                function LikeComponent(likeService) {
                    this.liked = false;
                    this.likes = 0;
                    this.change = new core_1.EventEmitter();
                    this.likes = likeService.getLikes();
                }
                LikeComponent.prototype.onLikeChange = function ($event) {
                    this.liked = this.liked ? false : true;
                    this.change.emit($event);
                    this.counter = this.liked ? 1 : -1;
                    this.likes += this.counter;
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], LikeComponent.prototype, "change", void 0);
                LikeComponent = __decorate([
                    core_1.Component({
                        selector: 'like',
                        template: "\n    <i class=\"glyphicon glyphicon-heart\" *ngIf = \"liked\" style=\"font-size:24px; color:deeppink; cursor: pointer\" (click)=\"onLikeChange($event)\"></i>\n    <i class=\"glyphicon glyphicon-heart\" *ngIf = \"!liked\" style=\"font-size:24px; color:#ccc; cursor: pointer\" (click)=\"onLikeChange($event)\"></i>\n    <font size=5>{{likes}}</font>\n    ",
                        providers: [like_service_1.LikeService]
                    }), 
                    __metadata('design:paramtypes', [like_service_1.LikeService])
                ], LikeComponent);
                return LikeComponent;
            }());
            exports_1("LikeComponent", LikeComponent);
        }
    }
});
//# sourceMappingURL=like.component.js.map