import {Component} from 'angular2/core';
/////////////////\\\\\\\\\\\\\\\\\
import {SubscriberFormComponent} from './subscriber-form.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1><br>
    <subscriber-form></subscriber-form>
    `,
    directives: [SubscriberFormComponent],
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
