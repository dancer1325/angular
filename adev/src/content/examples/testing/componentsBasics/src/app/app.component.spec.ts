import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {      //  recommended to call TestBed's methods
    await TestBed.configureTestingModule({  //  .configureTestingModule   required to configure the testing module's configuration
      imports: [AppComponent],
    }).compileComponents();       //  .compileComponents()      required because  AppComponent uses `templateUrl` & `styleUrl`
  });

  it('should create the AppComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'componentsBasics' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('componentsBasics');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();  // initialize the AppComponent
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, componentsBasics');
  });

  it('should bind AppComponent\'s title to h1', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();  // initialize the AppComponent

    fixture.componentInstance.title = "Bye"
    fixture.detectChanges();        // trigger a change detection cycle | AFTER test code / change component's data bound property
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Bye');
  });
});
