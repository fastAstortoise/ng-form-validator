import {
  Directive,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[coastValidationHost]'
})
export class NgFormValidatorHostDirective {
     constructor(public _vc: ViewContainerRef) {
     }
}
