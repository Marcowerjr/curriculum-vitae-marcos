import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aptitudes-card',
  templateUrl: './aptitudes-card.component.html',
  styleUrls: ['./aptitudes-card.component.scss'],
})
export class AptitudesCardComponent implements OnInit {
  @Input() color: string;

  aptitudes = [
    'Organización',
    'Iniciativa',
    'Trabajo en equipo',
    'Responsabilidad',
    'Atención al detalle',
    'Simpático',
    'Mente proactiva',
  ];

  constructor() {}

  ngOnInit() {}
}
