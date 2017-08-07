import { TestBed, async } from '@angular/core/testing';

import { AppRootComponent } from './app-root.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppRootComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppRootComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as name 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppRootComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.name).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppRootComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!!');
  }));


  it(`should render node list in ul have as elements as links array`, async(() => {
    const fixture = TestBed.createComponent(AppRootComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.links li').length).toEqual(app.links.length);
  }));

  it(`should have each li element innerHTML and url equals to one app.links.title and app.links.url`, async(() => {
    const fixture = TestBed.createComponent(AppRootComponent);
    const app = fixture.debugElement.componentInstance;
    // app.links.length; //valeur longueur tableau voulu

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    const resultQuery = compiled.querySelectorAll('.links li');
    /**
     * { isTrue : boolean, erreurValue: [{"erreur1": {nodeValue: string, numberLinks: string }}]}
     */
     let ObjResultTest = Array.prototype.slice.call(resultQuery)
        .reduce(( final, prop, index, array) => {

            let props = { 'url': prop.querySelector('a').getAttribute('href') , 'title': prop.querySelector('a').innerHTML };

            if ( app.links[index].url !== props.url || app.links[index].title !== props.title ) {

              final['erreurValue']= { 'index': index, 'ErreurUrl' : [ app.links[index].url, props.url], 'ErreurTitle' : [app.links[index].title, props.title] };
              final['isTrue'] = false;

            }else if(final['isTrue'] === null) {

              final['isTrue'] = true;

            }

            return final;
          },
          {isTrue: null, erreurValue: []}
        );

    console.error('erreurValue', ObjResultTest.erreurValue);
    expect(ObjResultTest.isTrue).toEqual(true);
  }));

});
