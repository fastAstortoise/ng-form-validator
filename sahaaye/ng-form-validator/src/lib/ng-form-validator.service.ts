import {Injectable, Optional} from '@angular/core';
import {NgFormValidatorComponent} from './ng-form-validator.component';

export class NgFormDefaultConfig  {
  showErrorsOnLoad ? = false;
  textClass ? = 'invalid-feedback';
  iconClass ? = 'fa fa-fw fa-exclamation-circle';
  component ? = NgFormValidatorComponent;
}

@Injectable({
  providedIn: 'root'
})
export class NgFormValidatorService {
  config: NgFormDefaultConfig;

  constructor(@Optional() config: NgFormDefaultConfig) {
    this.config = new NgFormDefaultConfig();
    if (config) {
      const originalConfig = new NgFormDefaultConfig();
      this.config = {
        ...originalConfig,
        ...config
      };
    }
  }
}
