import {Component, Input} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'lib-ng-form-validator',
  template: `<div [ngClass]="textClass" *ngIf="isDirtyAndInvalid">
      <i class="fa fa-fw" [ngClass]="iconClass"></i>
      {{ message }}</div>`,
  styleUrls: ['./ng-form-validator.component.css']
})
export class NgFormValidatorComponent {
  @Input() control: AbstractControl;
  @Input() showOnTouched = true;
  @Input() textClass = 'invalid-feedback';
  @Input() iconClass = 'fa-exclamation-circle';
  constructor(
  ) {
  }

  get errors() {
    return this.control.errors;
  }

  get message() {
    return this.errors ? this.errors.msg : null;
  }

  get isDirtyAndInvalid() {
    const control = this.control;
    return control && this.errors && (this.showOnTouched || control.touched) && control.invalid;
  }

}
