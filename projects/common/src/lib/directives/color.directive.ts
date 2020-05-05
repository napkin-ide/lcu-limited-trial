import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

// type ColorClasses = 'mat-primary' | 'mat-accent' | 'mat-warn' | 'mat-success' | undefined;
type ColorClasses = 'global-primary' | 'global-accent' | 'global-warn';

@Directive({
  selector: '[lcuColor]'
})
export class ColorDirective {

// https://dev.to/martinmcwhorter/extending-angular-material-theme-system-n50

  @Input() set lcuColor(val: ThemePalette) {
    this.renderer.addClass(this.element.nativeElement, `global-${val}`);
    // this.renderer.addClass(this.element.nativeElement, value);
  }

  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2
  ) { }

}
