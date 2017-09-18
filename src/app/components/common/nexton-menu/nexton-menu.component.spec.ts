import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextonMenuComponent } from './nexton-menu.component';

describe('NextonMenuComponent', () => {
  let component: NextonMenuComponent;
  let fixture: ComponentFixture<NextonMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextonMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
