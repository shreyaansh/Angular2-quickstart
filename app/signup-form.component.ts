import { Component } from 'angular2/core';
import { ControlGroup, Control, Validators, FormBuilder } from 'angular2/common';
import { UsernameValidators } from './usernameValidators';
import { PasswordValidators } from './passwordValidators';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {
    form: ControlGroup;
    uname: string;

    constructor(fb: FormBuilder) {
        this.uname = '';
        this.form = fb.group({
            username: ['', Validators.compose(
                [Validators.required, UsernameValidators.cannotContainSpace]
            )],
            password: ['', Validators.compose([
                Validators.required, PasswordValidators.cannotContainSpace]
            )]
        });
    }

    onSubmit() {
        console.log(this.form.value);
    }
}
