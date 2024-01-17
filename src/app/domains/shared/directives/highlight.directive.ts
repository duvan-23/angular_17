import { Directive, ElementRef, Input, inject } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {

  element = inject(ElementRef);
  @Input() highlight = '';
  constructor() { }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = this.highlight || 'yellow';
  }

}
