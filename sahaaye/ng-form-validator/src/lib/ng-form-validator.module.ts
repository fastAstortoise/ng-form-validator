import {ModuleWithProviders, NgModule} from '@angular/core';
import {NgFormValidatorComponent} from './ng-form-validator.component';
import {CommonModule} from '@angular/common';
import {NgFormFgValidatorDirective} from './ng-form-fg-validator.directive';
import {NgFormFcValidatorDirective} from './ng-form-fc-validator.directive';
import {INgFormDefaultConfig, NgFormDefaultConfig, NgFormValidatorService} from './ng-form-validator.service';


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
  static forRoot(config: Partial<INgFormDefaultConfig> = {}): ModuleWithProviders<NgFormValidatorModule> {
    return {
      ngModule: NgFormValidatorModule,
      providers: [
        {
          provide: NgFormValidatorService, useValue: {
            config: {
              ...NgFormDefaultConfig,
              ...config
            }
          }
        }
      ]
    };
  }
}
