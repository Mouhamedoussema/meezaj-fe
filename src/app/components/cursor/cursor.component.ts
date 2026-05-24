import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cursor',
  standalone: true,
  template: `<div #dot class="cursor-dot"></div><div #ring class="cursor-ring"></div>`,
  styles: [`
    .cursor-dot {
      position: fixed; top: 0; left: 0;
      width: 6px; height: 6px;
      background: var(--color-black);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-100px, -100px);
      will-change: transform;
    }
    .cursor-ring {
      position: fixed; top: 0; left: 0;
      width: 30px; height: 30px;
      border: 1.5px solid rgba(26,26,26,0.45);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      transform: translate(-100px, -100px);
      transition: transform 0.13s ease, width 0.25s ease, height 0.25s ease, border-color 0.25s ease, opacity 0.25s ease;
      will-change: transform;
    }
    .cursor-ring.expand {
      width: 50px; height: 50px;
      border-color: var(--color-black);
    }
    .cursor-dot.hidden { opacity: 0; }
  `]
})
export class CursorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('dot') dotRef!: ElementRef<HTMLElement>;
  @ViewChild('ring') ringRef!: ElementRef<HTMLElement>;

  private moveHandler = (e: MouseEvent) => {
    this.dotRef.nativeElement.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
    this.ringRef.nativeElement.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
  };

  private overHandler = (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest('a, button, [routerLink]')) {
      this.ringRef.nativeElement.classList.add('expand');
      this.dotRef.nativeElement.classList.add('hidden');
    }
  };

  private outHandler = (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest('a, button, [routerLink]')) {
      this.ringRef.nativeElement.classList.remove('expand');
      this.dotRef.nativeElement.classList.remove('hidden');
    }
  };

  ngAfterViewInit(): void {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    document.body.classList.add('custom-cursor');
    document.addEventListener('mousemove', this.moveHandler, { passive: true });
    document.addEventListener('mouseover', this.overHandler, { passive: true });
    document.addEventListener('mouseout', this.outHandler, { passive: true });
  }

  ngOnDestroy(): void {
    document.body.classList.remove('custom-cursor');
    document.removeEventListener('mousemove', this.moveHandler);
    document.removeEventListener('mouseover', this.overHandler);
    document.removeEventListener('mouseout', this.outHandler);
  }
}
