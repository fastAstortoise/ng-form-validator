import {ComponentFactoryResolver, Directive, ViewContainerRef} from '@angular/core';
import {FormControlName} from '@angular/forms';
import {NgFormValidatorBaseDirective} from './ng-form-validator-base.directive';
import {NgFormValidatorService} from "./ng-form-validator.service";

@Directive({
  selector: "[shFcValidation]",
})
export class NgFormFcValidatorDirective extends NgFormValidatorBaseDirective {
  constructor(
     vcr: ViewContainerRef,
     cfr: ComponentFactoryResolver,
     ctl: FormControlName,
     private ngFormValidatorServiceConfig: NgFormValidatorService
  ) {
    super(vcr, cfr, ctl, ngFormValidatorServiceConfig);
    if(!ctl){
      throw Error('Directive should on formControlName');
    }
  }
}
