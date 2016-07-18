import {Component} from 'angular2/core';
import {SubscriberFormService} from './subscriber-form.service';

@Component({
    selector: 'subscriber-form',
    templateUrl: 'app/subscriber-form.component.html',
    providers: [SubscriberFormService]
})
export class SubscriberFormComponent {
    frequencies;

    constructor(subscriberFormService: SubscriberFormService) {
        this.frequencies = subscriberFormService.getFrequencies();
    }

    onSubmit(form) {
        console.log(form);
    }
}
