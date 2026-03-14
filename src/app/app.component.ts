import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import {
  briefcaseOutline,
  callOutline,
  locationOutline,
  logoGithub,
  logoLinkedin,
  mailOutline,
  personOutline,
  schoolOutline,
} from 'ionicons/icons';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: false
})
export class AppComponent {
  constructor() {
    addIcons({
      personOutline,
      schoolOutline,
      briefcaseOutline,
      mailOutline,
      callOutline,
      locationOutline,
      logoGithub,
      logoLinkedin,
    });
  }
}
