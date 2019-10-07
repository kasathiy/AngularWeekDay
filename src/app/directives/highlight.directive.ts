import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  elementRef: ElementRef;
  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  @HostBinding('style.backgroundColor') color;
  @HostBinding('value') value;

  @HostListener("click") onClick() {
    alert("You clicked on the element");
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.color = "yellow";
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.color = "red";
  }




  ngOnInit() {
    this.color = "red";
    this.value = "Hello2222";
    // console.log("elementRef", this.elementRef);
    // if (this.elementRef.nativeElement.id == "input1") {
    //   this.elementRef.nativeElement.style.backgroundColor = "red";
    // } else {
    //   this.elementRef.nativeElement.style.backgroundColor = "yellow";
    // }
  }
}
