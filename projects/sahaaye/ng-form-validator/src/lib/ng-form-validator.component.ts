import {Component, Input} from '@angular/core';
import {AbstractControl} from "@angular/forms";
import {NgFormValidatorServiceConfig} from "./ng-form-validator.service";

@Component({
  selector: 'lib-ng-form-validator',
  template: `<div class="invalid-feedback" [ngClass]="classType" *ngIf="isDirtyAndInvalid">
      <i class="fa fa-fw" [ngClass]="iconClass"></i>
      {{ message }}</div>`
})
export class NgFormValidatorComponent {
  @Input() control: AbstractControl;
  @Input() showOnTouched = false;
  constructor(
    private _config: NgFormValidatorServiceConfig
  ) {
    this._config.showErrorsOnLoad.subscribe((value => {}))
  }

  get errors() {
    return this.control.errors;
  }

  get params() {
    return this.errors ? this.errors.translateParams : null;
  }

  get type() {
    return this.errors ? this.errors.type : null;
  }

  get classType() {
    return this.type && this.type === "warning" ? "text-warning" : "text-danger";
  }

  get iconClass() {
    return this.type && this.type === "warning" ? "fa-exclamation-triangle" : "fa-exclamation-circle";
  }

  get message() {
    return this.errors ? this.errors.msg : null;
  }

  get isDirtyAndInvalid() {
    const control = this.control;
    return control && this.errors && (this.showOnTouched || control.touched) && control.invalid;
  }

}
