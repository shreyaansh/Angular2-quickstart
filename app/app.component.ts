import {Component} from 'angular2/core';
/////////////////\\\\\\\\\\\\\\\\\
import {ContactFormComponent} from './contact-form.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1><br>
    <contact-form></contact-form>
    `,
    directives: [ContactFormComponent],
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
