import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive';

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        <div [textContent]="title"></div>
        {{ title }}
        <input type = "text" [(ngModel)]="auto" autoGrow/>
        {{ auto }}
        <br>
        <br>
        <ul>
            <li *ngFor="#course of courses">
                {{ course }}
            </li>
        </ul>
        `,
    directives: [AutoGrowDirective],
    providers: [CourseService]
})
export class CoursesComponent {
    title = "Angular 2 quickstart guide";
    auto = "Hello World";
    courses;
    isTrue = false;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}
