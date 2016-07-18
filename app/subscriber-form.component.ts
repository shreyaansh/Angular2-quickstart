import {Component} from 'angular2/core';

@Component({
    selector: 'subscriber-form',
    templateUrl: 'app/subscriber-form.component.html'
})
export class SubscriberFormComponent {
    onSubmit(form) {
        console.log(form);
    }
}
