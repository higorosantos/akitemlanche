import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaduserPage } from './caduser.page';

describe('CaduserPage', () => {
  let component: CaduserPage;
  let fixture: ComponentFixture<CaduserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaduserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaduserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
