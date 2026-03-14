import { Component, ElementRef, ViewChild } from '@angular/core';
import { createAnimation } from '@ionic/angular';
import { cvData } from '../data/cv-data';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss'],
    standalone: false
})
export class Tab3Page {
  @ViewChild('pageShell', { read: ElementRef })
  pageShell?: ElementRef<HTMLElement>;

  works = cvData.experience;

  constructor() {}

  ionViewWillEnter() {
    requestAnimationFrame(() => {
      this.runEnterAnimation();
    });
  }

  private runEnterAnimation() {
    const pageShell = this.pageShell?.nativeElement;

    if (!pageShell) {
      return;
    }

    createAnimation()
      .addElement(pageShell)
      .beforeStyles({
        opacity: '0.01',
        transform: 'translate3d(0, 18px, 0) scale(0.992)',
        filter: 'blur(8px)',
      })
      .afterClearStyles(['opacity', 'transform', 'filter'])
      .duration(580)
      .easing('cubic-bezier(0.22, 1, 0.36, 1)')
      .fromTo('opacity', '0.01', '1')
      .fromTo('transform', 'translate3d(0, 18px, 0) scale(0.992)', 'translate3d(0, 0, 0) scale(1)')
      .fromTo('filter', 'blur(8px)', 'blur(0px)')
      .play();
  }
}
