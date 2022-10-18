import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies-programming-languages-card',
  templateUrl: './technologies-programming-languages-card.component.html',
  styleUrls: ['./technologies-programming-languages-card.component.scss'],
})
export class TechnologiesProgrammingLanguagesCardComponent implements OnInit {
  @Input() color: string;

  languages = [
    'JavaScript',
    'TypeScript',
    'React',
    'React Native',
    'Angular',
    'Ionic',
    'Node.js',
    'C#',
    'Java',
    'Python',
    'Django',
    'HTML',
    'CSS',
    'NoSQL',
    'SQL',
    'Git',
    'GitHub',
    'Firebase',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'Docker',
    'Linux',
    'Windows',
    'MacOS',
    'Flutter',
    'Dart',
  ];

  constructor() {}

  ngOnInit() {}
}
