import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {NgFormValidatorComponent} from './ng-form-validator.component';
import {CommonModule} from "@angular/common";
import {NgFormValidatorFgDirective} from "./ng-form-validator-fg.directive";
import {NgFormValidatorDirective} from "./ng-form-validator.directive";
import {NgFormDefaultConfig} from "./ng-form-validator.service";


@NgModule({
  declarations: [
    NgFormValidatorComponent,
    NgFormValidatorDirective,
    NgFormValidatorFgDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgFormValidatorDirective,
    NgFormValidatorFgDirective,
  ]
})
export class NgFormValidatorModule {
  constructor (@Optional() @SkipSelf() parentModule?: NgFormValidatorModule) {
  }

  static forRoot(config: NgFormDefaultConfig): ModuleWithProviders {
    return {
      ngModule: NgFormValidatorModule,
      providers: [
        {provide: NgFormDefaultConfig, useValue: config }
      ]
    };
  }
}
