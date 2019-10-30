import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalInserirPage } from './profissional-inserir.page';

describe('ProfissionalInserirPage', () => {
  let component: ProfissionalInserirPage;
  let fixture: ComponentFixture<ProfissionalInserirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfissionalInserirPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionalInserirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
