import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
	selector: '[highlight]'
})
export class HighLightDirective {
	constructor(private element: ElementRef) {
	}

	@HostListener('mouseenter') onMouseEnter() {
		this.setAppearance('#aaaaaa', 'pointer');
	}
	
	@HostListener('mouseleave') onMouseLeave() {
		this.setAppearance(null, null);
	}
	
	setAppearance(color: string, cursor: string) {
		let style = this.element.nativeElement.style;
		style.backgroundColor = color;
		style.cursor = cursor;
	}
}