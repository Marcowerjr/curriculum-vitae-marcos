# Curriculum Vitae de Marcos Caballero

Hola, soy Marcos Caballero Fernández y este repositorio contiene la versión digital de mi curriculum. Lo construí con Angular e Ionic para mostrar mi trayectoria profesional en la web y, gracias al soporte de Capacitor, también puedo empaquetarlo como aplicación nativa o PWA.

## Qué incluye

- Diseño responsivo con Ionic, afinado para pantallas móviles y escritorio.
- Navegación por pestañas que separa mi perfil, formación académica y experiencia laboral.
- Componentes reutilizables (tarjetas, encabezados, listas) que me facilitan mantener el contenido actualizado.
- Preparación PWA con @angular/service-worker y una build compatible con Capacitor.

## Stack

- Angular 17
- Ionic Angular 8
- Capacitor 8
- TypeScript 5
- RxJS 7

## Requisitos previos

- Node.js 18.13 o superior (recomiendo la LTS más reciente).
- npm 9 o superior (incluido con Node.js).

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

### Calidad

- npm run lint: ejecuta las reglas de ESLint configuradas para el proyecto.
- npm test: lanza las pruebas unitarias con Karma.

## Build web

```bash
npm run build
```

Angular genera la salida optimizada en dist/curriculum-vitae-marcos. Para publicarla como PWA solo tengo que servir ese directorio en un hosting estático (Firebase, Netlify, Vercel, GitHub Pages, etc.).

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

## Estructura que consulto con frecuencia

- src/app/components: tarjetas y encabezados reutilizables para mi perfil, aptitudes, idiomas y tecnologías.
- src/app/tab1, tab2, tab3: páginas para Perfil, Formación Académica y Experiencia Laboral.
- src/assets/img: logos e imágenes que uso en las tarjetas.
- www/: artefactos listos para producción generados por Ionic/Capacitor (se regeneran con npm run build).

## Cómo personalizo el contenido

- Actualizo los textos directamente en los componentes de src/app/components y en cada pestaña.
- Ajusto colores y tipografías en src/theme y src/global.scss.
- Agrego íconos o logos en src/assets y los referencio desde los componentes.

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
2. Reviso dist/curriculum-vitae-marcos o www según el destino.
3. Publico en el hosting que corresponda o sincronizo con Capacitor antes de subir a tiendas.

## Licencia

Este es un proyecto personal. Si quieres reutilizar algún elemento, por favor contáctame primero.
