import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {PublisherComponent} from './publishers.components';
import {LikeComponent} from './like.component';
import {MainComponent} from './main.component';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><main></main>',
    directives: [CoursesComponent, AuthorsComponent, PublisherComponent, LikeComponent, MainComponent]
})
export class AppComponent {
    post = {
        title: 'Title',
        isFavorite: true,
        isLiked: true
    }

    changeOccured() {
        console.log("Change Occured, Event Updated!");
    }
}
