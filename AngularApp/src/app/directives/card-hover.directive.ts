import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  //   selector: '.ccCardHover',
  selector: '[ccCardHover]',
})
export class CardHoverDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    elementRef.nativeElement.style.backgroundColor = "gray";

    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'green'
    // );
  }
}
