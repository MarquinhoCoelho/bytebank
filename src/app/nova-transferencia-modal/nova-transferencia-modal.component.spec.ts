import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaTransferenciaModalComponent } from './nova-transferencia-modal.component';

describe('NovaTransferenciaModalComponent', () => {
  let component: NovaTransferenciaModalComponent;
  let fixture: ComponentFixture<NovaTransferenciaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaTransferenciaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaTransferenciaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
