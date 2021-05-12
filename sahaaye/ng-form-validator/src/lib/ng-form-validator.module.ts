import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {NgFormValidatorComponent} from './ng-form-validator.component';
import {CommonModule} from '@angular/common';
import {NgFormFgValidatorDirective} from './ng-form-fg-validator.directive';
import {NgFormFcValidatorDirective} from './ng-form-fc-validator.directive';
import {NgFormDefaultConfig} from './ng-form-validator.service';


@NgModule({
  declarations: [
    NgFormValidatorComponent,
    NgFormFcValidatorDirective,
    NgFormFgValidatorDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgFormFcValidatorDirective,
    NgFormFgValidatorDirective,
  ]
})
export class NgFormValidatorModule {
  constructor(@Optional() @SkipSelf() parentModule?: NgFormValidatorModule) {
  }

  static forRoot(config: NgFormDefaultConfig = {}): ModuleWithProviders<NgFormValidatorModule> {
    return {
      ngModule: NgFormValidatorModule,
      providers: [
        {provide: NgFormDefaultConfig, useValue: config }
      ]
    };
  }
}
