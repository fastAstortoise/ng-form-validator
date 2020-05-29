import { ComponentFactoryResolver, Input, OnChanges, OnInit, SimpleChanges, ViewContainerRef, Directive } from '@angular/core';
import {FormControlName, FormGroupDirective} from '@angular/forms';
import {NgFormValidatorComponent} from "./ng-form-validator.component";
import {NgFormValidatorServiceConfig} from "./ng-form-validator.service";

@Directive()
export class NgFormValidatorBaseDirective implements OnInit, OnChanges {
  @Input() errorOnTouched = true;
  private compRef;
  private readonly _vc: ViewContainerRef;
  private readonly _cfr: ComponentFactoryResolver;
  private readonly _ctl: FormControlName | FormGroupDirective;
  private readonly _validatorConfig: NgFormValidatorServiceConfig;

  constructor(
    vc: ViewContainerRef,
    componentFactoryResolver: ComponentFactoryResolver,
    control: FormGroupDirective | FormControlName,
    validatorConfig: NgFormValidatorServiceConfig
  ) {
    this._vc = vc;
    this._cfr = componentFactoryResolver;
    this._ctl = control;
    this._validatorConfig = validatorConfig;
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
      .resolveComponentFactory(this._validatorConfig.config.component);
    this.compRef = vc.createComponent<any>(componentFactory);
    this.compRef.instance.control = this._ctl;
    this.compRef.instance.showOnTouched = this._validatorConfig.config.showErrorsOnLoad;
    this.compRef.instance.textClass = this._validatorConfig.config.textClass;
    this.compRef.instance.iconClass = this._validatorConfig.config.iconClass;
  }
}
