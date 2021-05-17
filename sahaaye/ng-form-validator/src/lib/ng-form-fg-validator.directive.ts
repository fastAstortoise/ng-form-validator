import {ComponentFactoryResolver, Directive, ViewContainerRef} from '@angular/core';
import {NgFormValidatorBaseDirective} from './ng-form-validator-base.directive';
import {ControlContainer} from '@angular/forms';
import {NgFormValidatorService} from './ng-form-validator.service';

@Directive({
  selector: '[shFgValidation]'
})
export class NgFormFgValidatorDirective extends NgFormValidatorBaseDirective {
  constructor(
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
    private cc: ControlContainer,
    private ngFormValidatorServiceConfig: NgFormValidatorService) {
    super(vcr, cfr, cc, ngFormValidatorServiceConfig);
  }
}
