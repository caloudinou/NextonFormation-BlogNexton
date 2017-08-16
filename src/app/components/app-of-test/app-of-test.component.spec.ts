import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOfTestComponent } from './app-of-test.component';

describe('AppOfTestComponent', () => {
  let component: AppOfTestComponent;
  let fixture: ComponentFixture<AppOfTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppOfTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOfTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
