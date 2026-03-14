import { Component, Input } from '@angular/core';
import { LanguageItem } from '../../data/cv-data';

@Component({
    selector: 'app-languages-card',
    templateUrl: './languages-card.component.html',
    styleUrls: ['./languages-card.component.scss'],
    standalone: false
})
export class LanguagesCardComponent {
  @Input() title = 'Idiomas';
  @Input() languages: LanguageItem[] = [];
}
