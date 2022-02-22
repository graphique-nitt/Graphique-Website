import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyCertDirectComponent } from './verify-cert-direct.component';

describe('VerifyCertDirectComponent', () => {
  let component: VerifyCertDirectComponent;
  let fixture: ComponentFixture<VerifyCertDirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyCertDirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyCertDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
