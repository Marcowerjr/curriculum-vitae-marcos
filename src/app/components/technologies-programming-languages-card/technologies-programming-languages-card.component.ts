import { Component, Input } from '@angular/core';
import { StackGroup } from '../../data/cv-data';

@Component({
    selector: 'app-technologies-programming-languages-card',
    templateUrl: './technologies-programming-languages-card.component.html',
    styleUrls: ['./technologies-programming-languages-card.component.scss'],
    standalone: false
})
export class TechnologiesProgrammingLanguagesCardComponent {
  @Input() title = 'Tecnologías y herramientas';
  @Input() groups: StackGroup[] = [];
}
