import {AbstractControl, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

// @dynamic
export class ShValidators {
  static min(min: number): ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const minVal = Validators.min(min).apply(this, control);
      return minVal && {...minVal, msg: `Minimum allowed value ${min} actual ${control.value}.`};
    };
  }

  static max(max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const maxVal = Validators.max(max)(control);
      return maxVal && {...maxVal, msg: `Maximum allowed value ${max} actual ${control.value}.`};
    };
  }

  static required(control: AbstractControl): ValidationErrors | null {
    const requiredVal = Validators.required(control);
    return requiredVal && {...requiredVal, msg: 'The field is required.'};
  }

  static requiredTrue(control: AbstractControl): ValidationErrors | null {
    const requiredTrueVal = Validators.requiredTrue(control);
    return requiredTrueVal && {...requiredTrueVal, msg: 'The field is required.'};
  }

  static email(control: AbstractControl): ValidationErrors | null {
    const emailVal = Validators.email(control);
    return emailVal && {...emailVal, msg: 'Invalid Email format.'};
  }

  static minLength(minLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const minLengthVal = Validators.minLength(minLength)(control);
      return minLengthVal && {
        ...minLengthVal,
        msg: `Minimum required length ${minLength} actual ${control.value.length}`
      };
    };
  }

  static maxLength(maxLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const maxLengthVal = Validators.maxLength(maxLength)(control);
      return maxLengthVal && {
        ...maxLengthVal,
        msg: `Maximum required length ${maxLength} actual ${control.value.length}`
      };
    };
  }

  static pattern(pattern: string | RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const patternVal = Validators.pattern(pattern)(control);
      return patternVal && {...patternVal, msg: `Required pattern ${pattern} actual string ${control.value}`};
    };
  }
}
