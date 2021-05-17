import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgFormValidatorComponent } from './ng-form-validator.component';

describe('NgFormValidatorComponent', () => {
  let component: NgFormValidatorComponent;
  let fixture: ComponentFixture<NgFormValidatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFormValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFormValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
