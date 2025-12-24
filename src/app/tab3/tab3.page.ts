import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  works = [
    {
      companyName: 'MSC Industrial Supply',
      companyLogo: 'assets/img/msc.png',
      position: 'Desarrollador de software JR',
      description: [
        `Manejo de API's con Django y Express utilizando JavaScript, Python y MySQL.`,
        `Desarrollo de frontend con AngularJS.`,
        `Participación en la migración del sistema a versiones más recientes de Python (3.12) y Django (5).`,
        `Dar mejoras al sistema ERP de la empresa.`,
        `Engargado de desarrollar y mejorar el proyecto del sistema de los almacenes.`,
        `Experiencia en configuración de servidores en Google Cloud con el fin de tener un entorno de pruebas de los sistemas.`,
        `Experencia en automatizaciones en Linux y procesos de automatización usando pipelines en bitbucket`
      ],
      location: 'Chihuahua, CHH',
      startDate: 'Septiembre del 2024',
      endDate: 'Actualidad',
    },
    {
      companyName: 'Equity Link',
      companyLogo: 'assets/img/equity_link.png',
      position: 'Desarrollador backend',
      description: [
        `Participación en el desarrollo del sistema de servicio a factoraje diseñado para la empresa.`,
        `Desarrollo de API's con Laravel y Composer utilizando PHP y MySQL.`,
        `Manejo de versiones con Git.`,
      ],
      location: 'Chihuahua, CHH',
      startDate: 'Enero del 2024',
      endDate: 'Septiembre del 2024',
    },
    {
      companyName: 'Arvolution',
      companyLogo: 'assets/img/arvolution.png',
      position: 'Desarrollador full stack',
      description: [
        `Desarrollo de API's con Node y Express utilizando TypeScript, Sequelize, GraphQL y MySQL.`,
        `Desarrollo de aplicaciones web con React, TypeScript, GraphQL y Apollo.`,
        `Desarrollo de aplicaciones móviles con React Native, TypeScript y GraphQL.`,
        `Manejo de versiones con Git.`,
      ],
      location: 'Chihuahua, CHH',
      startDate: 'Marzo del 2022',
      endDate: 'Enero del 2024',
    },
    {
      companyName: 'Grupo Lifandi',
      companyLogo: 'assets/img/grupo_lifandi.jpg',
      position: 'Desarrollador full stack',
      description: [
        `Sistema de generación de documentos PDF, utilizando Python y Web2py como Framework 
        en desarrollo de Front End y Back End.`,
        `Gestión de base de datos SQL, utilizando MySQL.`,
        `Experiencia en comandos de GNU/Linux.`,
      ],
      location: 'Chihuahua, CHH',
      startDate: 'Noviembre del 2021',
      endDate: 'Noviembre del 2021',
    },
    {
      companyName: 'Codanai Software',
      companyLogo: 'assets/img/codanai.png',
      position: 'Desarrollador backend',
      description: [
        `Realización de un sistema a reparto a domicilio, con funcionalidades acerca de creación, 
        modificación y eliminación de repartidores, domicilios de entrega y fechas de entrega.`,
        `Tengo experiencia en trabajar con equipos de trabajo que utilizan la metodología SCRUM.`,
        `Experiencia en Clean Code.`,
        `Cooperación con los desarrolladores front-end para la integración de nuevos elementos 
        orientados al usuario.`,
        `Escritura de código para desarrollar aplicaciones web funcionales.`,
        `Elaboración de la documentación técnica de las aplicaciones desarrolladas.`,
        `Diseño y escritura de API utilizando Express.js.`,
        `Aplicación de estándares de diseño, codificación y documentación.`,
      ],
      location: 'Chihuahua, CHH',
      startDate: 'Mayo del 2021',
      endDate: 'Octubre del 2021',
    },
  ];

  constructor() {}
}
