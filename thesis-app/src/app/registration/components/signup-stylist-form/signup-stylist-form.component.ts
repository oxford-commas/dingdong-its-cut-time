import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IStylistInformationData } from '../../interfaces/registration-data';

@Component({
  selector: 'signup-stylist-form',
  templateUrl: './signup-stylist-form.component.html'
})
export class SignUpStylistFormComponent {
  @Input() styling: Array<string>;
  @Output() handleStylistFormChange = new EventEmitter<IStylistInformationData>();

  onChange(form, checkboxVal, index) {
    if (!form.styling) {
      form.styling = [];
    } else {
      if (form.styling.indexOf(checkboxVal) !== -1) {
        form.styling.splice(index, 1);
        return;
      }
    }
    form.styling[index] = checkboxVal; // .length is now inaccurate
  }
}