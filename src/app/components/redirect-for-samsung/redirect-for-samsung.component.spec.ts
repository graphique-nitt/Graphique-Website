import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectForSamsungComponent } from './redirect-for-samsung.component';

describe('RedirectForSamsungComponent', () => {
  let component: RedirectForSamsungComponent;
  let fixture: ComponentFixture<RedirectForSamsungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectForSamsungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectForSamsungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
