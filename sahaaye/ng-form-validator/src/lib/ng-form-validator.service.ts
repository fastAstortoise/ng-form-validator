import {Injectable} from '@angular/core';
import {NgFormValidatorComponent} from './ng-form-validator.component';

export interface INgFormDefaultConfig {
  showErrorsOnLoad: boolean;
  textClass: string;
  iconClass: string;
  component: NgFormValidatorComponent;
}

export const NgFormDefaultConfig = {
  showErrorsOnLoad: false,
  textClass: 'invalid-feedback',
  iconClass: 'fa fa-fw fa-exclamation-circle',
  component: NgFormValidatorComponent,
};

@Injectable()
export class NgFormValidatorService {
  config = NgFormDefaultConfig;
}
