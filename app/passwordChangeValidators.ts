import { Control } from 'angular2/common';
import { PasswordChangeComponent } from './passwordChange.component';

export class PasswordChangeValidators {

    static oldPasswordCheck(control: Control, passwordChangeComponent: PasswordChangeComponent) {
        if (control.value == passwordChangeComponent.oldPassword) {
            return { oldPasswordCheck: true };
        }
        return null;
    }

    static newPassword (control: Control) {
        
    }
}
