import { ComponentFactoryResolver, Directive, ViewContainerRef } from '@angular/core';
import {FormControlName, FormGroupDirective} from '@angular/forms';
import { NgFormValidatorBaseDirective } from './ng-form-validator-base.directive';
import {NgFormValidatorServiceConfig} from "./ng-form-validator.service";

@Directive({
  selector: "[nfvFcValidation]",
})
export class NgFormValidatorDirective extends NgFormValidatorBaseDirective {
  constructor(
     vcr: ViewContainerRef,
     cfr: ComponentFactoryResolver,
     ctl: FormControlName,
     private ngFormValidatorServiceConfig: NgFormValidatorServiceConfig
  ) {
    super(vcr, cfr, ctl, ngFormValidatorServiceConfig);
    if(!ctl){
      throw Error('Directive should on formControlName');
    }
  }
}
