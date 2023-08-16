import { Component, Directive, Input, TemplateRef, ContentChild, HostBinding, HostListener } from '@angular/core';

// Directive to add to the parent's button
@Directive({
  // Next is a compound selector -- https://drafts.csswg.org/selectors/#compound --
  // Elemental selector+ Attribute selectors
  // button is an element selector -- https://drafts.csswg.org/selectors/#type-selectors --
  // [] is an attribute selector -- https://drafts.csswg.org/selectors/#attribute-selectors --
  selector: 'button[appExampleZippyToggle]',
})
export class ZippyToggleDirective {
  // Bind the host's "attr.aria-expanded" & "attr.aria-controls" to this component's fields
  @HostBinding('attr.aria-expanded') ariaExpanded = this.zippy.expanded;
  @HostBinding('attr.aria-controls') ariaControls = this.zippy.contentId;

  // Decorator to listen for the DOM event "click", providing this handler method "toggleZippy"
  @HostListener('click') toggleZippy() {
    this.zippy.expanded = !this.zippy.expanded;
  }
  constructor(public zippy: ZippyComponent) {}
}

let nextId = 0;

// #docregion zippycontentdirective
// Directive to add / link to the parent's ng-template
@Directive({
  // [] is an attribute selector -- https://drafts.csswg.org/selectors/#attribute-selectors --
  selector: '[appExampleZippyContent]'
})
export class ZippyContentDirective {
  // TemplateRef    represents the <ng-Template>
  constructor(public templateRef: TemplateRef<unknown>) {}
}
// #enddocregion zippycontentdirective

@Component({
  selector: 'app-example-zippy',
  templateUrl: 'example-zippy.template.html',
})
export class ZippyComponent {
  contentId = `zippy-${nextId++}`;
  @Input() expanded = false;
  // #docregion contentchild

  // @ContentChild    is a property decorator to look the first element / directive matching
  @ContentChild(ZippyContentDirective) content!: ZippyContentDirective;
  // #enddocregion contentchild
}
