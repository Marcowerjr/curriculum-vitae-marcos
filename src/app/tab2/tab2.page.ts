import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  grades = [
    {
      title:
        'Grado Técnico Superior en Desarrollo de Software: Desarrollo de software multiplataforma',
      subtitle:
        'Universidad Tecnológica de Chihuahua - Chihuahua, CHH, Agosto del 2021',
      logo: 'assets/img/escudo.webp',
      description:
        'Promedio general de 10, dos proyectos integradores realizados con 10 de calificación',
    },
    {
      title:
        'Licenciatura en Ingeniería en Desarrollo de Software: Desarrollo y Gestión de Software',
      subtitle:
        'Universidad Tecnológica de Chihuahua - Chihuahua, CHH, En curso',
      logo: 'assets/img/escudo.webp',
      description:
        ' Estudios no finalizados en Desarrollo y Gestión de Software en Universidad Tecnológica de Chihuahua',
    },
  ];

  constructor() {}
}
