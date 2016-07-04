import {Component} from 'angular2/core';
import {PublisherService} from './publisher.service';

@Component({
    selector: 'publishers',
    template: `
        <h2>Publishers</h2>
        <ul>
            <li *ngFor="#publisher of publishers">
            {{ publisher }}</li>
        </ul>`,
    providers: [PublisherService]
})
export class PublisherComponent {
    publishers;
    constructor(publisherService: PublisherService) {
        this.publishers = publisherService.getPublishers();
    }
}
