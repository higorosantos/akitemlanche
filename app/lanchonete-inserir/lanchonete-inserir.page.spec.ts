import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanchoneteInserirPage } from './lanchonete-inserir.page';

describe('LanchoneteInserirPage', () => {
  let component: LanchoneteInserirPage;
  let fixture: ComponentFixture<LanchoneteInserirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanchoneteInserirPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanchoneteInserirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
