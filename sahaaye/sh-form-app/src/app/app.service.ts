import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors} from '@angular/forms';
import {ShValidators} from '@sahaaye/ng-form-validator';

function isEmptyInputValue(value: any): boolean {
  // we don't check for string here so it also works with arrays
  return value == null || value.length === 0;
}

function doesPassMatch(fg: FormGroup): ValidationErrors | null {
  const actual = fg.get('actual');
  const confirm = fg.get('confirm');
  if (isEmptyInputValue(actual) && isEmptyInputValue(confirm)) {
    return null;
  }
  return actual.value === confirm.value ? null : {
    msg: `Password doesn't match`
  };
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private fb: FormBuilder) {
  }

  profileForm() {
    return this.fb.group({
      firstName: ['', [ShValidators.required]],
      lastName: ['', [ShValidators.required]],
      email: ['', [ShValidators.email]],
      password: this.fb.group({
        actual: ['', [ShValidators.required]],
        confirm: ['', [ShValidators.required]]
      }, {
        validators: [ShValidators.required, doesPassMatch]
      }),
      addresses: this.fb.array([])
    });
  }

  addressForm() {
    return this.fb.group({
      streetNo: ['', [ShValidators.required]],
      streetName: ['', [ShValidators.required]],
      addressLine1: ['', [ShValidators.required]],
      addressLine2: [],
      postalCode: ['', [ShValidators.required]],
      city: ['', [ShValidators.required]],
      state: ['', [ShValidators.required]],
      country: ['', [ShValidators.required]]
    });
  }
}
