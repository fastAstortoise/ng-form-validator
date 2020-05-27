import { ComponentFactoryResolver, Input, OnChanges, OnInit, SimpleChanges, ViewContainerRef, Directive } from '@angular/core';
import {FormControlName, FormGroupDirective} from '@angular/forms';
import {NgFormValidatorComponent} from "./ng-form-validator.component";

@Directive()
export class NgFormValidatorBaseDirective implements OnInit, OnChanges {
  @Input() errorOnTouched = true;
  private compRef;
  private readonly _vc: ViewContainerRef;
  private readonly _cfr: ComponentFactoryResolver;
  private readonly _ctl: FormControlName | FormGroupDirective;

  constructor(
    vc: ViewContainerRef,
    componentFactoryResolver: ComponentFactoryResolver,
    control: FormGroupDirective | FormControlName
  ) {
    this._vc = vc;
    this._cfr = componentFactoryResolver;
    this._ctl = control;
  }

  ngOnInit(): void {
    this.createComp(this._vc);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const {currentValue} = changes;
    if (!this.compRef) return;
    this.compRef.instance.showOnTouched = currentValue;
  }

  createComp(vc: ViewContainerRef) {
    const componentFactory = this._cfr
      .resolveComponentFactory(NgFormValidatorComponent);
    this.compRef = vc.createComponent<NgFormValidatorComponent>(componentFactory);
    this.compRef.instance.control = this._ctl;
    this.compRef.instance.showOnTouched = this.errorOnTouched;
  }
}
