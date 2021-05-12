import { ComponentFactoryResolver, Directive, ViewContainerRef } from '@angular/core';
import { NgFormValidatorBaseDirective } from './ng-form-validator-base.directive';
import { FormGroupDirective } from '@angular/forms';
import {NgFormValidatorService} from './ng-form-validator.service';

@Directive({
  selector: '[shFgValidation]'
})
export class NgFormFgValidatorDirective extends NgFormValidatorBaseDirective {
  constructor(
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
    private ctl: FormGroupDirective,
    private ngFormValidatorServiceConfig: NgFormValidatorService) {
    super(vcr, cfr, ctl, ngFormValidatorServiceConfig);
    if (!ctl){
      throw Error('Directive should be contained in formGroup/FormArray');
    }
  }
}
