import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

/**
 * SCSS class types
 */
type ColorClasses = 'fathym-primary' | 'fathym-accent' | 'fathym-warn';

@Directive({
  selector: '[lcuColor]'
})

export class ColorDirective {

/**
 * Set the current theme class to the element
 */
  @Input() set lcuColor(val: ColorClasses) {
    this.renderer.addClass(this.element.nativeElement, `fathym-${val}`);

    // this.readProperty('background-color');
  }

  protected readProperty(property: string): void {
    console.log('element', window.getComputedStyle(this.element.nativeElement).getPropertyValue(property));
  }

  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2
  ) { }

}
