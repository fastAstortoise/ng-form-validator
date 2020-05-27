import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {NgFormValidatorComponent} from './ng-form-validator.component';
import {CommonModule} from "@angular/common";
import {NgFormValidatorFgDirective} from "./ng-form-validator-fg.directive";
import {NgFormValidatorDirective} from "./ng-form-validator.directive";
import {INgFormValidatorConfig} from "./ng-form-validator.interface";
import {NgFormValidatorServiceConfig} from "./ng-form-validator.service";


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
  ],
  entryComponents: [
    NgFormValidatorComponent
  ]
})
export class NgFormValidatorModule {
  constructor (@Optional() @SkipSelf() parentModule?: NgFormValidatorModule) {
    if (parentModule) {
      throw new Error(
        'NgFormValidatorModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: INgFormValidatorConfig): ModuleWithProviders {
    return {
      ngModule: NgFormValidatorModule,
      providers: [
        {provide: NgFormValidatorServiceConfig, useValue: config }
      ]
    };
  }
}
