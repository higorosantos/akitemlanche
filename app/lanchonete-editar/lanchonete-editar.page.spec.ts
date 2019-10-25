import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanchoneteEditarPage } from './lanchonete-editar.page';

describe('LanchoneteEditarPage', () => {
  let component: LanchoneteEditarPage;
  let fixture: ComponentFixture<LanchoneteEditarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanchoneteEditarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanchoneteEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
