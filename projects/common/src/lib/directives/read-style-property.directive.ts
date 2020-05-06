import { Directive, ElementRef } from '@angular/core';

/**
 * Read style property of current element
 */

// https://stackoverflow.com/questions/40418804/access-sass-values-colors-from-variables-scss-in-typescript-angular2-ionic2

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[lcu-read-style-property]'
})
export class ReadStylePropertyDirective {

  protected element: any;

  constructor(protected elementRef: ElementRef) { }

  public ReadStyleProperty(name: string): string {
    return window.getComputedStyle(this.element).getPropertyValue(name);
  }
}
