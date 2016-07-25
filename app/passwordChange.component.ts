import { Component } from 'angular2/core';
import { FormBuilder, Control, ControlGroup, Validators } from 'angular2/common';
import { PasswordChangeValidators } from './passwordChangeValidators';
@Component({
    selector: 'password-change',
    templateUrl: 'app/passwordChange.component.html'
})

export class PasswordChangeComponent {
    oldPassword = '1234';
    newPassword: string;
    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            oldPassword: ['', Validators.compose([Validators.required, PasswordChangeValidators.oldPasswordCheck])],
            newPassword: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            conPassword: ['', Validators.compose([Validators.required, PasswordChangeValidators.confirmPassword])]
        });
    }
}
