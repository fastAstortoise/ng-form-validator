import {Component, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'lib-ng-form-validator',
  animations: [
    trigger("fadeIn", [
      state("void", style({
        opacity: 0,
        height: 0,
      })),
      transition("void <=> *",
        animate("0.35s")),
    ]),],
  template: `
    <div @fadeIn class="invalid-feedback" [ngClass]="classType" *ngIf="isDirtyAndInvalid">
      <i class="fa fa-fw" [ngClass]="iconClass"></i>
      {{ message }}</div>
  `,
  styles: []
})
export class NgFormValidatorComponent {
  @Input() control: AbstractControl;
  @Input() showOnTouched = false;
  constructor() {}

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
