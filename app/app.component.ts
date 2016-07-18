import {Component} from 'angular2/core';
/////////////////\\\\\\\\\\\\\\\\\
import {SignUpFormComponent} from './signup-form.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1><br>
    <signup-form></signup-form>
    `,
    directives: [SignUpFormComponent],
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
