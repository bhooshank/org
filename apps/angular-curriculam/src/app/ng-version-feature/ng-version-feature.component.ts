import { Component } from '@angular/core';
import { FeatureComponent } from '../common/feature/feature.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'org-ng-version-feature',
  standalone: true,
  imports: [FeatureComponent,CommonModule],
  templateUrl: './ng-version-feature.component.html',
  styleUrl: './ng-version-feature.component.scss',
})
export class NgVersionFeatureComponent {
  title = "Angular different versions and there features"
  fetures = [
    {
      title: 'Angular 2/Angular',
      imgUrl: '',
      description:
        'Angular 2 is written in typescript compared to its predecessor Angular Js which is Js framework and Angular follows the component based architecture',
    },
    {
      title: 'Angular 4',
      imgUrl: '../../assets/NgIf with else.png',
      description:
        'where is Angular 3? since Angular is developed in MonoRepo the Angular team skipped the Angular 3 version since there was active and huge development on angular router section Angular routing was misaligned with angular core versioning number and team decided to synchronize versioning of all the dependency^s to avoid confusion for angular community. in Angular 4 TypeScript 2.2 was used which improves type checking and security, strictNullChecks, introduced NgIf with else, template depricated and now we can use ng-template',
    },
    {
      title: 'Angular 5',
      imgUrl: '',
      description:
        'angular 5 in this version there was lots of efforts made to reduce the bundle size of the app after production build because of build optimizer, compiler improvements, angular httpClient bieng used in replacement of Http traditional module, TypeScript 2.5 support, preserve white spaces',
    },
    {
      title: 'Angular 6',
      imgUrl: '',
      description:
        'This release is focused less on the underlying framework, and more on tool-chain and on making it easier to move quickly with angular in the future, Dependency on RxJS 6,Synchronizes major version number of the Angular framework, Angular CLI, Angular Material  CDK all are now version 6.0.0',
    },
  ];
}
