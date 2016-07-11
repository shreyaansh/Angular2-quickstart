import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {LikeService} from './like.service';

@Component ({
    selector: 'like',
    template: `
    <i class="glyphicon glyphicon-heart" *ngIf = "liked" style="font-size:24px; color:deeppink; cursor: pointer" (click)="onLikeChange($event)"></i>
    <i class="glyphicon glyphicon-heart" *ngIf = "!liked" style="font-size:24px; color:#ccc; cursor: pointer" (click)="onLikeChange($event)"></i>
    <font size=5>{{likes}}</font>
    `,
    providers: [LikeService]
})
export class LikeComponent {
    liked = false;
    likes = 0;
    counter;
    @Output() change = new EventEmitter();

    constructor(likeService: LikeService) {
        this.likes = likeService.getLikes();
    }

    onLikeChange($event) {
        this.liked = this.liked ? false : true;
        this.change.emit($event);
        this.counter = this.liked ? 1 : -1;
        this.likes += this.counter;
    }
}
