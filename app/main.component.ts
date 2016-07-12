import {Component} from 'angular2/core';
import {AuthorsService} from './authors.service';
import {LikeComponent} from './like.component';

@Component ({
    selector: 'main',
    templateUrl: 'app/main.template.html',
    directives: [LikeComponent],
    providers: [AuthorsService]
})

export class MainComponent {
    tweets;

    constructor(authorsService: AuthorsService) {
        this.tweets = authorsService.getAuthors();
        console.log(this.tweets);
    }
}
