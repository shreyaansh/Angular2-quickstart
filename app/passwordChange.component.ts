import { Component } from 'angular2/core';
import { FormBuilder, Control, ControlGroup, Validators } from 'angular2/common';

@Component({
    selector: 'password-change',
    templateUrl: 'passwordChange.component.html'
})

export class PasswordChangeComponent {
    oldPassword = '1234';
    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            oldPassword: ['', Validators.compose([Validators.required])],
            newPassword: ['', Validators.compose([Validators.required])]
        });
    }
}
