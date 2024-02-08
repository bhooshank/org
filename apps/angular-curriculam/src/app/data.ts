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
  {
    link: '/version',
    id: 'Angular16',
    linkName: 'Angular 16',
  },
  {
    link: '/version',
    id: 'Angular17',
    linkName: 'Angular 17',
  },
];

export const FEATURES_DATA = {
  Angular2: {
    id: 'Angular2',
    title: 'Angular 2/Angular',
    imgUrl: '',
    preText: '',
    description: `
<span>

Angular 2 is written in typescript compared to its predecessor Angular Js which is Js framework and Angular follows the component based architecture 

Components in and Controllers out: Earlier version of Angular i.e. Angular or Angular 1.x worked in project using Controllers now in Angular 2 its work around changed to Components. In real sense, Controllers still exist as one part of what we are calling a Component. The Component is composed and has a View and a Controller. The View is what we have HTML template while Controller in actual the JavaScript behaviour. There is no need of separate API registration for the controller or other of the non-standard APIs like Angular 1.x, in Angular 2.0 we just need to create a simple class with some of the annotations. Using this approach in Angular 2 it helps to build the project applications into many different modules. And with that it becomes easy in maintaining the project over a period of time. Other components of Angular 2 are as below: -

<pre class="code-disp">
import { Component } from '@angular/core';

@Component ({
   selector: 'my-app',
   template: ' &ltdiv&gt
      &lth1&gt{{appTitle}}&lt/h1&gt
      &ltdiv&gtTo Tutorials Point&lt/div&gt
   &lt/div&gt ',
})

export class AppComponent {
   appTitle: string = 'Welcome';
}

</pre>

Modules

Modules – It breaks project into logical pieces of code called Module and each of them helps to perform as a single task. Module is made up of the following parts: -
Bootstrap array − It tells Angular 2 which components need to be loaded so that its functionality can be accessed in the application. Once we load the component in the bootstrap array, we need to declare them so that they can be used across other components in the Angular 2 or Angular 4 project application.
Export array – It is used to export components, directives and pipes so that it can then be used in other modules.
Import array − It is used to import the functionality from other Angular modules.

<pre class="code-disp">
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

</pre>

Templates
Templates – Using this we can define the views of an Angular 2 or Angular 4 application. There are two ways to define Templates in Angular 2. One is inline template as shown below
<pre class="code-disp">

template: '
   &ltdiv&gt
      &lth1&gt{{AppTitle}}&lt/h1&gt 
      &ltdiv&gtLearn Angular 2 Template&lt/div&gt 
   &lt/div&gt 
'
</pre>

and other way is by using the templateURL 

templateURL:

<pre class="code-disp">
// app-greet.component.html 

<xmp>
<div>
    <app-greet></app-greet>
</div>
</xmp>

// app-greet.component.css
div {
  width:100 %;
  height: 500px;
}

// app-greet.component.ts 

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './app-greet.component.html',
  styleUrls: ['./app-greet.component.css']
})
export class GreetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
</pre>

Directive - A directive is typically a custom HTML which is used that only intends to extend the strength of HTML. Angular 2 has the following named directive which gets called as part of the "BrowserModule" module. There are three types of directives: -

Component Directive - Can Create a complete custom component which is composed of a View and a Controller it enables to use it as a custom HTML element. While we have router which can map routes to the Components.
Decorator Directive - It nicely does the decoration of an existing HTML element with additive behavior. The best example we have is "ng-show".
Template Directive - Helps to Transforms HTML into a reusable template. Then the author of directive can handle it to when and how the template gets initialized and inserted into the DOM. Examples for it is to include "ng-if" and "ng-repeat".
*ngIf :- The ngif basically is used to add elements to the HTML code if it evaluates to true, else it will not add the elements to the HTML code.
<pre class="code-disp">
// app.component.ts

import { Component } from '@angular/core';  

@Component ({
   selector: 'my-app',
   templateUrl: 'app/app.component.html'
})
export class AppComponent {
   appTitle: string = 'Welcome';
   appStatus: boolean = true;
}

//app.component.html
<xmp>
<div *ngIf = 'appStatus'>{{appTitle}} Tutorialspoint </div> 
</xmp>
</pre>

*ngFor :- The ngFor is used to elements based on the condition of the For loop.
<pre class="code-disp">
// app.component.ts

import { Component } from '@angular/core';
 
@Component ({
   selector: 'my-app',
   templateUrl: 'app/app.component.html'
})

export class AppComponent {
   appTitle: string = 'Welcome';
   appList: any[] = [ {
      "ID": "1",
      "Name" : "One"
   },

   {
      "ID": "2",
      "Name" : "Two"
   } ];
}

// app.component.html

<xmp>
<div *ngFor = 'let lst of appList'> 
   <ul> 
      <li>{{lst.ID}}</li> 
      <li>{{lst.Name}}</li> 
   </ul> 
</div> 
</xmp>
</pre>
Metadata - It is data of data which can be used to add additional data to Angular 2 or Angular 4 class. Metadata helps us in decorating class so that it gets configured to achieve the expected behavior of the class. Following are the different parts for Metadata.
Annotations - These are decorators which works at the class level.
Parameters - These are set by the decorators in order it get worked at constructor level.



2) TypeScript writes JavaScript - As we know Angular 2 works behind with JavaScript. So now how to learn Angular 2 when you do not know write in JavaScript. Here TypeScript plays a vital role where you write simple program and backend it automatically gets converted to JavaScript i.e. (.ts) file is converted to (.js). TypeScript is a superset of JavaScript and is developed by Microsoft.

3) Services - They are sets of code which can be shared by different Components of an Angular 2 application. So if we have data component which gets data from a database this can be shared as service so that it could be consumed when required by others.

<pre class="code-disp">
//myservice.ts

import { Injectable } from '@angular/core';  
  
@Injectable()  
export class MyService {  
    GetText() {  
        return "Text From Service";  
    }  
}  
</pre>

<pre class="code-disp">
// app.component.ts

import { Component } from '@angular/core';  
import { MyService } from './app.service';  
  
@Component({  
  selector: 'test-app',  
  templateUrl: './app/example.html',  
   providers: [MyService]  
})  
export class AppComponent {   
    name = "Jignesh";  
    messageText = '';    
    constructor(private _myService: MyService) {  
  
    }  
    onClickMe() {    
        this.messageText = this._myService.GetText();    
    }  
} 
</pre>

<pre class="code-disp">
// example.html
<xmp>
<div>  
    <h4>Event Binding</h4>  
    <br/>   
    <button (click)="onClickMe()">Click me!</button>    
    <br/><br/>    
    <span> {{messageText}} </span>  
</div>
</xmp>
</pre>

<pre class="code-disp">
// app.module.ts

import { NgModule }      from '@angular/core';  
import { BrowserModule } from '@angular/platform-browser';  
import { FormsModule } from '@angular/forms';  
import { MyService } from './app.service';  
  
  
import { AppComponent }  from './app.component';  
  
@NgModule({  
  imports:      [ BrowserModule, FormsModule],  
  declarations: [ AppComponent],      
  bootstrap:    [ AppComponent ],  
  providers: [MyService]  
})  
export class AppModule {   
}
</pre>
Other important features of Angular 2 are it has new improved better event-handling capabilities, powerful templates and full-fledged support for mobile devices.



Javascript VS TypeScript in Angular 2

Directives Support

Improved Dependency Injection

Improved data binding

Support for a component-based architecture

Cross-platform Support

Improved routing

</span>
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
<span>
where is Angular 3? since Angular is developed in MonoRepo the Angular team skipped the Angular 3 version since there was active and huge development on angular router section.
Angular routing was misaligned with angular core versioning number and team decided to synchronize versioning of all the dependency's to avoid confusion for angular community. 
in Angular 4 TypeScript 2.2 was used which improves type checking and security, strictNullChecks,
introduced NgIf with else, template depricated and now we can use ng-template

Animation Package:
They've pulled animations from the Angular core and set them in the separate package. In case you don't use animations, this excess code won't end up on your creation packages.

NgIf with Else:
Now we can use else statement with ngIf along with an improvement on *ng-If and *ng-For and both can be achieved in Angular 4 and Angular 5.

using else :

<pre class="code-disp">
// app.component.html
<xmp>
<div *ngIf="isValid;else other_content">  

    content here ...

</div>

<ng-template #other_content>other content here...</ng-template>
</xmp>

// app.component.ts

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
  })
  export class AppComponent {
    isValid = false
  }
</pre>

Output: isValid // false
other content here... // #other_content block will be displayed


you can also use then else :


<pre class="code-disp">
// app.component.html
<xmp>
<div *ngIf="isValid; then content
      else other_content">   here is ignored 
</div>

<ng-template #content>content here...</ng-template>

<ng-template #other_content>other content here...</ng-template>
</xmp>

// app.component.ts

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
  })
  export class AppComponent {
    isValid = true
  }
</pre>

Output: isValid // true
content here... // #content  block will be displayed


or then alone :

<pre class="code-disp">
// app.component.html
  <xmp>
  <div *ngIf="isValid;then content"></div>

  <ng-template #content>content here...</ng-template>
  </xmp>
    
// app.component.ts

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
  })
  export class AppComponent {
    isValid = true
  }
</pre>

Output: isValid // true
content here... // #content  block will be displayed


Template:
The template is now ng-template tag instead of as &lt;template&gt; caused conflicts with other usages of the &lt;template&gt; tag It still works, therefore the Angular team changed it to use &lt;ng-template&gt; for Angular purposes

TypeScript 2.1 and 2.2 Compatibility:
The group has upgraded Angular to TypeScript version 2.2. 
This will enhance the security of Angular applications and rate of ngc and you'll receive far better type checking during your program.

StrictNullChecks:
Set skipLibCheck to true in your tsConfig file to enable strictNullChecks in an Angular
</span>
      `,
  },
  Angular5: {
    id: 'Angular5',
    title: 'Angular 5',
    preText: `
    With the new Angular 5, one can now choose whether or not to restrict newlines,
    tabs, and white spaces coming from your components and your application.
<code>
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

</code>
    `,
    imgUrl: '',
    description: `
<span>
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

<pre class="code-disp">

// app.component.ts

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    preserveWhitespaces:true
  })
  export class AppComponent {

  }


  /* If you want to restrict them throughout the application level then below
  is the sample code in config.json file. */
  
  "angularCompilerOptions": { 
  
    "preserveWhitespaces": false 
  
  }

</pre>
</span>
`,
  },
  Angular6: {
    id: 'Angular6',
    title: 'Angular 6',
    preText: '',
    imgUrl: '',
    description: `
<span>
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


ng add 
helps you install and download new packages in your angular apps.
ng-update
ng update is used to update and upgrade your packages it will help you to upgrade from Angular 5 to Angular 6, or any other package in your Angular app.

Tree Shaking
Tree shaking is a build optimization step which tries to ensure any unused code does not get used in our final bundle which helps you to make your app smaller. It uses new injectable services where we can register a provider directly inside the @Injectable() decorator, using the new providedIn attribute.

<pre class="code-disp">
// MyService.ts

@Injectable({ providedIn: 'root'})
export class MyService{}

</pre>

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
Long-term support(LTE) added to Angular from v4
</span>`,
  },
  Angular7: {
    id: 'Angular7',
    title: 'Angular 7',
    preText: `
    // In your project's package.json file
{
  "dependencies": {
    "my-legacy-library": "^1.0.0"
  }
}

// In your Angular application
import { MyLegacyComponent } from 'my-legacy-library';

@Component({
  selector: 'app-root',
  template: 
    "<my-legacy-component></my-legacy-component>"
  
})
export class AppComponent { }

In this example, the my-legacy-library is a library that has been published in the legacy format.
When the Angular Ivy compiler encounters this import, it will automatically run ngcc on the library to compile it to the new format,
allowing the MyLegacyComponent to be used in the Angular application.
    `,
    imgUrl: '',
    description: `
<span>
Google has released Angular version 7 in Oct 2018 with a lot of optimum features and significant changes like Angular Material, CLI prompts, Scrolling, Drag, and Virtual and Drop & Component Dev Kit (CDK)

CLI prompts
In Angular 7, the command-line interface (CLI) prompts have been updated to v7.0.2, When the user executes common commands like ng add @angular/material or ng new it will automatically prompt users commands like ng add @angular/material help you discover built-in features like routing or SCSS support.

New ng-compiler
Angular 7 added a new compiler called the Angular Compatibility Compiler (ngcc). Just like the name suggests, the angular compiler offers an 8-phase rotating ahead-of-time compilation(AOT) and most of the angular applications noticed a massive reduction (95-99%) in bundle sizes.

Angular Material CDK (Component Dev Kit)
Virtual scrolling
The scrolling package enables loads and unloads items from the DOM depending upon visible parts of lists, resulting into a much faster experience for users having huge scrollable lists.
Drag & drop
Now you can re-order the list just by dragging and dropping with new @angular/cdk/drag-drop module which provides free dragging, sorting within a list, transferring items between lists, animations and much more.
Application performance
Many developers include the reflect-metadata polyfill in the production, so they decided to fix this part by automatically removing it from your polyfills.ts file and to speed up the performance new applications will warn when the initial bundle is more than 2MB and will error at 5MB which user can modify it in angular.json file. 

Angular Do-Bootstrap
Angular 7 added a new life-cycle hook (ngDoBootstrap) and interface (DoBootstrap), It's used for bootstrapping modules that need to bootstrap a component.

Router
In Angular 7, If you try to trigger navigation outside of the Angular zone it logs a warning (only in development mode). Also, adds navigation execution context info to activation hooks.

Some Major updates in Angular 7
Angular 7 now supporting to TypeScript 3.1
Added a new ability to recover from malformed URLs
Downloadable console for starting and running Angular projects on your local machine
compiler-cli: update tsickle to 0.29.x
Export defaultKeyValueDiffers to private API 
</span>
    `,
  },
  Angular8: {
    id: 'Angular8',
    title: 'Angular 8',
    preText: '',
    imgUrl: '',
    description: `
  
Angular 8 has introduced with a bunch of workflow and performance improvements and a lot has changed in the framework under the hood in terms of tooling. Comparing Angular 6 vs Angular 7 vs Angular 8 Finally, Angular 8 released with ivy rendering which Angular team was along with updated angular core framework, Angular Material, and the Command Line Interface or CLI.

Ivy Engine
Ivy is a major part of this release, and it took most of the effort from Angular 6 to release it. Ivy is a long thought feature of Angular 8 vs Angular 7 where Ivy was still under active development. Ivy is a new rendering engine that will produce smaller bundle sizes But it's not recommended to start using it in production not just yet. Know more about what is ivy?

Web Workers
Web workers are essential for improving the parallelizability and the speed of your application. Angular 8.0 added support to CLI which provides one bundle for every web worker & they do it by writing code off the main thread. The new CLI allows writing code off the main thread in angular 8 vs angular 9 where the latest CLI takes advantage of newer updates automatically.

Lazy Loading
Lazy loading is based on the concepts of Angular Routing and Angular 8 added support for dynamic EcmaScript imports in router configuration as it helps bring down the size of large files by lazily loading the files that are required.

Angular Firebase
Angular 8 officially added support for firebase and now deploying an Angular app to Firebase is very easy, and it doesn’t take too much time using Angular CLI, Service Worker.

Differential loading
Your Angular 8 apps now will more performant thanks to differential loading and two bundles are created for a production build i,e bundle for new browser with ES2015+ and with an old browser with ES5 version. The correct bundle will automatically load by the browser with new ES6 modules present in the new browser.
The ng build command with the --prod flag will take care of bundling everything out of the box.

Opt-In Usage Sharing
As opposed to Angular 9 vs Angular 8 can switch between IVY and the regular View engine build. It enables opt-in to sharing telemetry about your Angular CLI usage with the Angular and can collect data like commands used and the build speed if users allow them which will help developers improve in the future.

Angular CLI Builders
The CLI Builder API is stable and available to angular developers who want to customize the Angular CLI by adding or modifying commands. Comparing Angular 8 vs Angular 9, version 9 tracks the libraries and updates them using Bazel.


Major features included in Angular 8

AngularJS API Migration Improvements with $location service
Updated Typescript to 3.4.x
@angular/platform-webworker and@angular/platform-webworker-dynamic both the packages are deprecated
@angular/http removed from the list of packages
ng-build, ng-test, and ng-run are equipped to be extended by 3rd-party libraries and tool.
Angular router backward compatibility
Dart-sass for Sass files
The ViewChild and ContentChild decorators now must have a new option called static.
    `,
  },
  Angular9: {
    id: 'Angular9',
    title: 'Angular 9',
    preText: `
  // The Ivy compiler and runtime handles style in a predictable manner.
  With this Angular 9 feature, one can manage styles through a clear, consistent order of precedence which is not dependent on timing.

  [style.color]="myColor"
  [style]="{color: myOtherColor}" myDirective>
  @Component({
    host: {
      style: "color:blue"
    },...
  })
  ...

  @Directive({
    host: {
      style: "color:black",
      "[style.color]": "property"
    },...
  })
  ...
    `,
    imgUrl: '',
    description: `
Angular 9 was released on the 7th of Feb 2020, with some exciting new features. Along with these existing features have also been modified. The highlight of this version is the default IVY compiler which forms the core structure of the entire framework.

IVY as a Default Compiler
Ivy is a default compiler in Angular 9 vs Angular 8 where it was an opt-in preview engine. This is one of the major differences between angular 9 and angular 8. The default IVY compiler reduces the bundle size by 25-40 percent which enables better performance. This enables the developers to decrease the size of files making them user-friendly.

 IVY checks the bindings within the templates of any application and then reports any kind of issues it finds. This helps in detecting any bugs earlier in the development process. It then compiles the codebases with tools and techniques to debug its applications. In angular 9, the IVY manages the style binding without being dependent on any timings. Angular 9 maintains most of the drawbacks without losing performance.

More reliable ng-update
The ng update is the basic update to the current CLI framework that takes advantage of newer updates automatically. This will also enable us to give updates and information about any kind of migration in Angular 9 vs Angular 8 where we have seen the CLI just speeding your application and improving the parallelizability.

API Extractor Updates

Angular depends on various services and libraries that are difficult to track. API landscape of these libraries helps find the missing updates so that they are communicated easily.

New options for 'providedIn'
This angular 9 feature provides us with certain options while creating services in Angular. for e. g

platform— The providedIn: 'platform' makes the service available in a special single platform that is shared by all applications on the page.
any— It provides a unique instance in every module, instilling the token.
IDE and Language Service Improvements
The Angular language service extension includes a set of useful extensions in order to build up the development experience with Angular. The extensions include Angular snippets, ESLint, and debugging extensions. Along with these performance and stability issues have also been fixed.

Updated to Typescript 3.7
The typescript 3.7 was released in November 2019 and it gave a major hit to the angular 9. The angular 9 is updated to work with the Nullish coalescing and optional chaining feature of the Typescript 3.7 which helps to stay in sync with the environment. Both Angular 8 vs Angular 9 features the Typescript, however, Angular 8 used Typescript 3.4.

Component Harness
Angular 9 provides alternative ways to test components to make sure that the unit tests are correctly audited and less frail. Angular finds the component on its own.the compile rand runtime have been updated in angular 9, so there is no longer a need to identify this in the entryComponents array.

The Phantom Template Variable Menace
In the previous versions, phantom variables were not cited in the template’s related component. Building the phantom variables can usually threaten the applications. With this version, a compiler error shows up, when a template variable is created that has not been characterized in a component.

Major updates in Angular 9
Selector-less directives were already supported in the old version but were missing in the Ivy preview in Angular 8 vs Angular 9 where this feature has been added.
The AOT builds will be noticeably faster ensuring a significant change in the compiler's performance.
With IVY we see an improvement in the build error. It gives less time for the builds to complete enabling all the error messages easier to read.
The Angular framework in the new version uses unique techniques and tools to debug its applications by themselves.
The deprecated versioned files option for service workers in the service worker asset group config has been removed.
The ViewEngine in this version translates the templates and components into regular HTML and JavaScript for the browser can interpret and display them.

    
    `,
  },
  Angular10: {
    id: 'Angular10',
    title: 'Angular 10',
    preText: '',
    imgUrl: '',
    description: `
Angular 10 was released on the 24th of June, 2020 with the beta version.  This major release of the latest Angular version is going to focus on the ecosystem, quality tools, and the core structure in its entirety, rather than focus on new features. This determines that this version will have a lot of deprecation and upgrades.

Angular 9, which was released in February has paved the way for this version of the google-developed, typescript-based framework. when compared between Angular 10 vs Angular 11, Angular 11 is bigger in size as they have introduced new features rather than working on just the ecosystem. Let's Have a look at the features:

Language Service
Angular 10 comes with the language-service-specific compiler that enables typecheck files to create ScriptInfos as necessary. Angular 10 has also negated the use of Autocompletion from HTML entities, such as &, <, etc., for safeguarding the inhouse core functionality of Angular LS supporting the questionable value and a performance cost. 

Compiler Update
The latest Angular version has added a compiler interface that wraps the actual ngtsc compiler. There are some additional features to the metadata like the Dependency information, ng-content selectors, Angular Language Service. These features propagate  the precise cost span in an ExpressionBinding of a micro syntax expression. 

New Default Browser Configuration
New Angular 10 feature that it uses browser configuration for all the new projects outdoing the old ones. Users will only have to add the required browsers in the .browserslist RC file which will enable ES5 builds and differential loading for browsers. 

Optional Stricter Settings
Angular version 10 provides a more strict project setup for making another workspace with ng new. Once this flag, “ng new --strict” is enabled, it begins the new undertaking with new settings that will help in maintaining and assisting in order to catch bugs well ahead in the development process.

Ngcc
The usage of the A Program-based entry-point finder in Angular 10 helps the entry-point finder to reach a program that is characterized by a tsconfig.json record. This choice catalyzes the cycle in places that are introduced with a relatively small number of entry points brought into that application. Consequently, this helps in manifesting and reducing the file size of the entry-point.

Performance Improvements
Angular 10 has witnessed a reduction in the size of the entry-points, leading to an improvement in performance. The caching of the dependencies and the calculation of basePaths further aids in improving the performance.

Typescript 3.9, TSLib 2.9 & TSLint v6
This is one of the significant features comparing Angular 10 vs 11. As opposed to the previous version of Angular 9, which utilized typescript 3.7, Angular 10 has been moved up to Typescript 3.9 where the community has dealt with performance, polish, and stability. Error-checking, completions, quick fixes, accelerating the compiler, and altering experience are some of the important elements that  Typescript 3.9 gives. Additionally, Angular 10,  has been moved up to work with TSLib 2.9 and TSLint v6.

Localization
Angular 10 performance improvements include the merging of multiple translation documents by methods for a message ID, which was previously done for one file in angular 9.

Service Workers
Angular 10 ignores the Vary headers when the sources from the Service Worker stores are recovered when their headers are not similar.  In case any application needs to separate any reactions, it turns out to be significant to guarantee that the Angular ServiceWorker is arranged to avoid caching the affected resources.

Deprecation
Angular 10 has witnessed a couple of deprecations like typescript 3.6 and 3.7, the incorporation of ESM5 or FESM5 packs, and the deprecation of ESM5 or FESM5 bundles. The community has also seen deprecation of older browsers including IE 9, 10, and Internet Explorer Mobile. The deprecation of ESM5 or FESM5 bundles has helped Angular 10 to reduce 119MB of download and install time while running a yarn or npm introduction for Angular bundles and libraries. 

Core
Angular 10 has now logged in all the warnings as errors,  without breaking the app. Generic is made compulsory in Angular 10 for ModuleWithProviders to work with the Ivy gathering just as delivering pipeline, guaranteeing that if an engineer is utilizing View Engine, then no build error is going to be issued. 

Converting pre-Ivy code
The pre-ivy conditions in Angular 10 support changes in the ivy conditions. This helps the royal residence to be accepted as a forerunner for running NTSC at the application level. All the compilations in the future, as well as the linking operations, should be made in light of a legitimate concern for changing versions of dependencies.
    
`,
  },
  Angular11: {
    id: 'Angular11',
    title: 'Angular 11',
    preText: '',
    imgUrl: '',
    description: `
Angular 11 released on 14th November 2020.  It is the newest and the latest version of the Google-developed web framework as a production release. The major features of this version are router performance improvements, automatic inlining of fonts and stricter types. Let's have a look at the deprecations and breaking changes and more features of Angular 11. 

Updated Hot Module Replacement (HMR) Support
Angular 11 features Hot Module Replacement mechanism that lets the modules to be replaced without a full browser refresh.  It is an old idea for Angular developers where the team has worked with HMR in the previous versions. One of the new features of Angular 11 is that it supports HMR with required configuration and changes in code that make inclusion of Angular less ideal. With HMR the changes to components, styles, and templates are instantly updated into the running application without having to refresh the full page. 

Updates on Operation Byelog
The Angular team has invested some significant engineering effort on Operation Byelog where they focussed on the triaging issues and PRs and having a better understanding of the extensive community needs. With Angular 11, All the issues have now been effectively triaged in every one of the three monorepos that continue with the new issues that get reported This process also helps with the few popular concerns in the router and forms as well. The issues in Angular 11 will be triaged within 2 weeks of the occurrence, reducing the size of the Angular backlog. 

Automatic Inlining of Fonts
Angular 11 features automatic font inlining that occurs every time users set a flag in the angular.json. Angular inlining helps the Google Fonts to convert in a way that inlines the index HTML.  The inline fonts get downloaded in the Angular CLI during compile time that are being used and linked in the application. The features of Angular 11 take advantage of the default optimization for the build to run on the CI whenever the internet is available.

Component Test Harnesses
The Component Test Harnesses gives a powerful and clear API surface that assists with testing the Angular Material components. It gives an approach to developers to communicate with Angular Material parts by utilizing the upheld API while testing. This feature was first introduced in Angular 9.  The difference between Angular 9 and Angular 11 with the Component Test Harnesses is that Angular 11 comes with a parallel function, performance improvements, and new APIs. The manual change detection function, helps the developers to disable the automatic change detection in unit tests as well as access the finer-grained control of change detection.

Updated Language Service Preview
  The Angular Language Service in Angular 11 provides helpful tools for developing productivity and fun within the Angular environment. The current type of language administration relies upon View Engine that gives all the more impressive and precise experience for developers.  Angular 11 changes the standard for the language administration to accurately infer generic types in templates just like how the TypeScript compiler does. This feature being still in development gives a new more powerful and accurate Ivy-based language service.

Faster Builds
The faster development and build cycle in Angular 11 has brought updates into some key areas, which are, Ngcc - the Angular compiler and TypeScript v4.0. Angular 11 introduces the  ngcc update process in a 4x faster process so that users will have to spend relatively less time waiting for the builds and rebuilds to complete. While profiling the Angular compiler, the Angular contributor Joost makes the Typescript compiler faster for improving the Ngcc preparing the Angular environment for Typescript 4.1, which will get faster builds.

Experimental Webpack 5 Support
Angular 11 supports the use of webpack that incorporates countless documents into a single bundle. Webpack 5 is the latest version that was delivered several months back. It actually needs an ideal opportunity to be steady. Right now, one can explore differences regarding module federation. This webpack v5, later on, will make the way for Faster builds and disk caching as well as Smaller bundles with cjs tree-shaking. 

Moving to ESLint
Angular 11 performance improvements support deprecation of the use of TSLint and Codelyzer which have been shipping a default implementation for linting in the previous versions.  It is one of the most important changes in Angular version 11.  Angular developers seem to deprecate the use of the TSLint and instead recommend migration to ESLint. The Angular developers have ensured a smooth transition by collaborating to the supported linting stack.

Router
The major Angular 10 vs angular 11 difference revolves around the use of the router. In the earlier versions, while utilizing the RouteReuseStrategy #shouldReuseRoute strategy, there was a worry with respect to future and next courses being exchanged for child courses. This issue is fixed in Angular 11, with new parameter types that will allow a variable of type NavigationExtras to be passed in. However, they don't let the object literals to pass in as they specify known properties and types only that don't share properties for all intents and purposes with the ones in the Pick.  This issue can be fixed by the users who can specify properties from the NavigationExtras 

Forms
The amendments made in Angular 11 have improved the typing for validators and asyncValidators that were earlier not available. Type of AbstractFormControl.parent in Angular 11 incorporates null that is remembered for the sorts of .parent. Angular version 11 migration adds the non-null assertion operator wherever it's required.  The async validators in The FormControl, FormGroup and FormArray class that were initially defined at the initialization time are now emitted into the statusChanges observable. `,
  },
  Angular12: {
    id: 'Angular12',
    title: 'Angular 12',
    preText: `
    Angular templates in v12 can even bring the force of nullish coalescing with the new syntax structure which can be utilized by the developers to improve the complex conditionals. 
    
    For instance:{{age !== null && age !== undefined ? age : calculateAge() }} 
    Becomes:
    {{ age ?? calculateAge() }}
    `,
    imgUrl: '',
    description: `
Angular version 12 released on 12th May, is the latest and the newest version of the Google-developed web framework as a stable one. Some of the major improvements of this version are improvement in styling, Typescript 4.2, webpack 5 support, etc. Let’s study the features in detail.

Ivy Everywhere
Amongst many deprecations in the Angular environment, the deprecation of the View Engine in Angular 12 is certainly the most important of all the deprecations. This deprecation will be eliminated in future significant releases as well. The Ivy everywhere refers to the methodology that works towards the objective of combining the Angular ecosystem on Ivy. The View Engines are being used by the developers, however, the developers are wanting to transition to Ivy as soon as possible. 

Migrating from legacy i18n message IDs
Since Angular version 11, new tasks are normally intended to use the new message ids and they as of now have the tooling to move existing endeavors with existing interpretations. In the current version, there are diverse legacy message-id plans being used in the i18n system. These inheritance message-ids are fragile as issues can arise subject to whitespace and the getting sorted out organizations and ICU articulations. To handle this issue the community is moving away from them. The new standard message-id configuration is significantly more extreme and common. This arrangement will lessen the pointless interpretation invalidation and related retranslation cost in applications where interpretations don't facilitate due to whitespace changes for example. 

Protractor: planning for future
The fate of the protractor is now with the Angular team and the community. They are currently now investigating the input shared in the RFC and figuring out the best future for Protractor. The group has decided to prohibit it in new tasks and, in light of everything, furnish alternatives with acclaimed outsider arrangements in the Angular CLI. The group is as of now working with Cypress, WebdriverIO, and TestCafe to help angularjs development company with getting elective arrangements. More information to come as this develops. 

Improvements in styling
In Angular v12, Components will have support for inline Sass in the styles field of the @Component decorator. Angular CDK and Angular Material have received Sass’s new module system inside. If your application uses Angular CDK or Angular Material, it is important to change from node-sass to the sass npm package. The node-sass package is unmaintained and no longer stays mindful of new feature additions to the Sass language. 

Deprecating support for IE11
The evergreen platform of Angular suggests that it keeps up with the propelling web ecosystem. Eliminating help for legacy browsers licenses them to focus on giving modern arrangements and better assistance to designers and customers. The team has additionally incorporated another deprecation warning message as another Angular 12 element — and eliminated support for IE11 in Angular v13. 

Support from the Community
The angular community has stepped up to work diligently for improving the Angular experience. They are constantly endeavoring to improve the Angular learning experience for designers.  As a part of Angular 12 new highlights, they have carried out some huge upgrades to their documentation. They have additionally refreshed the angular.io contributor's guide that will help people wanting to improve the docs. 

Typescript 4.2
The support of Typescript 4.2 is one of the major updates of Angular 12.2. It was released on the 23rd of February with some exciting features and breaking changes that have impacted the developers and Angular 12. Some of the features of Typescript 4.2 are changes in tuple types, abstract construct signatures, improvements for in operator, improved type alias, improvements to the compile process.

Angular Universal
One of the significant upgrades of the Angular 12 feature is Inline basic CSS that is of course in the nguniversal/normal. The Angular universal now upholds intermediary arrangement in ssr-dev-worker developer. It has also updated schematics to utilize the default configuration. This rendition supports an SSR motor called Clover alongside another motor which appears to be encouraging. The new motor intends to improve on things to produce application shells without an additional form and eliminate the necessity for various forms for SSR/prerender. 

Webpack 5.37 support
Angular 12 features the support for the production-ready experimental Webpack 5 that was first introduced in Angular 11. This is one of the major differences between Angular 11 vs Angular 12. Webpack is the fundamental piece of the Angular CLI puzzle, and it has a significant influence on bundle size, builds execution, etc. Webpack 5 is a critical conveyance which is as it ought to be. It joins different breaking changes and highlights. Webpack 5 aids in Improving the long-term caching, form execution, similarity with the Web stage, bundle size with better code generation. 

Nullish Coalescing
This Feature of Angular 12 has helped developers to write cleaner code in TypeScript classes. Angular templates in v12 can even bring the force of nullish coalescing with the new syntax structure which can be utilized by the developers to improve the complex conditionals. 

<pre class="code-disp">

/* Angular templates in v12 can even bring the force of nullish coalescing with the new syntax structure
 which can be utilized by the developers to improve the complex conditionals. */
    
For instance:{{age !== null && age !== undefined ? age : calculateAge() }} 
Becomes:
{{ age ?? calculateAge() }}
</pre>
New Dev Tools
Two or three days after the Angular 12 release date, the Angular team has detailed the accessibility of Angular Dev Tools for Google Chrome. The implanted profiler can see and record the change recognition events which can be checked regarding which detection cycle and parts took the most significant length of time. Prior the Angular community had semi-official Dev Tools which were not viable with Ivy. So this is a mutually beneficial solution for all. 

ng API improvements
The ng troubleshooting API is one of the improved features of Angular 12. There are a couple of functionalities that have been executed specifically getDirectiveMetadata and esetProfiler to investigate APIs for primary review of utilizations. The getDirectiveMetadata can be used to recuperate information about parts and directives. The esetProfiler can be utilized to follow layout creation lengths, lifecycle hooks preparing, and format updates. The API also can give knowledge into the working of the applications at runtime.
`
  },
  Angular13: {
    id: 'Angular13',
    title: 'Angular 13',
    preText: `

  // Here’s an example of creating dynamic components using previous versions of Angular.


  @Directive({ … })
  export class Test {
    constructor(private viewContainerRef: ViewContainerRef,
                private componentFactoryResolver: 
                        ComponentFactoryResolver) {}
    createMyComponent() {
        const componentFactory = this.componentFactoryResolver.
                             resolveComponentFactory(MyComponent);
    
        this.viewContainerRef.createComponent(componentFactory);
    }
  }

  // Due to the improved ViewContainerRef.createComponent API, it is now possible to create dynamic components with less boilerplate code. 

  @Directive({ … })
  export class Test {
      constructor(private viewContainerRef: ViewContainerRef) {}
      createMyComponent() {
          this.viewContainerRef.createComponent(MyComponent);
      }
  }
    `,
    imgUrl: '',
    description: `

1. Typescript Update
Previously 4.4.2 version of Typescript was supported, now Typescript 4.4 support has been added in Angular 13. Typescript 4.4.2 and older than that is no longer supported. This update can be seen in the package.json files.

Control Flow Analysis, performance boost, new flags, and better IntelliSense are some of the key highlights Typescript 4.4 version.

2. Removal of View Engine
This is one of the most notable Angular 13 features leading to faster compilation and increased productivity in the framework. The view-engine angular 13 feature has been completely removed to reduce the complexity of the Angular 13 codebase.

Angular 13 has completely shifted to Ivy which makes it easier for developers to improvise the dynamic components easily.

To ensure that this transition goes well, the framework has converted all internal tools to Ivy beforehand.

3. NodeJS Support
Versions older than v12.20.0 are no longer supported by the Angular framework. Web developers might face certain issues while installing different packages if working with the older versions.

16.14.2 is the current stable version of NodeJs. For ensuring seamless deployment of your project, it is recommended to install the latest versions of NodeJs.

4. Angular CLI Improvements
Angular CLI stands out to be one of the most crucial aspects of the overall angular architecture. By reducing complexities on a broad scale, Angular CLI helps standardize the process of handling the challenges of the present web development ecosystem.

With the release of Angular 13, significant changes to the Angular CLI are introduced for performance improvement.

Built-in support of persistent build cache
Easy enabling and disabling options for the build cache by the angular.json file
Up to 68% increase in speed of build-cache leading to faster deployment activities.
These are the notable Angular CLI improvements that are introduced in the new Angular 13 features and updates.

5. Validation Improvements
They have now introduced the new type 'Form Control Status' in angular forms. The main aim of this is to have a better check on form controls.

Form control status includes all possible values like ‘Valid’, ‘Invalid’, ‘Pending’, and ‘Disabled’.

These are some of the changes observed regarding the Updating Validators:

abstractControl.setValidators

abstractControl.addValidators

abstractControl.removeValidators

abstractControl.hasValidtors

It is now easier to enable and disable validations like min, max, email, etc.

6. Removal of IE 11 Support
This stands out to be one of the significant Angular 13 features. Angular 13 no longer supports IE11. CSS code paths, build passes, polyfills, special JS, and other parameters that were previously required for IE 11 have now been completely dropped off.

As a result, Angular has grown faster, and it is now easier for Angular to use new browser features like CSS variables and web animations using native web APIs.

Developers need to focus more on Web APIs, web notifications, WebRTC, WebGL, etc.,

7. Changes in the Angular Package Format (APF)
The Angular Package Format (APF) describes how Angular Framework packages and View Engine information should be formatted and assembled. Some substantial improvements are seen in the new edition of APF.

Older output formats that include View Engine-specific Metadata have been dropped off.
Standardization of modern JS formats such as ES2020.
Libraries built with the latest version of the APF no longer require the use of ngcc.

8. Framework Modifications and Dependency Updates
RxJS 7.4 is now available as the version for apps created with ng-new. Existing apps using RxJS v6.x need to be manually updated it using the npm install rxjs@7.4

9. Creating dynamic components
One Ivy-enabled API update in Angular 13 is a more streamlined method for dynamically constructing a component. 
ViewContainerRef.createComponent no longer requires an instantiated factory to construct a component (you no longer need to use ComponentFactoryResolver).

<pre class="code-disp">

// Here’s an example of creating dynamic components using previous versions of Angular.


@Directive({ … })
export class Test {
  constructor(private viewContainerRef: ViewContainerRef,
              private componentFactoryResolver: 
                      ComponentFactoryResolver) {}
  createMyComponent() {
      const componentFactory = this.componentFactoryResolver.
                           resolveComponentFactory(MyComponent);
  
      this.viewContainerRef.createComponent(componentFactory);
  }
}

// Due to the improved ViewContainerRef.createComponent API, it is now possible to create dynamic components with less boilerplate code. 

@Directive({ … })
export class Test {
    constructor(private viewContainerRef: ViewContainerRef) {}
    createMyComponent() {
        this.viewContainerRef.createComponent(MyComponent);
    }
}
</pre>
`
  },
  Angular14: {
    id: 'Angular14',
    title: 'Angular 14',
    preText: `
    // Refer to the following code to create typed Angular forms.

    export class SampleComponent {
      var contactForm = new FormGroup({
       name: new FormControl<string>('', { nonNullable: true }),
       email: new FormControl<string>('', { nonNullable: true }),
       contactNumber: new FormControl<number>(0, { nonNullable: false })
      });
    }

    /* -------------------------------- */

    // we can add the router title without any additional import on the page. Refer to the following code example.
    
    const routes: Routes = [{
      path: 'home',
      component: HomeComponent
      title: 'Home page'  // <-- Page title
    }, {
      path: 'about',
      component: AboutComponent,
      title: 'About page'  // <-- Page title
    }];

    /* -------------------------------- */

    // Now you can bind protected component members directly from the template. Refer to the following code example.

    @Component({
      selector: 'app-root',
      template: '{{ title }}',  // Now compiles!
    })
    export class SampleComponent {
      protected title: string = 'Angular 14';
    }

    /* -------------------------------- */

    // This injector enables customization of dependency injection behavior within the specific template
   
    viewContainer.createEmbeddedView(templateRef, context, {
      injector: injector,
    })
    `,
    imgUrl: '',
    description: `
1. Angular gets simplified with Standalone Components
This is one of the major advancements that can be seen with the release of Angular 14. With the addition of standalone components, the process of writing Angular Apps becomes much simpler and easier than before.

Standalone components eliminate the need of using NgModules, and we can now get the developer preview of a new way of writing components, one without the NgModule i.e Standalone Components.

For now, this feature is available in the developer preview, meaning that it might change later until it becomes fully stable. This change could majorly alter the process of writing Angular Apps in the future.

2. Typed Forms
When it comes to Angular, there are two distinctive approaches for handling the forms. They can be either created by the template-driven approach or by using the reactive approach.

This newly introduced feature of Typed Forms is only applicable to reactive forms. The values inside form controls, groups, and arrays are type safe. It improves the overall “ type” safety of the applications developed using Angular.

The updated schematics enable progressive migration to Typed forms, allowing you to gradually add typing to your existing forms.
<pre class="code-disp">
// Refer to the following code to create typed Angular forms.

export class SampleComponent {
  var contactForm = new FormGroup({
   name: new FormControl<string>('', { nonNullable: true }),
   email: new FormControl<string>('', { nonNullable: true }),
   contactNumber: new FormControl<number>(0, { nonNullable: false })
  });
}
</pre>
3. Streamlined Page Title accessibility
While developing apps your page title distinctively represents the content of your page. In the previous release of Angular 13, the process of adding title was streamlined with the new Route.title property in the Angular Router.

Now with Angular 14, there are no more additional imports required when adding a title to your page.
<pre class="code-disp">
const routes: Routes = [{
  path: 'home',
  component: HomeComponent
  title: 'Home page'  // <-- Page title
}, {
  path: 'about',
  component: AboutComponent,
  title: 'About page'  // <-- Page title
}];
</pre>

4. New primitives in the Angular CDK
The Component Dev Kit (CDK) from Angular provides a comprehensive set of tools for creating Angular components. The CDK Menu and Dialog have now been promoted to stable version in Angular 14!

The addition of new CDK primitives in Angular 14 allows for the creation of more accessible custom components.

Some additional Angular 14 features

1. Angular DevTools is now available offline

The Angular DevTools debugging extension can now be used in offline mode as well. Firefox users can find the extension under Mozilla's Add-ons for Firefox users.

2. Angular CLI enhancements

Angular 14 has got an amazing feature of autocomplete! Typos are bound to often while typing your code, resulting in command-line errors. To fix this, ng completion in version 14 now includes real-time type-ahead autocompletion!

Detailed analytics information using the ng analytics and improved ways to control the cache information using the ng cache are some of the additional features.

3. Optional injectors

When building an embedded view using the Angular 14 version, you may now specify an optional injector through ViewContainerRef.createEmbeddedView and TemplateRef.createEmbeddedView.

<pre class="code-disp">
// This injector enables customization of dependency injection behavior within the specific template
   
viewContainer.createEmbeddedView(templateRef, context, {
  injector: injector,
})
</pre>
4. Built-in improvements

Angular 14 adds support for TypeScript 4.7 and now targets ES2020 by default, allowing the CLI to deploy smaller code without downgrading.

Another noteworthy Angular 14 feature is that you can now link to protected component members directly from your templates. This offers more control over the public API surface of the reusable components.

<pre class="code-disp">

// Now you can bind protected component members directly from the template. Refer to the following code example.

@Component({
  selector: 'app-root',
  template: '{{ title }}',  // Now compiles!
})
export class SampleComponent {
  protected title: string = 'Angular 14';
}

</pre>

5. Extended developer diagnostics

This new Angular 14 feature provides an extendable framework that enables better insights into your templates and provides suggestions for possible improvements in them.

How to upgrade

To avail of the benefits of Angular 14 features, developers can run ng update in their projects.

ng update @angular/cli @angular/core
Or you can refer to update.angular.io for further guidance and instructions regarding the installation of Angular 14.

To wrap up,

These were the noteworthy changes in the latest version of Angular 14.

The Angular developer community strives to make sure that web developers get better versions of the framework allowing them to stay updated with the rest of the online ecosystem and users' needs.

Now, that you’re aware of the key features and upgrades, it’s time to shift to Angular 14!
    `
  },
  Angular15: {
    id: 'Angular15',
    title: 'Angular 15',
    preText: '',
    imgUrl: '',
    description: `
1. MDC-Based Components
Angular 15 has refactored many components to follow Material Design Components for Web (MDC). These MDC-based components help to improve accessibility. Since they are now a part of the Material Design spec, developers can adapt faster to a future version.

2. Standalone components
The module is baggage that many Angular programmers didn’t want in code. However, till Angular 14, there was no other way around the module.

That’s where standalone components play a crucial role. Angular made the Ng modules optional, so programmers can now build standalone components without constantly relying on or updating Ng modules.

Another good thing about it is that components are stable and self-contained and manage their dependencies independently. Developers can also package, reuse, and lazy load them. This feature simplifies Angular development to a new level, as developers don’t have to understand multiple concepts before making components.

3. Stack Traces for Better Debugging
This is good news for all Angular developers, as finally, Google heard the developer’s request. The community was confused over the error message. And since debugging is a huge part of development, this area needs improvement.

Fortunately, Angular 15 has resolved this issue by improving stack traces and making them more meaningful. As a result, developers will get simplified error messaging with stack traces that can be linked only to the code frame that they altered.

4. Esbuild Support to Enable Quick Build
The web pack might be a popular module bundle tool. However, it was previously too complex and slow to configure, which pulled away many developers from experimenting. Fortunately, this bundler tool is much faster, with support for file replacement, SVG template, SaaS, and Ng build watch support.

5. Directive Composition API to elevate code usability
Angular directives provide a way to encapsulate reusable behavior. In simple terms, developers can use it for repetitive behaviors and to apply attributes, CSS classes, and event listeners to any elements. The new directive composition API in Angular 15 takes this to the next level by helping you apply directives to the component’s host element within the component Typescript class.

6. Router Standalone API
Minko Gechev updated about the new standalone router API in recent tweets. According to them, this standalone API will use routers without the Ng module.

The Angular router is an essential part of the Angular ecosystem. With it, developers can build single-page applications with multiple views and add navigation. The best part about this feature is the reduced app size. As his tweet mentioned, it can shave over 11% of the app size.

7. NGOptimized Image Directive for Better Image Loading
Angular 15 also improved the NgOptimisedImage directive, which was released in the previous version. The main aim here is to help images load efficiently. This directive automatically loads a correctly sized image whenever the user makes a request, thus reducing the downtime time of the image.

This way, developers don't have to input image dimensions manually, as it automatically fills the image of the parent container. This is especially helpful when the dimensions are unknown.

8. Less Boilerplate Code for Easy Testing
As per their recent tweet, the Angular 15 version reduces the boilerplate needed to test anything, depending on Router. They also added tests that helped trigger navigation during testing. As a result, Angular 15 increases test coverage and reduces risks of uncaught errors in case the Router code is changed.
    `
  },
  Angular16: {
    id: 'Angular16',
    title: 'Angular 16',
    preText: '',
    imgUrl: '',
    description: `<span>
1. Angular Signals
Angular Signals is the main feature developers have been waiting for since the Angular 16 roadmap was released. Although Solid.js inspired this concept, it is a whole new concept for Angular. It allows you to define reactive values and express dependencies between them. In other words, you can efficiently use Angular signals to manage state changes within Angular applications.

A signal can be recognized as a regular variable that users can synchronously access. But it comes with some additional features like notifying others (component templates, other signals, functions, etc.) of its value changes and creating a derived state in a declarative way.

The following example shows how to use Angular signals.
<pre class="code-disp">

import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: '
   <xmp> <h1>Calculate Area</h1>
    <p>Answer : {{ area() }}</p>
    <button (click)="calculateArea(10,10)">Click</button> </xmp>
  ',
})

export class App {
    height = signal(5);
    width = signal(5);
    area = computed(() => this.height() * this.width());
    constructor() {
      effect(() => console.log('Value changed:', this.area()));
    }
    calculateArea(height: number, width: number) {
      this.height.set(height);
      this.width.set(width);
    }
}

</pre>
In this example, I have created a computed value area and two signals named height and width. When the values of the signals are changed by invoking the calculateArea() function, the computed value will be updated and displayed in the template. Here is a working Stackblitz example for you to try it.

Although this looks fantastic, Angular has not abandoned zone.js and RxJS. Signals are an optional feature, and Angular will still work without them. Angular will gradually improve Signals in upcoming versions to make it a complete package.


2. Server-Side Rendering
The lack of server-side rendering (SSR) support was one of the most significant drawbacks of Angular compared to React. Angular 16 has resolved this issue with some significant improvements for server-side rendering.

Before, Angular used destructive hydration for SSR. In destructive hydration, the server first renders and loads the application to the browser. Then, when the client app gets downloaded and bootstrapped, it destroys the already rendered DOM and re-renders the client app from scratch. This approach caused significant UX issues, like screen flickering, and negatively impacted some Core Web Vitals such as LCP or CLS.anug.

Angular 16 introduces a new approach called non-destructive hydration to prevent these drawbacks. The DOM is not destroyed when the client app is downloaded and bootstrapped. It uses the same DOM while enriching it with client-side features like event listeners.

Non-destructive hydration is still at the developer preview stage. But you can enable it by adding provideClientHydration() as a provider when bootstrapping the application.
<pre class="code-disp">

import {
 bootstrapApplication,
 provideClientHydration,
} from '@angular/platform-browser';

...

bootstrapApplication(RootCmp, {
 providers: [provideClientHydration()]
});
</pre>
According to the official Angular release note, this is just the beginning. They plan to explore partial hydration as the next step and work on several developer requests. You can find more about the Angular SSR development plan here.

3. Experimental Jest Support
Jest is one of the most-used testing frameworks among JavaScript developers. Angular has listened to developer requests and has introduced experimental Jest support with Angular 16.

All you have to do is install Jest using npm and update the angular.json file.
<pre class="code-disp">

// Install jest
npm install jest --save-dev

// angular.json
{
  "projects": {
    "my-app": {
      "architect": {
        "test": {
          "builder": "@angular-devkit/build-angular:jest",
          "options": {
            "tsConfig": "tsconfig.spec.json",
            "polyfills": ["zone.js", "zone.js/testing"]
          }
        }
      }
   }
}
</pre>
They plan to move all the existing Karma projects to Web Test Runner in future updates.

4. esbuild-Based Build System
Angular 16 introduces an esbuild-based build system for the development server (ng serve). Vite powers this new development server and uses esbuild to build artifacts.

This is still at the developer preview stage, but you can enable it by updating the angular.json file with the following.
<pre class="code-disp">

"architect": {
  "build": { 
    "builder": "@angular-devkit/build-angular:browser-esbuild",
...
</pre>
5. Required Inputs
In Angular 16, you can now define input values as required. You can either use the @Input decorator or the @Component decorator inputs array to define one.
<pre class="code-disp">

export class App {
  @Input({ required: true }) name: string = '';
}

// or
@Component({
  ...
  inputs: [
    {name: 'name', required: true}
  ]
})
</pre>
6. Router Inputs
Angular 16 allows you to bind route parameters into component inputs, removing the need to inject ActivatedRoute into the components. To enable this feature, you must import RouterModule and enable the bindToComponentInputs property in the app.module.ts file.
<pre class="code-disp">

@NgModule({
 imports: [
   ...
   RouterModule.forRoot([], {
     bindToComponentInputs: true 
   })
   ...
 ],
 ...
})
export class AppModule {}
The following example shows how we can bind query params to component inputs.

// Route
const routes: Routes = [
 {
   path: "articles",
   component: ArticleComponent,
 },
];

// Component
@Component({})
export class ArticleComponent implements OnInit {
  
  @Input() articleId?: string; 
  
  ngOnInit() {
  
  }
}
Now, when you navigate to the articles route, you can pass query params using the name of the component input.
In this case, an example URL will look like the following.

http://localhost:4200/articles?articleId=001
If the input name is too long, you can rename the query parameter.

http://localhost:4200/articles?id=001

@Input('id') articleId?: string;

You can also use this approach to bind path parameters and route data.
</pre>

7. Standalone Project Support
Angular 14 started supporting standalone components, which are independent of modules. Angular 16 takes this to the next level by supporting standalone project creation.

Angular 16 has a flag to create a standalone project through the Angular CLI. You have to execute ng new command with the –standalone flag. Then, it will generate a project without NgModules.
<pre class="code-disp">
  ng new --standalone
</pre>
</span>
    
    `
  },
  Angular17: {
    id: 'Angular17',
    title: 'Angular 17',
    preText: '',
    imgUrl: '',
    description: `
<span>

Major changes in Angular 17

Boosting performance: Speed up builds with up to 87% faster hybrid rendering and up to 67% improvement in client side rendering.

A sleek makeover, showcasing features in its fresh new look with all new interactive learning journey designed to make mastering Angular

Revamped hybrid rendering experience with @angular/ssr package

New lifecycle hooks: afterRender and afterNextRender

New application builder: Vite and esbuild the default for new projects

Dependency injection debugging capabilities in Angular DevTools

All the ng generate commands will now scaffold standalone components, directives, and pipes

Experimental view transitions support to enable transitions when changing DOM

Style and styleUrls as strings

Future-looking documentation
Angular has a brand-new documentation at angular.dev, coinciding with its updated brand. The revamped site boasts a user-friendly structure, many improvements to guides, and enriched content. Notably, it introduces an interactive learning journey, made possible by WebContainers. This feature empowers users to explore and learn Angular and the Angular CLI at their own pace, all within the convenience of a modern web browser. It's a simpler and more accessible way to master Angular's intricacies.

Built-in control flow
Angular has introduced a new block template syntax, offering this one of the powerful features through straightforward, declarative APIs. Behind the scenes, the Angular compiler transforms this control flow syntax into efficient JavaScript instructions capable of handling control flow, lazy loading, and more. With several challenges encountered by developers using ngIf, ngSwitch, and *ngFor, the angular team has responded with a new, built-in control flow tailored to simplify angular development.

Let's dive into the key features that make this a significant advancement:

Ergonomic Syntax: More intuitive and developer-friendly syntax, closely aligned with JavaScript, reducing the need for frequent documentation lookups.

Better Type Checking: Improved type checking for more reliable and error-resistant code.

Build-time Concept: It minimises runtime footprint, potentially reducing bundle size and aligning with Core Web Vital metrics.

Automatic Integration: Seamless integration into your angular templates without additional imports, streamlining your development workflow.

Significant Performance Improvements: Significant improvements to the performance ensuring faster runtime and enhanced user experiences.

Conditional Statements
Let's dive deeper into the functionality of *ngIf, specifically examining how conditional rendering is done with the new built-in control flow introduced in Angular 17.

<pre class="code-disp">
<xmp>
<div *ngIf="paymentSuccessful; else errorMessage">
  Payment successful! Thank you for your purchase.
</div>

<ng-template #errorMessage>
  Oops! Payment failed. Please try again.
</ng-template>
</xmp>
</pre>

With the built-in @if statement, the code looks like:

<pre class="code-disp">

@if (paymentSuccessful) {
  Payment successful! Thank you for your purchase.
} @else {
  Oops! Payment failed. Please try again.
}
</pre>

The ability to directly provide content for @else is a significant simplification compared to the legacy *ngIf alternative. The current control flow also makes it trivial to incorporate @else if, a functionality that was historically impossible.

Looking at the *ngSwitch code below will provide a clear understanding.

<pre class="code-disp">
<xmp>
<div [ngSwitch]="paymentStatus">
  <successful-payment *ngSwitchCase="'success'"></successful-payment>
  <pending-payment *ngSwitchCase="'pending'"></pending-payment>
  <failed-payment *ngSwitchCase="'failed'"></failed-payment>
  <default-payment-status *ngSwitchDefault></default-payment-status>
</div>
</xmp>
</pre>

With the built-in @switch statement, the code looks like:

<pre class="code-disp">
@switch (paymentStatus) {
  @case ('success') { <successful-payment/> }
  @case ('pending') { <pending-payment/> }
  @case ('failed') { <failed-payment/> }
  @default { <default-payment-status/> }
}
</pre>

The built-in control flow in Angular 17 facilitates notably improved type-narrowing within the individual branches of @switch, which is not achievable with the traditional *ngSwitch.

Built-in for loops
The built-in for loop designed specifically for payments. This feature not only enriches the developer experience but also propels Angular's rendering speed to new heights!

The new way of writing for loops looks like this:

<pre class="code-disp">
@for (transaction of payments; track transaction.id) {
  {{ transaction.amount }}
} @empty {
  No payment transactions found
}
</pre>

Angular app often face speed issues because *ngFor lacks a trackBy function. In the new syntax with @for, usage of track is mandatory for quick performance. It's simpler to use as it's just an expression, not a method in your component. @for also has a handy shortcut for empty collections using @empty. Behind the scenes, @for uses a better algorithm, making it up to 90% faster than *ngFor according to community benchmarks!

Deferrable views
Angular 17 introduced a powerful mechanism utilising the new block syntax, allowing developers to significantly boost the speed of their apps. Deferrable views elevate performance and developer experience by enabling straightforward and powerful deferred loading with unparalleled ease.

Let's say you're developing an e-commerce platform, and you wish to implement deferred loading for the product reviews section. In the current approach, using ViewContainerRef it is complex to manage cleanups, to handle loading errors, to present skeleton loader, and more. Addressing these various situations often leads to the creation of intricate code, posing challenges in testing and debugging.

The code for implementing deferrable views in the new way appears as simple as the following:

<pre class="code-disp">
@defer (on viewport) {
  &ltreview-list /&gt
} @placeholder {
  &lt!-- A placeholder content to show until the reviews load --&gt
  &ltimg src="placeholder-image.png" /&gt
}
</pre>

The use of @placeholder in the code above is, of course, optional, for the sake of customisation. In the provided example, Angular first showcases the content within the placeholder block. As soon as it enters the viewport, Angular triggers the loading of the <review-list/> component. Once the loading is finished, Angular removes the placeholder and displays the fully rendered component on the web page.

This all happens during compile-time in Angular. The angular framework takes care of the complexity by identifying components, directives, and pipes within a @defer block. It then dynamically generates imports and manages the entire loading and state-switching process effortlessly, making deferred loading a breeze for developers.

There are more blocks for loading and error states, streamlining the management of various scenarios and Angular handles a lot of complexity behind the scenes, making the process seamless for you.

<pre class="code-disp">
@defer (on viewport) {
  &ltreview-list/&gt
} @loading {
  Loading…
} @error {
  Loading failed :(
} @placeholder {
  &ltimg src="placeholder.png"&gt
}
</pre>

Deferrable views come with additional triggers for versatile lazy loading:

on idle: Load the block lazily when the browser is not engaged in heavy tasks.

on immediate: Initiate automatic deferred loading without blocking the browser.

on timer(<time>): Delay loading with a specified timer.

on viewport and on viewport(<ref>): In addition to triggering when in the viewport, you can specify a reference for an anchor element. Angular will lazily load and render the component when the anchor element becomes visible.

on interaction and on interaction(<ref>): Initiate deferred loading when the user interacts with a specific element.

on hover and on hover(<ref>): Trigger deferred loading when the user hovers over an element.

when <expr>: Define your own condition through a boolean expression.

Deferrable views also provide the ability to prefetch the dependencies ahead of rendering them. Adding prefetching is as simple as adding a prefetch statement to the defer block and supports all the same triggers.

<pre class="code-disp">
@defer (on viewport; prefetch on idle) {
  &ltreview-list /&gt
}
</pre>

In case of server side rendering, placeholder for the deferred views are rendered at the server side and the view is lazy loaded as client side rendering once the the angular framework loads the application and hydrates it to fully rendered html.

TypeScript 5.2 Support
Angular 17 requires at least TypeScript 5.2. You cannot use earlier versions of TypeScript with Angular 17. Angular is committed to keeping pace with TypeScript releases, ensuring access to the latest language features. While Angular 17 supports TypeScript 5.2, hence it's generally recommended to use the latest stable TypeScript version for optimal compatibility and features.

There are several upgrade benefits of TypeScript to version 5.2:

TypeScript 5.2 offers up to 33% faster type checking for recursive types, potentially speeding up your development workflow for your web application

You can leverage new control flow declarations for cleaner code and ergonomic error handling with try...catch expressions in JSX

Automatic missing-comma insertions

Readonly arrays

The satisfies operator for type guards

Experimental await expressions in enum members

Revamped hybrid rendering experience
Angular 17 introduced an improved rendering experience, bridging server-side rendering (SSR) and static-site generation (SSG or pre-rendering) for developers. When creating a new Angular project with ng new, developers will now encounter a convenient prompt to enable SSR and SSG seamlessly. This change has been a long-anticipated improvement, and it's introduced now that we're confident in the SSR developer experience of Angular.

As an alternative, developers can enable SSR in new Angular 17 projects using the command:
<pre class="code-disp">

ng new my-app --ssr
</pre>

Hydration and Server Side Rendering
Hydration was introduced as developer preview in the previous versions as a new feature. Over the past six months, developers like you have embraced hydration in thousands of applications. Angular, marking a significant milestone announced the official exit of hydration from the developer preview phase. It's automatically enabled by default in all new apps using server-side rendering!

New @angular/ssr package
The Angular Universal repository has now been moved to the Angular CLI repository, emphasising the increased integration of server-side rendering into our broader tooling offerings. As of today, if you wish to add hybrid rendering support to your existing application, you can achieve this by running:

ng add @angular/ssr
Running this command will generate the server entry point, incorporate server-side rendering (SSR) and static-site generation (SSG) build capabilities, and enable hydration by default. Notably, @angular/ssr now offers the same functionality as @nguniversal/express-engine, which is presently in maintenance mode. If you're currently using express-engine, Angular CLI will seamlessly update your code to use @angular/ssr.

New Lifecycle Hooks
To boost the performance of Angular's SSR and SSG, there is need to move away from DOM emulation and direct DOM manipulations in the long run. Recognising the importance of element interactions throughout most applications' lifecycle, such as initialising third-party libraries or measuring element size, a set of new lifecycle hooks has been introduced:

afterRender — register a callback to be invoked each time the application finishes rendering

afterNextRender — register a callback to be invoked the next time the application finishes rendering

These hooks are triggered by the browser. It securely incorporates custom DOM logic directly into the angular components. This ensures a controlled environment for your specific DOM manipulations. Consider this example: If you want to instantiate a charting library, leverage the afterNextRender hook:

<pre class="code-disp">
@Component({
  selector: 'my-chart-cmp',
  template: '&ltdiv #chart&gt{{ ... }}&lt/div&gt',
})
export class MyChartCmp {
  @ViewChild('chart') chartRef: ElementRef;
  chart: MyChart | null;

  constructor() {
    afterNextRender(() => {
      this.chart = new MyChart(this.chartRef.nativeElement);
    }, { phase: AfterRenderPhase.Write });
  }
}

</pre>

Each hook, including afterNextRender, supports a phase value (e.g., read, write), which Angular utilises to schedule callbacks, minimising layout thrash and enhancing performance.


In version 16, a developer preview of the ESBuild and Vite-powered build experience was introduced. Many developers dived into experimentation, and some enterprise partners reported impressive results, with up to a 67% improvement in build times for their apps! Today, it's exciting to announce that the new application builder has officially graduated from developer preview and is now the default for all new applications!

Additionally, the build pipeline for rendering has been fine-tuned. With SSR & SSG, you can now experience the speed boost in ng build as well as edit-refresh loop for ng serve.

Dependency injection debugging in DevTools
Last year, the Angular offered a sneak peek into the debugging features of Angular DevTools. Recently, they introduced new capabilities to:

See what components depend on

Understand the tree of injectors and how dependencies are resolved

Explore providers declared within injectors

Find more information on angular dev tools.

Standalone APIs from the start
Standalone components are a new feature that simplifies component architecture and offers potential performance benefits. Now, the ng generate command will create standalone new component, directive, and pipe.

The following command is a schematic that assists you in migrating your entire application to use standalone components.

ng generate @angular/core:standalone
Experimental view transitions support
Angular's experimental View Transitions API enables smooth DOM transitions. The router now directly supports this via the withViewTransitions feature. Configure it during bootstrap for seamless animated route transitions, leveraging the browser's capabilities. The withViewTransitions function provides optional configurations for added control, like skipping animations or customising animations with class adjustments on the document.

<pre class="code-disp">
bootstrapApplication(App, {
  providers: [
    provideRouter(routes, withViewTransitions()),
  ]
});
</pre>

Defer loading of the animations module
By using this feature, bundle can be compressed by size 60KBs (16KBs gzipped). Thanks to the community contribution from Matthieu Riegler. We can now lazily load the animation module using the following code:

<pre class="code-disp">

import { provideAnimationsAsync } from '@angular/platform-browser/animations-async';

bootstrapApplication(RootCmp, {
  providers: [provideAnimationsAsync()]
});

</pre>

Input value transforms
Generally, when working with components that receive boolean inputs, a common challenge arises when passing values using a certain syntax. Take, for instance, the ToggleComponent with the following definition:

<pre class="code-disp">

@Component({
  selector: 'app-toggle',
  template: '...',
})
export class ToggleComponent {
  @Input() isEnabled: boolean = false;
}

</pre>

If you attempt to use it as <app-toggle isEnabled />, you might encounter an error stating "string is not assignable to boolean." To overcome this, you can utilise input value transforms by configuring the input decorator:

<pre class="code-disp">

@Component({
  selector: 'app-toggle',
  template: '...',
})
export class ToggleComponent {
  @Input({ transform: booleanAttribute }) isEnabled: boolean = false;
}
</pre>

Here, booleanAttribute is a function imported from the @angular/core library. It's designed to transform string-based input values into boolean values before they're passed to component properties in your angular application.

Style and styleUrls as strings
Angular components offer the flexibility of supporting multiple stylesheets per component. Yet, in most cases, when styling components, a common approach is to create an array with a single element that points to inline styles or references an external stylesheet. In Angular 17, you can switch between using styles, styleUrls, and styleUrl based on whether you prefer defining inline styles, specifying an array of stylesheet URLs, or providing a single URL for the stylesheet, respectively.

Next steps on testing
The Angular team is currently exploring Jest to develop a solution that prioritises speed, flexibility, and user-friendliness. Simultaneously, there's experimentation with Web Test Runner, and there's an open pull request for the initial implementation. In the short term, the emphasis may shift towards Web Test Runner to assist projects eager to transition away from Karma.

Training Angular developers
The Angular team collaborated with SoloLearn, an interactive EdTech platform, to develop a new Angular training based on the recent Introduction to Angular course.


</span>

    `}
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
