import {ComponentFactoryResolver, Directive, Input, OnChanges, OnInit, SimpleChanges, ViewContainerRef} from '@angular/core';
import {ControlContainer} from '@angular/forms';
import {NgFormValidatorService} from './ng-form-validator.service';

// @ts-ignore
@Directive()
export class NgFormValidatorBaseDirective implements OnInit, OnChanges {
  @Input() showErrorsOnLoad;
  protected compRef;
  private readonly _vc: ViewContainerRef;
  private readonly _cfr: ComponentFactoryResolver;
  private readonly _cc: ControlContainer;
  private readonly _validatorConfig: NgFormValidatorService;

  constructor(
    vc: ViewContainerRef,
    componentFactoryResolver: ComponentFactoryResolver,
    cc: ControlContainer,
    validatorConfig: NgFormValidatorService
  ) {
    if (!cc) {
      throw Error('Directive should be user with FormGroup/FormArray/FormControl');
    }
    this._vc = vc;
    this._cfr = componentFactoryResolver;
    this._cc = cc;
    this._validatorConfig = validatorConfig;
  }

  ngOnInit(): void {
    this.createComp(this._vc);
  }

  ngOnChanges(changes: SimpleChanges) {
    const {currentValue, previousValue} = changes.showErrorsOnLoad;
    if (!this.compRef) {
      return;
    }
    if (currentValue !== previousValue) {
      this.compRef.instance.showOnLoad = currentValue;
    }
  }

  createComp(vc: ViewContainerRef) {
    const componentFactory = this._cfr
      .resolveComponentFactory(this._validatorConfig.config.component);
    this.compRef = vc.createComponent<any>(componentFactory);
    this.compRef.instance.showOnLoad = this.showErrorsOnLoad ?? this._validatorConfig.config.showErrorsOnLoad;
    this.compRef.instance.textClass = this._validatorConfig.config.textClass;
    this.compRef.instance.control = this._cc;
    this.compRef.instance.iconClass = this._validatorConfig.config.iconClass;
  }
}
