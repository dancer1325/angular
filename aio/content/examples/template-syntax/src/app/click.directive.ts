/* eslint-disable @angular-eslint/directive-class-suffix,
                  @angular-eslint/directive-selector,
                  @angular-eslint/no-output-rename,
                  @angular-eslint/no-outputs-metadata-property */
import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({selector: '[myClick]'})
export class ClickDirective {
  @Output('myClick') clicks = new EventEmitter<string>(); //  @Output(alias) propertyName = ...
  @Output('clickNoMatchingSelector') clickNoMatchingSelector = new EventEmitter<string>(); //  @Output(alias) propertyName = ...

  toggle = false;

  // ElementRef   makes reference to the element in which this directive is added
  constructor(el: ElementRef) {
    el.nativeElement
      .addEventListener('click', (event: Event) => {
        this.toggle = !this.toggle;
        this.clicks.emit(this.toggle ? 'ClickDirective - myClick' : '');
        this.clickNoMatchingSelector.emit(this.toggle ? 'ClickDirective - clickNoMatchingSelector' : '');
      });
  }
}

@Directive({
  selector: '[myClick2]',
  outputs: ['clicks:myClick']  // propertyName:alias
  // myClick (The outputs' alias) === ClickDirective's output === ClickDirective's selector !!!!
  // If you TRY to add this directive via output's alias -> ClickDirective will be added in fact, not
  // ClickDirective2
})
export class ClickDirective2 {
  clicks = new EventEmitter<string>();
  toggle = false;

  constructor(el: ElementRef) {
    el.nativeElement
      .addEventListener('click', (event: Event) => {
        this.toggle = !this.toggle;
        this.clicks.emit(this.toggle ? 'Click2!' : '');
      });
  }
}
