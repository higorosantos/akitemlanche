import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlanchonetePage } from './alanchonete.page';

describe('AlanchonetePage', () => {
  let component: AlanchonetePage;
  let fixture: ComponentFixture<AlanchonetePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlanchonetePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlanchonetePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
