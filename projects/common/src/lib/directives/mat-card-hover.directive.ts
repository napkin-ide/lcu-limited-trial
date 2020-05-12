import { Directive, OnChanges, Input, ElementRef, Renderer2, SimpleChanges, HostListener } from '@angular/core';

@Directive({
  selector: '[lcuMatCardHover]'
})
export class MatCardHoverDirective implements OnChanges {

  // tslint:disable-next-line:no-input-rename
  @Input('default-elevation')
  public DefaultElevation: number;

  // tslint:disable-next-line:no-input-rename
  @Input('raised-elevation')
  public RaisedElevation: number;

  // tslint:disable-next-line:no-input-rename
  @Input('hover-color')
  public HoverColor: string;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.DefaultElevation = 2;
    this.RaisedElevation = 8;
    this.setElevation(this.DefaultElevation);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.setElevation(this.DefaultElevation);
  }

  @HostListener('mouseenter')
  public onMouseEnter(): void {
    this.setElevation(this.RaisedElevation);
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.setElevation(this.DefaultElevation);
  }

  protected setElevation(amount: number): void {
    // remove all elevation classes
    const classesToRemove = Array.from((this.element.nativeElement as HTMLElement).classList)
    .filter(c => c.startsWith('mat-elevation-z'));
    classesToRemove.forEach((c) => {
      this.renderer.removeClass(this.element.nativeElement, c);
    });

    // add the given elevation class
    const newClass = `mat-elevation-z${amount}`;
    this.renderer.addClass(this.element.nativeElement, newClass);
  }
}
