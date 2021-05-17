import {Component, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'sh-form-validator-tmpl',
  template: `<div [ngClass]="textClass" *ngIf="isDirtyAndInvalid">
      <i [ngClass]="iconClass"></i>
      {{ message }}</div>`,
  styleUrls: ['./ng-form-validator.component.css']
})
export class NgFormValidatorComponent {
  @Input() control: AbstractControl;
  @Input() showOnLoad: boolean;
  @Input() textClass: string;
  @Input() iconClass: string;
  constructor(
  ) {}

  get errors() {
    return this.control.errors;
  }

  get message() {
    return this.errors ? this.errors.msg : null;
  }

  get isDirtyAndInvalid() {
    const control = this.control;
    return control && control.invalid && (this.showOnLoad || control.touched) ;
  }

}
