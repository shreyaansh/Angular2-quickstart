import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(mouseenter)': 'onMouseOver()',
        '(mouseleave)': 'onBlur()'
    }
})
export class AutoGrowDirective {
    check = 0;
    constructor(private el: ElementRef, private renderer: Renderer) {
    }
    onFocus() {
        this.check = 1;
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
    }
    onMouseOver() {
        this.onFocus();
        this.check = 0;
    }
    onBlur() {
        if (this.check) {

        } else {
            this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
        }
    }
}
