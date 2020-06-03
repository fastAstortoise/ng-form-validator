

<h1> <img src="/assets/logo.png" width="70"> @sahaaye/ng-form-validator</h1>

> The form validation library for angular reactive forms.

### Table of Contents
- [Installation](#installation)
- [Usage](#usage)







### Installation

`npm i @sahaaye/ng-form-validator`

### Usage

**1. Import `NgFormValidatorModule` :**

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
