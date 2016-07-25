import {Component} from 'angular2/core';
/////////////////\\\\\\\\\\\\\\\\\
//import {SignUpFormComponent} from './signup-form.component';
import { PasswordChangeComponent } from './passwordChange.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1><br>
    <password-change></password-change>
    `,
    directives: [PasswordChangeComponent],
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
