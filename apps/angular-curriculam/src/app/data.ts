import { MenuDropdownItem } from './model';

export const DROPDOWN_ITEMS: MenuDropdownItem[] = [
  
  {
    link: '/version',
    id: 'Angular2',
    linkName: 'Angular 2 / Angular',
  },
  {
    link: '/version',
    id: 'Angular4',
    linkName: 'Angular 4',
  },
  {
    link: '/version',
    id: 'Angular5',
    linkName: 'Angular 5',
  },
  {
    link: '/version',
    id: 'Angular6',
    linkName: 'Angular 6',
  },
  {
    link: '/version',
    id: 'Angular7',
    linkName: 'Angular 7',
  },
  {
    link: '/version',
    id: 'Angular8',
    linkName: 'Angular 8',
  },
  {
    link: '/version',
    id: 'Angular9',
    linkName: 'Angular 9',
  },
  {
    link: '/version',
    id: 'Angular10',
    linkName: 'Angular 10',
  },
  {
    link: '/version',
    id: 'Angular11',
    linkName: 'Angular 11',
  },
  {
    link: '/version',
    id: 'Angular12',
    linkName: 'Angular 12',
  },
  {
    link: '/version',
    id: 'Angular13',
    linkName: 'Angular 13',
  },
  {
    link: '/version',
    id: 'Angular14',
    linkName: 'Angular 14',
  },
  {
    link: '/version',
    id: 'Angular15',
    linkName: 'Angular 15',
  },
];

export const FEATURES_DATA = {
  Angular2: {
    id: 'Angular2',
    title: 'Angular 2/Angular',
    imgUrl: '',
    preText: '',
    description: `
Angular 2 is written in typescript compared to its predecessor Angular Js which is Js framework and Angular follows the component based architecture 
       
Javascript VS TypeScript in Angular 2

Directives Support

Improved Dependency Injection

Improved data binding

Support for a component-based architecture

Cross-platform Support

Improved routing
      `,
  },
  Angular4: {
    id: 'Angular4',
    title: 'Angular 4',
    imgUrl: '../../assets/NgIf with else.png',
    preText: `
    using else :

    <div *ngIf="isValid;else other_content">  
    
        content here ...
    
    </div>
    
    <ng-template #other_content>other content here...</ng-template>

    Output: isValid // false
    other content here... // else block will be displayed

    /* -------------------------------- */

    you can also use then else :

    <div *ngIf="isValid; then content
          else other_content">   here is ignored  </div>

    <ng-template #content>content here...</ng-template>

    <ng-template #other_content>other content here...</ng-template>


    Output: isValid // true
    content here... // #content  block will be displayed
    
    /* -------------------------------- */

    or then alone :

    <div *ngIf="isValid;then content"></div>

    <ng-template #content>content here...</ng-template>

    Output: isValid // true
    content here... // #content  block will be displayed
    `,
    description: `
where is Angular 3? since Angular is developed in MonoRepo the Angular team skipped the Angular 3 version since there was active and huge development on angular router section.
Angular routing was misaligned with angular core versioning number and team decided to synchronize versioning of all the dependency^s to avoid confusion for angular community. 
in Angular 4 TypeScript 2.2 was used which improves type checking and security, strictNullChecks,
introduced NgIf with else, template depricated and now we can use ng-template

Animation Package:
They've pulled animations from the Angular core and set them in the separate package. In case you don't use animations, this excess code won't end up on your creation packages.

NgIf with Else:
Now we can use else statement with ngIf along with an improvement on *ng-If and *ng-For and both can be achieved in Angular 4 and Angular 5.

Template:
The template is now ng-template tag instead of as <template> caused conflicts with other usages of the <template> tag It still works, 
therefore the Angular team changed it to use <ng-template> for Angular purposes

TypeScript 2.1 and 2.2 Compatibility:
The group has upgraded Angular to TypeScript version 2.2. 
This will enhance the security of Angular applications and rate of ngc and you'll receive far better type checking during your program.

StrictNullChecks:
Set skipLibCheck to true in your tsConfig file to enable strictNullChecks in an Angular

      `,
  },
  Angular5: {
    id: 'Angular5',
    title: 'Angular 5',
    preText: `
    With the new Angular 5, one can now choose whether or not to restrict newlines,
    tabs, and white spaces coming from your components and your application.

    @Component({ 

      templateUrl: 'demo.component.html', 
      
      preserveWhitespaces: false 
      
      } 
      
      export class demoComponent {}
      
      If you want to restrict them throughout the application level then below
      is the sample code in config.json file.
      
      "angularCompilerOptions": { 
      
      "preserveWhitespaces": false 
      
      }

      export class demoComponent {}


    `,
    imgUrl: '',
    description:`
angular 5 in this version there was lots of efforts made to reduce the bundle size of the app after production build because of build optimizer,
compiler improvements, angular httpClient bieng used in replacement of Http traditional module, TypeScript 2.5 support, preserve white spaces
       
Built Optimizer
Built Optimizer included Angular CLI to help the developers in creating a smaller bundle which makes the application lighter and faster by removing unnecessary runtime code as well as unnecessary additional parts. It reduces the size of javascript files to improve the performance.
       
Angular Universal State Transfer
If we have a screen with multiple dropdowns(Let's say Country and states),
we will end up with multiple HTTP requests from the client to the server.
Server transfer state collects information as part server side and then transfers it to the client side so that there is no need to be regenerate present information which improves the perceived performance of an application.

Compiler Improvements
The diagnostics produced by the compiler have been slightly improved, specifically when decorators contain unsupported or incorrect expressions which provide faster rebuilds, especially incremental compilation for production builds.

HttpClient
Version 4.3 was launched with HttpClient within @angular/common as a smaller, simpler and more powerful way to make web requests in Angular.

AppShell
In Angular 5 they have added support to AppShell. It uses the router to render your application.If can add AppShell in your project by simply using the below command –ng generate app-shell

Preserve Whitespace
With the new Angular 5, one can now choose whether or not to restrict newlines, tabs, and white spaces coming from your components and your application.

`,
  },
  Angular6: {
    id: 'Angular6',
    title: 'Angular 6',
    preText: '',
    imgUrl: '',
    description:`
This release is focused less on the underlying framework, and more on tool-chain and on making it easier to move quickly with angular in the future, Dependency on RxJS 6,Synchronizes major version number of the Angular framework, Angular CLI, Angular Material  CDK all are now version 6.0.0

Angular 6 features

Angular 6 was released on May 4th, 2018. The major highlights of Angular 6 include the Angular Command Line Interface (CLI), The Component Development KIT (CDK), Angular Material Package update and with new TypeScript version 2.7, it is much easier to code with conditional type declarations, default declarations, and strict class initialization.

Angular Element
Creating a widget or component that can be included in any existing web page was made possible with Angular Elements.
The Angular Elements package provided the ability to create an Angular component and then publish that component as a web component which can be used in any HTML page

Service Worker
Service workers were first introduced in Angular 5. It is the scripts which run in the web browser and manage to cache an application. Service workers come with some bug fixes, including some new functionalities as there was no straight way for deactivating the service worker and to overcome this, Angular 6 came up with a new script file safety-worker.js in production bundle. This script file helps them to unregister an existing service worker.

Internationalization (i18n)
One of the major changes introduced to Angular 6 is internationalization (i18n) feature with runtime rendering so that there is no requirement to build one application per locale.

Bazel Compiler
Bazel optimizes your Angular compilation, it only rebuilds what is necessary to build as it does not make any sense to rebuild the entire application for every little change with this so we can archive fast and incremental builds.

ng-add
ng add 
helps you install and download new packages in your angular apps.
ng-update
ng update is used to update and upgrade your packages it will help you to upgrade from Angular 5 to Angular 6, or any other package in your Angular app.

Tree Shaking
Tree shaking is a build optimization step which tries to ensure any unused code does not get used in our final bundle which helps you to make your app smaller. It uses new injectable services where we can register a provider directly inside the @Injectable() decorator, using the new providedIn attribute.

Some Major updates in Angular 6
Typescript 2.7.x supports
Improved decorator error messages
Fix platform-detection example for Universal
Added to supports of Native-Element
Added Optional generic type for ElementRef
Updates on NgModelChange
Add type and hooks to directive def
Enable size tracking of a minimal CLI render3 application
Add canonical view query
<ng-template> now becomes <template>
Long-term support(LTE) added to Angular from v4
`,
  },
};
export const EMPLOYEE_DATA = {
  status: 'success',
  data: [
    {
      id: 1,
      employee_name: 'Tiger Nixon',
      employee_salary: 320800,
      employee_age: 61,
      profile_image: '',
    },
    {
      id: 2,
      employee_name: 'Garrett Winters',
      employee_salary: 170750,
      employee_age: 63,
      profile_image: '',
    },
    {
      id: 3,
      employee_name: 'Ashton Cox',
      employee_salary: 86000,
      employee_age: 66,
      profile_image: '',
    },
    {
      id: 4,
      employee_name: 'Cedric Kelly',
      employee_salary: 433060,
      employee_age: 22,
      profile_image: '',
    },
    {
      id: 5,
      employee_name: 'Airi Satou',
      employee_salary: 162700,
      employee_age: 33,
      profile_image: '',
    },
    {
      id: 6,
      employee_name: 'Brielle Williamson',
      employee_salary: 372000,
      employee_age: 61,
      profile_image: '',
    },
    {
      id: 7,
      employee_name: 'Herrod Chandler',
      employee_salary: 137500,
      employee_age: 59,
      profile_image: '',
    },
    {
      id: 8,
      employee_name: 'Rhona Davidson',
      employee_salary: 327900,
      employee_age: 55,
      profile_image: '',
    },
    {
      id: 9,
      employee_name: 'Colleen Hurst',
      employee_salary: 205500,
      employee_age: 39,
      profile_image: '',
    },
    {
      id: 10,
      employee_name: 'Sonya Frost',
      employee_salary: 103600,
      employee_age: 23,
      profile_image: '',
    },
    {
      id: 11,
      employee_name: 'Jena Gaines',
      employee_salary: 90560,
      employee_age: 30,
      profile_image: '',
    },
    {
      id: 12,
      employee_name: 'Quinn Flynn',
      employee_salary: 342000,
      employee_age: 22,
      profile_image: '',
    },
    {
      id: 13,
      employee_name: 'Charde Marshall',
      employee_salary: 470600,
      employee_age: 36,
      profile_image: '',
    },
    {
      id: 14,
      employee_name: 'Haley Kennedy',
      employee_salary: 313500,
      employee_age: 43,
      profile_image: '',
    },
    {
      id: 15,
      employee_name: 'Tatyana Fitzpatrick',
      employee_salary: 385750,
      employee_age: 19,
      profile_image: '',
    },
    {
      id: 16,
      employee_name: 'Michael Silva',
      employee_salary: 198500,
      employee_age: 66,
      profile_image: '',
    },
    {
      id: 17,
      employee_name: 'Paul Byrd',
      employee_salary: 725000,
      employee_age: 64,
      profile_image: '',
    },
    {
      id: 18,
      employee_name: 'Gloria Little',
      employee_salary: 237500,
      employee_age: 59,
      profile_image: '',
    },
    {
      id: 19,
      employee_name: 'Bradley Greer',
      employee_salary: 132000,
      employee_age: 41,
      profile_image: '',
    },
    {
      id: 20,
      employee_name: 'Dai Rios',
      employee_salary: 217500,
      employee_age: 35,
      profile_image: '',
    },
    {
      id: 21,
      employee_name: 'Jenette Caldwell',
      employee_salary: 345000,
      employee_age: 30,
      profile_image: '',
    },
    {
      id: 22,
      employee_name: 'Yuri Berry',
      employee_salary: 675000,
      employee_age: 40,
      profile_image: '',
    },
    {
      id: 23,
      employee_name: 'Caesar Vance',
      employee_salary: 106450,
      employee_age: 21,
      profile_image: '',
    },
    {
      id: 24,
      employee_name: 'Doris Wilder',
      employee_salary: 85600,
      employee_age: 23,
      profile_image: '',
    },
  ],
  message: 'Successfully! All records has been fetched.',
};
