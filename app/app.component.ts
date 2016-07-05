import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {PublisherComponent} from './publishers.components';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><courses></courses><authors></authors><publishers></publishers>',
    directives: [CoursesComponent, AuthorsComponent, PublisherComponent],
    providers: []
})
export class AppComponent { }
