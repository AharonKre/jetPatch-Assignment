import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[ellipsisOverflow]'
})
export class EllipsisOverflowDirective {

    constructor(
        private el: ElementRef, 
        private renderer: Renderer2) {
        this.renderer.addClass(this.el.nativeElement, 'ellipsis-overflow');
    }

    @HostListener('mouseover')
    onMouseOver() {
        if (this.el.nativeElement.scrollWidth > this.el.nativeElement.offsetWidth)
            this.renderer.setAttribute(this.el.nativeElement, 'title', this.el.nativeElement.innerText.trim());
        else
            this.renderer.setAttribute(this.el.nativeElement, 'title', '');
    }
}
