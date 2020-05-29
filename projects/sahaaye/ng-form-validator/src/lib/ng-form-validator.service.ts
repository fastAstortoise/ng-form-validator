import {Injectable, Optional} from '@angular/core';
import {NgFormValidatorComponent} from "./ng-form-validator.component";

export class NgFormDefaultConfig  {
  showErrorsOnLoad = false;
  textClass = 'invalid-feedback';
  iconClass = 'fa fa-fw fa-exclamation-circle';
  component:any = NgFormValidatorComponent
}

@Injectable({
  providedIn: 'root'
})
export class NgFormValidatorServiceConfig {
  config: NgFormDefaultConfig;

  constructor(@Optional() config?: NgFormDefaultConfig) {
    if(config) {
      const originalConfig = new NgFormDefaultConfig();
      this.config = {
        ...originalConfig,
        ...config
      };
    }
  }
}
