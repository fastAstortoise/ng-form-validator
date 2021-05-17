import {Component} from '@angular/core';
import {AppService} from './app.service';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'sh-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'sh-form-app';
  fg = this.appFormService.profileForm();

  constructor(
    private readonly appFormService: AppService
  ) {}

  get addressesFa() {
    return this.fg.get('addresses') as FormArray;
  }

  addAddress() {
    this.addressesFa.push(this.appFormService.addressForm());
  }

  removeAddress(i) {
    this.addressesFa.removeAt(i);
  }

  submit() {
    if (this.fg.invalid) {
      this.fg.markAllAsTouched();
    } else {
      console.log('save successful');
    }
  }
}
