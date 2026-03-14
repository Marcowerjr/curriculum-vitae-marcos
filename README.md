# Curriculum Vitae de Marcos Caballero

Versión actual: 2.1.0

Hola, soy Marcos Caballero Fernández y este repositorio contiene la versión digital de mi curriculum. Lo construí con Angular e Ionic para mostrar mi trayectoria profesional en la web y, gracias al soporte de Capacitor, también puedo empaquetarlo como aplicación nativa o PWA.

## Qué incluye

- Diseño responsivo con Ionic, afinado para pantallas móviles y escritorio.
- Navegación por pestañas que separa mi perfil, formación académica y experiencia laboral.
- Arquitectura basada en una sola fuente de datos tipada para mantener el CV sin duplicación de contenido.
- Componentes reutilizables que consumen entradas y permiten rediseñar o reorganizar secciones con cambios mínimos.
- Preparación PWA con @angular/service-worker y una build compatible con Capacitor.

## Stack

- Angular 21
- Ionic Angular 8.8
- Capacitor 8.2
- TypeScript 5.9
- RxJS 7
- Zone.js 0.16

## Requisitos previos

- Node.js 22 o superior.
- npm 10 o superior.

La combinación actual de Angular 21 y Capacitor CLI 8.2 queda validada con Node.js 22+.

Puedo validar las versiones ejecutando:

```bash
node --version
npm --version
```

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm start
```

Este comando levanta ng serve en <http://localhost:4200/> con recarga en vivo.

La configuración fue migrada al builder moderno de Angular, pero manteniendo la salida web en `www/` para no romper el flujo con Capacitor.

### Calidad

- npm run lint: ejecuta las reglas de ESLint configuradas para el proyecto.
- npm test: lanza las pruebas unitarias con Karma.

## Build web

```bash
npm run build
```

En esta versión, la build principal del proyecto se emite en `www/`, que es la carpeta que consume Capacitor y la que también puedo publicar como sitio estático en Firebase, Netlify, Vercel o GitHub Pages.

Si necesito revisar el artefacto final para despliegue web, el directorio correcto después de `npm run build` es `www/`.

## Empaquetado con Capacitor

1. Creo la plataforma nativa (ejemplo Android):

   ```bash
   npx cap add android
   ```

2. Cuando quiero sincronizar los artefactos web con el proyecto Android ejecuto:

   ```bash
   npm run android:prepare
   ```

3. Si necesito abrir directamente Android Studio para continuar:

   ```bash
   npx cap open android
   ```

Sigo la documentación oficial de Capacitor para firma y publicación.

### Versiones actualizadas

- Versión del proyecto: 2.1.0
- Angular CLI y Angular framework: 21.2.x
- Ionic Angular: 8.8.1
- Capacitor core y Android: 8.2.0
- Plugins Capacitor (`app`, `haptics`, `keyboard`, `status-bar`): 8.0.1
- TypeScript: 5.9.3

## Estructura que consulto con frecuencia

- src/app/data/cv-data.ts: fuente central de contenido del CV, con interfaces tipadas para perfil, contacto, idiomas, stack, formación y experiencia.
- src/app/components: tarjetas reutilizables que reciben datos por inputs y renderizan las distintas secciones.
- src/app/tab1, tab2, tab3: páginas para Perfil, Formación Académica y Experiencia Laboral.
- src/global.scss y src/theme/variables.scss: tokens visuales, tipografía, superficies y paleta global.
- src/assets/img: logos e imágenes que uso en las tarjetas.
- www/: artefactos listos para producción generados por Ionic/Capacitor (se regeneran con npm run build).

## Cómo personalizo el contenido

- Actualizo el contenido principal en src/app/data/cv-data.ts.
- Ajusto colores, tipografías, superficies y espaciados en src/theme/variables.scss y src/global.scss.
- Si necesito cambiar la presentación de una sección, modifico el componente correspondiente en src/app/components o la composición de cada pestaña en src/app/tab1, src/app/tab2 y src/app/tab3.
- Agrego íconos o logos en src/assets y los referencio desde la data o desde los componentes.

## Automatizaciones para Android

- `npm run android:prepare`: compila la web y sincroniza la carpeta android (equivalente a build + cap sync).
- `npm run android:run`: prepara y lanza la app en el dispositivo o emulador configurado.
- `npm run android:apk`: genera una build de producción, sincroniza y ejecuta assembleRelease para producir el APK en `android/app/build/outputs/apk/release/`.

Para personalizar los íconos creo la carpeta `resources` en la raíz, guardo mi icono base en `resources/icon.png` (PNG cuadrado ≥1024×1024) y ejecuto:

```bash
npx capacitor-assets generate --android
```

Después vuelvo a sincronizar con `npm run android:prepare`.

## Flujo de despliegue

1. Ejecuto npm run build -- --configuration production para obtener una build optimizada.
2. Reviso `www/`, que sigue siendo la salida usada por la app, por Capacitor y por cualquier despliegue estático.
3. Publico en el hosting que corresponda o sincronizo con Capacitor antes de subir a tiendas.

## Licencia

Este es un proyecto personal. Si quieres reutilizar algún elemento, por favor contáctame primero.
