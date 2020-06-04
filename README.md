

<h1> <img src="/assets/Untitled.png" width="70"> @sahaaye/ng-form-validator</h1>

> The form validation library for angular reactive forms.

### Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  -[Impoting Module](#1-import-ngformvalidatormodule)
  -[Creating Reactive Form](#2-creating-reactive-form)
  -[Using Directives](#3-using-directives-in-template)




### Installation

`npm i @sahaaye/ng-form-validator`

### Usage

#### **1. Import `NgFormValidatorModule` :**

You can use form validator by importing it in you app module of you Angular project. You have to import `NgFormValidatorModule.forRoot()` in the root of NgModule imports to initialize default configuration.

By importing `forRoot()` you are configuring and intializing the service with default values or you can also provide custom configuration which we will look at later in this `README.md`.

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {NgFormValidatorModule} from '@sahaaye/ng-form-validator';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        NgFormValidatorModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```
#### Shared Module

If you want to use form validator in multiple feature modules, you can do so by exporting it in a shared `SharedModule`.

> Note: **DO NOT** call `forRoot()` in child/feature modules otherwise you might get different instance of service in your    injector tree and `ngFormValidator` might end up behaving differently.

```ts
@NgModule({
    exports: [
        CommonModule,
        ReactiveFormsModule,
        NgFormValidatorModule
        .......
        ......
        ...
    ]
})
export class SharedModule { }
```

#### **2. Creating Reactive Form**

We will use `FormBuilder` to create reactive form. You can use what ever the way you use to create forms. Make sure for validators you import them from `@sahaaye/ng-form-validator` instead of `@angular/forms`. `ShValidators` from `@sahaaye/ng-form-validator` are the clone of `Validators` from `@angular/forms`. We are just adding additional `msg` property to show that message when error occurs.

```ts
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ShValidators } from '@sahaaye/ng-form-validator';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html'
})
export class ProfileEditorComponent {
  profileForm = this.fb.group({
    firstName: ['', [ShValidators.required]],
    lastName: [''],
    email: ['', [ShValidators.email]]
  }, {
  validators: [YourCustomValidator]
  });

  constructor(private fb: FormBuilder) { }
}
```
#### **3. Using directives in template**
and in the template you need to add directive `shFcValidator` for the form controls and `shFgValidator` in case you have validations on the group.

> NOTE: When using shFgValidator make sure you include inside the `[formGroup], [formGroupName] or [formArrayName]` as it looks for parent group or array.

```html
//profile-editor.component.html
<form [formGroup]="profileForm">
  <div shFgValidation></div>
  <label>
    First Name:
    <input type="text" shFcValidation formControlName="firstName">
  </label>

  <label>
    Last Name:
    <input type="text" formControlName="lastName">
  </label>

  <label>
    Email:
    <input type="email" shFcValidation formControlName="email">
  </label>
</form>
```

That's all. Only extra thing you have to add is directive and rest will be taken care of. These directives inject the instance of `FormArray` or `FormControl` based on which directive you use.

