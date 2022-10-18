import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent implements OnInit {
  @Input() color: string;

  contactItems = [
    {
      icon: 'mail-outline',
      text: 'marcowerjr@gmail.com',
      link: 'mailto:marcowerjr@gmail.com',
      target: '_self',
    },
    {
      icon: 'call-outline',
      text: '+52 (614)-516-82-33',
      link: 'tel:+526145168233',
      target: '_self',
    },
    {
      icon: 'logo-github',
      text: 'Marcowerjr',
      link: 'https://github.com/Marcowerjr',
      target: '_blank',
    },
    {
      icon: 'logo-linkedin',
      text: 'Marcos Caballero Fernández',
      link: 'https://www.linkedin.com/in/marcos-caballero/',
      target: '_blank',
    },
    {
      icon: 'logo-facebook',
      text: 'Marcos Caballero Fernández',
      link: 'https://www.facebook.com/Marcowerjr/',
      target: '_blank',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
