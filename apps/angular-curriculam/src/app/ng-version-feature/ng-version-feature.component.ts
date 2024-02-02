import { Component, OnDestroy, OnInit } from '@angular/core';
import { FeatureComponent } from '../common/feature/feature.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { takeUntil, takeWhile } from 'rxjs';
import { FEATURES_DATA } from '../data';

@Component({
  selector: 'org-ng-version-feature',
  standalone: true,
  imports: [FeatureComponent, CommonModule],
  templateUrl: './ng-version-feature.component.html',
  styleUrl: './ng-version-feature.component.scss',
})
export class NgVersionFeatureComponent implements OnInit,OnDestroy {
  alive = true;
  title = 'Angular different versions and there features';
  fetures = FEATURES_DATA;
  feature = this.fetures['Angular2']

  constructor(private router:ActivatedRoute){

  }
  ngOnInit(): void {
      this.router.params.pipe(takeWhile(_=>this.alive)).subscribe(params =>{
        const id = params['id'] as keyof typeof this.fetures;
        this.feature = this.fetures[id]
        
      })
  }
  ngOnDestroy(): void {
      this.alive = false;
  }
}
