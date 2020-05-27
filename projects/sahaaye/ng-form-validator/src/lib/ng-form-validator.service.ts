import {Injectable, Optional} from '@angular/core';
import {INgFormValidatorConfig} from "./ng-form-validator.interface";
import {BehaviorSubject} from "rxjs";

class NgFormDefaultConfig implements INgFormValidatorConfig {
  showErrorsOnLoad = false;
}

@Injectable({
  providedIn: 'root'
})
export class NgFormValidatorServiceConfig {

  showErrorsOnLoad = new BehaviorSubject(false);

  constructor(@Optional() config?: NgFormDefaultConfig) {
    if(config) {
      this.showErrorsOnLoad.next(config.showErrorsOnLoad);
    }
  }
}
