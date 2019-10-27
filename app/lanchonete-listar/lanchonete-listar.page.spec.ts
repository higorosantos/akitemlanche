import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanchoneteListarPage } from './lanchonete-listar.page';

describe('LanchoneteListarPage', () => {
  let component: LanchoneteListarPage;
  let fixture: ComponentFixture<LanchoneteListarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanchoneteListarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanchoneteListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
