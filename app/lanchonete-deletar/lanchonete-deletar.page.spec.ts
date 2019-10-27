import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanchoneteDeletarPage } from './lanchonete-deletar.page';

describe('LanchoneteDeletarPage', () => {
  let component: LanchoneteDeletarPage;
  let fixture: ComponentFixture<LanchoneteDeletarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanchoneteDeletarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanchoneteDeletarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
