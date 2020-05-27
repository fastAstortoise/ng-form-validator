import { TestBed } from '@angular/core/testing';

import { NgFormValidatorService } from './ng-form-validator.service';

describe('NgFormValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgFormValidatorService = TestBed.get(NgFormValidatorService);
    expect(service).toBeTruthy();
  });
});
