import {Component} from 'angular2/core';
import {ZippyComponent} from './zippy.component';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><br><zippy>Hello</zippy><zippy>World</zippy>',
    directives: [ZippyComponent],
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
