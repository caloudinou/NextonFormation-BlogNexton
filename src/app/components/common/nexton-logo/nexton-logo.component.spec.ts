import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextonLogoComponent } from './nexton-logo.component';

describe('NextonLogoComponent', () => {
  let component: NextonLogoComponent;
  let fixture: ComponentFixture<NextonLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextonLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextonLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
