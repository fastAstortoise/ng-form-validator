<h1> <img src="/assets/logo.png" width="70"> @sahaaye/ng-form-validator</h1>

> The form validation library for angular reactive forms.

### Table of Contents
- [Installation](#installation)

- [Usage](#usage)
  - [Impoting Module](#1-import-ngformvalidatormodule)
  - [Creating Reactive Form](#2-creating-reactive-form)
  - [Using Directives](#3-using-directives-in-template)
  
- [Advanced Usage](#advanced-usage)  
  - [Custom Component](#1-creating-custom-component)
  - [Setting App Module](#2-setting-up-in-app-module)

- [Configuration](#configuration-options)

### Installation

`npm i @sahaaye/ng-form-validator`

### Usage

#### **1. Import `NgFormValidatorModule`:**

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

### Advanced Usage

#### **1. Creating custom component**

You can also create you own template to show the validations. All you have to do is create new component and extend from `NgFormValidatorComponent`. Here you can use exposed variables like `textClass, iconClass, isDirtyAndInvalid` or you can just skip them but make sure you use `message` which will container the error message and `isDirtyAndInvalid` which as name suggests  
show template when its dirty and invalid. We can override dirty in the config part which we will see later.

```ts
// my-custom-component.ts
import { NgFormValidatorComponent } from '@sahaaye/ng-form-validator';

@Component({
  selector: 'coast-coast-validation-tpl',
  templateUrl: `
  <div class="invalid-feedback" [ngClass]="textClass" *ngIf="isDirtyAndInvalid">
    <i  [ngClass]="iconClass"></i>
  {{ message}}</div>
  `,
})
export class MyCustomComponent extends NgFormValidatorComponent {
}
```
#### **2. Setting Up in App Module**

In your app module you will just add component in `forRoot()` of `NgFormValidatorModule`.

```ts
@NgModule({
    exports: [
        CommonModule,
        ReactiveFormsModule,
        NgFormValidatorModule.forRoot({
         component: MyCustomComponent,
        }),
    ]
})
export class AppModule { }
```

### Configuration options

As shown above you can configure you custom component. You can also take advantage of other options to override default values.
 - `textClass` - to change the style of the message and icon. `Default: invalid-feedback`
 - `iconClass` - to prepend icon to show before the message. `Default: fa fa-fw fa-exclamation-circle`
 - `component` - to show you custom component. `Default: NgFormValidatorComponent`
 - `showErrorsOnLoad` - to show errors on load. `Default: false`


```ts
@NgModule({
    exports: [
        CommonModule,
        ReactiveFormsModule,
        NgFormValidatorModule.forRoot({
         component: NgFormValidatorComponent,
         showErrorsOnLoad: false;
         textClass: 'invalid-feedback';
         iconClass: 'fa fa-fw fa-exclamation-circle';
        }),
    ]
})
export class AppModule { }
```

