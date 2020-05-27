import {NgModule} from '@angular/core';
import {NgFormValidatorComponent} from './ng-form-validator.component';
import {CommonModule} from "@angular/common";
import {NgFormValidatorFgDirective} from "./ng-form-validator-fg.directive";
import {NgFormValidatorDirective} from "./ng-form-validator.directive";
import {NgFormValidatorHostDirective} from "./ng-form-validator-host.directive";


@NgModule({
  declarations: [
    NgFormValidatorComponent,
    NgFormValidatorDirective,
    NgFormValidatorFgDirective,
    NgFormValidatorHostDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgFormValidatorDirective,
    NgFormValidatorFgDirective,
    NgFormValidatorHostDirective,
  ]
})
export class NgFormValidatorModule {
}
