import { ComponentFactoryResolver, Directive, ViewContainerRef } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { NgFormValidatorBaseDirective } from './ng-form-validator-base.directive';

@Directive({
  selector: "[nfvFcValidation]",
})
export class NgFormValidatorDirective extends NgFormValidatorBaseDirective {
  constructor(
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
    private ctl: FormControlName,
  ) {
    super(vcr, cfr, ctl);
    if(!ctl){
      throw Error('Directive should on formControlName');
    }
  }
}
