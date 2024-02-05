import { Component, Input } from '@angular/core';

@Component({
  selector: 'org-feature',
  standalone: true,
  imports: [],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {
  @Input() feature :{
    title:string,
    imgUrl:string,
    preText?:string,
    description:string
  } | undefined

}
