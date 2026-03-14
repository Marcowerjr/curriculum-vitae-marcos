import { Component, Input } from '@angular/core';
import { ContactItem } from '../../data/cv-data';

@Component({
    selector: 'app-contact-card',
    templateUrl: './contact-card.component.html',
    styleUrls: ['./contact-card.component.scss'],
    standalone: false
})
export class ContactCardComponent {
  @Input() title = 'Contacto';
  @Input() items: ContactItem[] = [];
}
