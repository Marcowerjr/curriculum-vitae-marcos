import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-aptitudes-card',
    templateUrl: './aptitudes-card.component.html',
    styleUrls: ['./aptitudes-card.component.scss'],
    standalone: false
})
export class AptitudesCardComponent {
  @Input() title = 'Aptitudes';
  @Input() aptitudes: string[] = [];
}
