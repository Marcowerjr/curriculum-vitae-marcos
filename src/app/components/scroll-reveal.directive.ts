import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  Input,
  NgZone,
  OnDestroy,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: false,
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  @Input() appScrollRevealDelay = 0;
  @Input() appScrollRevealOrigin: 'up' | 'left' | 'right' | 'scale' = 'up';

  @HostBinding('class.app-reveal') baseClass = true;
  @HostBinding('class.is-visible') isVisible = false;
  @HostBinding('class.reveal-left') get revealLeft() {
    return this.appScrollRevealOrigin === 'left';
  }
  @HostBinding('class.reveal-right') get revealRight() {
    return this.appScrollRevealOrigin === 'right';
  }
  @HostBinding('class.reveal-scale') get revealScale() {
    return this.appScrollRevealOrigin === 'scale';
  }

  private observer?: IntersectionObserver;
  private revealTimeoutId?: number;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
    private readonly ngZone: NgZone,
  ) {}

  async ngAfterViewInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      '--reveal-intensity',
      `${this.getDistance()}px`,
    );

    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting || this.isVisible) {
              continue;
            }

            this.revealTimeoutId = window.setTimeout(() => {
              this.ngZone.run(() => {
                this.isVisible = true;
              });
            }, this.appScrollRevealDelay);

            this.observer?.disconnect();
            break;
          }
        },
        {
          threshold: 0.18,
          rootMargin: '0px 0px -8% 0px',
        },
      );

      this.observer.observe(this.elementRef.nativeElement);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();

    if (this.revealTimeoutId) {
      clearTimeout(this.revealTimeoutId);
    }
  }

  private getDistance() {
    if (this.appScrollRevealOrigin === 'scale') {
      return 18;
    }

    if (this.appScrollRevealOrigin === 'left' || this.appScrollRevealOrigin === 'right') {
      return 36;
    }

    return 28;
  }

}