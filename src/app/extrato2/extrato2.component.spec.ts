import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Extrato2Component } from './extrato2.component';

describe('Extrato2Component', () => {
  let component: Extrato2Component;
  let fixture: ComponentFixture<Extrato2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Extrato2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Extrato2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
