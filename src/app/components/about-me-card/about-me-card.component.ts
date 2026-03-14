import { Component, Input } from '@angular/core';
import { ProfileData } from '../../data/cv-data';

@Component({
    selector: 'app-about-me-card',
    templateUrl: './about-me-card.component.html',
    styleUrls: ['./about-me-card.component.scss'],
    standalone: false
})
export class AboutMeCardComponent {
  @Input() profile!: ProfileData;

}
