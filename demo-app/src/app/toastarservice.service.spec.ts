import { TestBed } from '@angular/core/testing';

import {  ToastarService } from './toastarservice.service'

describe('ToastarService', () => {
  let service: ToastarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
})