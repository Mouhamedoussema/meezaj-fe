import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[appReveal]', standalone: true })
export class RevealDirective implements OnInit {
  @Input('appReveal') direction: '' | 'left' | 'right' | 'fade' = '';
  @Input() delay = 0;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const el: HTMLElement = this.el.nativeElement;
    el.classList.add('reveal', `reveal-${this.direction || 'up'}`);
    if (this.delay) el.style.transitionDelay = `${this.delay}ms`;

    new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    ).observe(el);
  }
}
