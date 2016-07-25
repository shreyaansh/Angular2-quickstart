import { Control, ControlGroup } from 'angular2/common';
import { PasswordChangeComponent } from './passwordChange.component';

export class PasswordChangeValidators {

    static oldPasswordCheck(control: Control, passwordChangeComponent: PasswordChangeComponent) {
        if (control.value == passwordChangeComponent.oldPassword) {
            return { oldPasswordCheck: true };
        }
        return null;
    }

    static confirmPassword(group: ControlGroup) {
        var newPassword = group.find('newPassword').value;
        var conPassword = group.find('conPassword').value;
        if (newPassword != conPassword) {
            return { confirmPassword: true };
        }
        return null;
    }
}
