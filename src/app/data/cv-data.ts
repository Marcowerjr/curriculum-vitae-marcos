export interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: string;
  target: '_self' | '_blank';
  helper?: string;
}

export interface MetricItem {
  value: string;
  label: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  note: string;
  progress: number;
}

export interface StackGroup {
  title: string;
  items: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  location: string;
  period: string;
  logo: string;
  summary: string;
  achievements: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
  logo?: string;
  monogram?: string;
}

export interface ProfileData {
  name: string;
  headline: string;
  location: string;
  availability: string;
  avatar: string;
  summary: string;
  focusAreas: string[];
  badges: string[];
  metrics: MetricItem[];
}

export const cvData = {
  profile: {
    name: 'Marcos Caballero Fernández',
    headline:
      'Ingeniero en Desarrollo y Gestión de Software enfocado en backend y full stack para sistemas empresariales.',
    location: 'Chihuahua, Chihuahua, México',
    availability:
      'Experiencia construyendo APIs, automatizaciones, migraciones productivas y despliegues en cloud.',
    avatar: 'assets/img/avatar.jpg',
    summary:
      'Especializado en Python, Django, Node.js, JavaScript, TypeScript y MySQL. He participado en mejoras funcionales de alto impacto, corrección de incidencias, modernización de sistemas y soporte técnico en proyectos corporativos y de consultoría externa.',
    focusAreas: [
      'Desarrollo y mejora continua de sistemas empresariales.',
      'Diseño y construcción de APIs y servicios para negocio.',
      'Migración de sistemas productivos y automatización de procesos.',
      'Configuración de entornos de prueba, despliegue e integración continua.',
    ],
    badges: [
      'Backend y full stack',
      'APIs empresariales',
      'Cloud y CI/CD',
      'ERP, factoraje y almacenes',
    ],
    metrics: [
      { value: '4+', label: 'años de experiencia' },
      { value: '6', label: 'roles documentados' },
      { value: 'C1', label: 'nivel de inglés' },
      { value: '9.6', label: 'promedio en ingeniería' },
    ],
  } as ProfileData,
  contact: [
    {
      label: 'Correo',
      value: 'marcowerjr@gmail.com',
      href: 'mailto:marcowerjr@gmail.com',
      icon: 'mail-outline',
      target: '_self',
      helper: 'Respuesta rápida para oportunidades y colaboraciones.',
    },
    {
      label: 'Teléfono',
      value: '+52 (614) 516 82 33',
      href: 'tel:+526145168233',
      icon: 'call-outline',
      target: '_self',
      helper: 'Disponible en Chihuahua, México.',
    },
    {
      label: 'Dirección',
      value: 'Jardín de los Alcatraces #4805, Jardines Universidad, Chihuahua 31124',
      href: 'https://maps.google.com/?q=Jard%C3%ADn%20de%20los%20Alcatraces%204805%20Chihuahua',
      icon: 'location-outline',
      target: '_blank',
      helper: 'Base operativa para roles remotos, híbridos o presenciales.',
    },
    {
      label: 'GitHub',
      value: 'github.com/Marcowerjr',
      href: 'https://github.com/Marcowerjr',
      icon: 'logo-github',
      target: '_blank',
      helper: 'Código, proyectos y publicaciones técnicas.',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/marcos-caballero',
      href: 'https://www.linkedin.com/in/marcos-caballero/',
      icon: 'logo-linkedin',
      target: '_blank',
      helper: 'Perfil profesional y red de contacto.',
    },
  ] as ContactItem[],
  aptitudes: [
    'Adaptabilidad a nuevas tecnologías',
    'Resolución de problemas técnicos',
    'Trabajo en equipo',
    'Pensamiento analítico',
    'Atención al detalle',
    'Proactividad',
  ],
  additionalInfo: [
    'Facilidad para adaptarme a distintos lenguajes y stacks de desarrollo.',
    'Aprendizaje rápido y orientación a mejoras funcionales de alto impacto.',
    'Participación en proyectos corporativos y de consultoría externa.',
    'Experiencia colaborando bajo metodologías ágiles y estándares de código.',
  ],
  languages: [
    {
      name: 'Español',
      level: 'Nativo',
      note: 'Comunicación profesional y técnica.',
      progress: 1,
    },
    {
      name: 'Inglés',
      level: 'C1',
      note: 'Lectura, documentación y trabajo técnico avanzado.',
      progress: 0.87,
    },
  ] as LanguageItem[],
  stackGroups: [
    {
      title: 'Backend y APIs',
      items: ['Python', 'Django', 'Node.js', 'Express', 'PHP', 'Laravel', 'Go', 'GraphQL'],
    },
    {
      title: 'Frontend y móvil',
      items: ['TypeScript', 'JavaScript', 'Angular', 'AngularJS', 'React', 'React Native', 'Ionic'],
    },
    {
      title: 'Datos, cloud y entrega',
      items: [
        'MySQL',
        'PostgreSQL',
        'Docker',
        'Linux',
        'Jenkins',
        'AWS',
        'Google Cloud',
        'Bitbucket Pipelines',
        'Git',
      ],
    },
    {
      title: 'Analítica aplicada',
      items: ['Pandas', 'NumPy', 'scikit-learn'],
    },
  ] as StackGroup[],
  education: [
    {
      title: 'Ingeniería en Desarrollo y Gestión de Software',
      institution: 'Universidad Tecnológica de Chihuahua',
      location: 'Chihuahua, Chihuahua',
      period: '04/2023',
      logo: 'assets/img/escudo.webp',
      summary:
        'Estudios finalizados con enfoque en desarrollo, gestión de software y resolución de problemas de negocio mediante tecnología.',
      achievements: [
        'Promedio general de 9.6.',
        'Proyecto integrador concluido con calificación de 10.',
      ],
    },
    {
      title: 'TSU en Desarrollo de Software Multiplataforma',
      institution: 'Universidad Tecnológica de Chihuahua',
      location: 'Chihuahua, Chihuahua',
      period: '08/2021',
      logo: 'assets/img/escudo.webp',
      summary:
        'Base técnica sólida en construcción de software multiplataforma, bases de datos y lógica de negocio.',
      achievements: [
        'Promedio general de 10.',
        'Dos proyectos integradores con calificación de 10.',
      ],
    },
  ] as EducationItem[],
  experience: [
    {
      role: 'Desarrollador de software',
      company: 'Clientes externos',
      location: 'Chihuahua, Chihuahua',
      period: '01/2025 - Actualidad',
      summary:
        'Participación en desarrollo, soporte y mejora continua de sistemas empresariales para clientes externos.',
      highlights: [
        'Implementación de requerimientos funcionales y técnicos.',
        'Corrección de incidencias backend y frontend.',
        'Mejoras evolutivas para sistemas de gestión empresarial.',
        'Soporte en ajustes de despliegue e infraestructura según las necesidades del proyecto.',
      ],
      stack: ['Backend', 'Frontend', 'Despliegue', 'Consultoría'],
      monogram: 'CX',
    },
    {
      role: 'Desarrollador de software JR',
      company: 'MSC Industrial Supply',
      location: 'Chihuahua, Chihuahua',
      period: '09/2024 - Actualidad',
      summary:
        'Trabajo orientado a APIs, ERP y operación de almacenes con soporte a migraciones y automatización.',
      highlights: [
        'Desarrollo de APIs con Django, Express, Python, JavaScript y MySQL.',
        'Desarrollo frontend con AngularJS.',
        'Participación en la migración a Python 3.12 y Django 5.',
        'Mejoras funcionales al ERP corporativo y al sistema de almacenes.',
        'Configuración de entornos de prueba en Google Cloud.',
        'Automatización de procesos en Linux con Bitbucket Pipelines y Jenkins.',
      ],
      stack: ['Django', 'Express', 'MySQL', 'AngularJS', 'Google Cloud', 'Jenkins'],
      logo: 'assets/img/msc.png',
    },
    {
      role: 'Desarrollador backend',
      company: 'Equity Link',
      location: 'Chihuahua, Chihuahua',
      period: '01/2024 - 09/2024',
      summary:
        'Participación en el desarrollo de una solución empresarial para servicio de factoraje.',
      highlights: [
        'Desarrollo de APIs con Laravel, PHP y MySQL.',
        'Implementación de lógica de negocio para el sistema de factoraje.',
        'Control de versiones con Git.',
      ],
      stack: ['Laravel', 'PHP', 'MySQL', 'Git'],
      logo: 'assets/img/equity_link.png',
    },
    {
      role: 'Desarrollador full stack',
      company: 'Arvolution',
      location: 'Chihuahua, Chihuahua',
      period: '03/2022 - 01/2024',
      summary:
        'Participación en productos web y móviles con stack JavaScript/TypeScript y operación en cloud.',
      highlights: [
        'Desarrollo de APIs con Node.js, Express, TypeScript, Sequelize, GraphQL y MySQL.',
        'Desarrollo de aplicaciones web con React, TypeScript, GraphQL y Apollo.',
        'Desarrollo de aplicaciones móviles con React Native e implementación de CodePush.',
        'Generación de hojas de cálculo y APIs con Go y Python.',
        'Uso de Docker, AWS, Amazon RDS y Amazon S3.',
        'Implementación de integración y entrega continua.',
      ],
      stack: ['React', 'React Native', 'GraphQL', 'Docker', 'AWS', 'Go'],
      logo: 'assets/img/arvolution.png',
    },
    {
      role: 'Desarrollador full stack',
      company: 'Grupo Lifandi',
      location: 'Chihuahua, Chihuahua',
      period: '11/2021 - 11/2021',
      summary:
        'Proyecto enfocado en generación de documentos y operación sobre base de datos SQL.',
      highlights: [
        'Sistema de generación de documentos PDF con Python y Web2py.',
        'Desarrollo de frontend y backend para el flujo documental.',
        'Gestión de bases de datos MySQL y operación en GNU/Linux.',
      ],
      stack: ['Python', 'Web2py', 'MySQL', 'Linux'],
      logo: 'assets/img/grupo_lifandi.jpg',
    },
    {
      role: 'Desarrollador backend',
      company: 'Codanai Software',
      location: 'Chihuahua, Chihuahua',
      period: '05/2021 - 10/2021',
      summary:
        'Construcción de un sistema de reparto a domicilio con foco en APIs, documentación técnica y buenas prácticas.',
      highlights: [
        'Desarrollo de un sistema de reparto con creación, modificación y eliminación de repartidores y entregas.',
        'Trabajo con equipos bajo metodología SCRUM y enfoque de Clean Code.',
        'Cooperación con frontend para integrar nuevas funcionalidades orientadas al usuario.',
        'Diseño y escritura de APIs y documentación técnica.',
        'Aplicación de estándares de diseño, codificación y documentación.',
      ],
      stack: ['Node.js', 'Express', 'SCRUM', 'Clean Code', 'APIs'],
      logo: 'assets/img/codanai.png',
    },
  ] as ExperienceItem[],
};