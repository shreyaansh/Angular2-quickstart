import {Component} from 'angular2/core';

@Component({
    selector: 'zippy',
    templateUrl: 'app/zippy.template.html',
    styles: ['.right { float: right }'],
    directives: [],
})
export class ZippyComponent {
    clicked = false;
}
