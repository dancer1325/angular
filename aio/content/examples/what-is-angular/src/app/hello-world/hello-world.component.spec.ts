import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelloWorldComponent } from './hello-world.component';

describe('HelloWorldComponent', () => {
  let component: HelloWorldComponent;
  let fixture: ComponentFixture<HelloWorldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelloWorldComponent]
    });

    fixture = TestBed.createComponent(HelloWorldComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title in an h2 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Hello World');
  });

  it('should render a paragraph with the correct message', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('This is my first component!');
  });
});
