import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive';

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        <div [textContent]="title"></div>
        {{ title }}
        <input type = "text" bindon-ngModel="auto" autoGrow/>
        {{ auto }}
        <ul>
            <li *ngFor="#course of courses">
            {{ course }}
            </li>
        </ul>
        `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent {
    title = "Angular 2 quickstart guide";
    auto = "Hello World";
    courses;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}
