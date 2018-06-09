# Hackdo  Taller

En este taller, tendremos la oportunidad de dar continuación a el taller de backend en Node, 
utilizaremos las API que se desarrollaron y las integraremos a nuestro proyecto

## Requerimientos

Debemos tener node instalado
- Node
- Angular Cli

## Instalación angular cli
- Verificar la versión con `ng -v`
- Instalación `npm install -g @angular/cli`

## Pasos de creación
- Crear el proyecto `ng new hackdoTaller`

## Ejecución del proyecto
- Instalar npm modules `npm i` esto se hace solo 1 vez
- Ejecutar `ng serve` e ir a `http://localhost:4200/`

## Pasos
- Vamos a adicionar `ReactiveFormsModule` en `app.module.ts` de `import { ReactiveFormsModule } from '@angular/forms'`
- Adicionamos main.ts con boostrap
`import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';`
`import { AppModule } from './app.module';`
`platformBrowserDynamic().bootstrapModule(AppModule);`

- Creamos nuestro nuevo componente para subir archivos `ng generate component uploadFile`
- Creamos nuestro formulario reactivo
- Generamos nuestro servicio `ng generate service uploadFile`

## Notas
- Si no te funciona la libreria de Rxjs usar `npm install rxjs@6 rxjs-compat@6 --save`
- Si tienes problemas con el Http,  usar en imports `import { HttpModule } from '@angular/http';` en `app.module.ts`
- 


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
