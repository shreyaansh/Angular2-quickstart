import {Component} from 'angular2/core';
/////////////////\\\\\\\\\\\\\\\\\
import {ZippyComponent} from './zippy.component';
import {MainComponent} from './main.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1><br>
    <zippy title="Hello">Hello</zippy>
    <zippy title="World">World</zippy>
    <main></main>
    `,
    directives: [ZippyComponent, MainComponent],
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
