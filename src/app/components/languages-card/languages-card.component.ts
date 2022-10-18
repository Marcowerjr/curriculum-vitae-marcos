import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages-card',
  templateUrl: './languages-card.component.html',
  styleUrls: ['./languages-card.component.scss'],
})
export class LanguagesCardComponent implements OnInit {
  @Input() color: string;

  languages = [
    {
      name: 'Español',
      progress: 1,
    },
    {
      name: 'Inglés',
      progress: 0.9,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
