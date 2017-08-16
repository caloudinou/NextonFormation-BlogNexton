import { async, ComponentFixture, TestBed } from '@angular/core/testing';
/**
 * dependencies test routes
 */
import { RouterTestingModule } from '@angular/router/testing';

import { AppMainComponent } from './app-main.component';
const  APP_BASE_HREF = '/';

describe('AppMainComponent', () => {
  let component: AppMainComponent;
  let fixture: ComponentFixture<AppMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ RouterTestingModule ],
      declarations: [ AppMainComponent ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created with router-outlet', () => {
    expect(component).toBeTruthy();
  });


});
