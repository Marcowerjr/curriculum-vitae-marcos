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
  selector: '[appParallax]',
  standalone: false,
})
export class ParallaxDirective implements AfterViewInit, OnDestroy {
  @Input() appParallaxFactor = 0.08;
  @Input() appParallaxLimit = 42;
  @Input() appParallaxZoom = 0.06;

  @HostBinding('class.app-parallax') baseClass = true;

  private hostContent?: HTMLElement & {
    getScrollElement?: () => Promise<HTMLElement>;
    scrollEvents?: boolean;
  };
  private scrollElement?: HTMLElement;
  private lastScrollTop = 0;
  private removeIonScrollListener?: () => void;
  private removeScrollListener?: () => void;
  private removeResizeListener?: () => void;
  private rafId?: number;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
    private readonly ngZone: NgZone,
  ) {}

  async ngAfterViewInit() {
    const hostContent = this.elementRef.nativeElement.closest('ion-content') as
      | (HTMLElement & {
          getScrollElement?: () => Promise<HTMLElement>;
          scrollEvents?: boolean;
        })
      | null;

    this.hostContent = hostContent ?? undefined;

    if (this.hostContent) {
      this.hostContent.scrollEvents = true;
    }

    this.scrollElement = this.hostContent?.getScrollElement
      ? await this.hostContent.getScrollElement()
      : undefined;

    this.ngZone.runOutsideAngular(() => {
      const scrollTarget: HTMLElement | Window = this.scrollElement ?? window;

      if (this.hostContent) {
        this.removeIonScrollListener = this.renderer.listen(this.hostContent, 'ionScroll', (event) => {
          this.lastScrollTop = event?.detail?.scrollTop ?? this.lastScrollTop;
          this.scheduleUpdate();
        });
      }

      this.removeScrollListener = this.renderer.listen(scrollTarget, 'scroll', () => {
        this.lastScrollTop = this.scrollElement?.scrollTop ?? window.scrollY ?? this.lastScrollTop;
        this.scheduleUpdate();
      });
      this.removeResizeListener = this.renderer.listen(window, 'resize', () => {
        this.scheduleUpdate();
      });

      this.scheduleUpdate();
    });
  }

  ngOnDestroy() {
    this.removeIonScrollListener?.();
    this.removeScrollListener?.();
    this.removeResizeListener?.();

    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }

  private scheduleUpdate() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }

    this.rafId = requestAnimationFrame(() => {
      this.updateStyles();
    });
  }

  private updateStyles() {
    const element = this.elementRef.nativeElement;
    const rect = element.getBoundingClientRect();
    const viewportHeight = this.hostContent?.clientHeight ?? window.innerHeight;
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = viewportHeight / 2;
    const normalizedDistance = (elementCenter - viewportCenter) / Math.max(1, viewportHeight);
    const centeredProgress = 1 - this.clamp(Math.abs(normalizedDistance) * 1.35, 0, 1);
    const offset = this.clamp(
      -normalizedDistance * viewportHeight * this.appParallaxFactor,
      -this.appParallaxLimit,
      this.appParallaxLimit,
    );
    const scale = 1 + centeredProgress * this.appParallaxZoom;

    this.renderer.setStyle(element, '--parallax-offset', `${offset.toFixed(2)}px`);
    this.renderer.setStyle(element, '--parallax-scale', `${scale.toFixed(4)}`);
  }

  private clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
  }
}