import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { SafehtmlPipe } from '../../safehtml.pipe';

@Component({
  selector: 'org-feature',
  standalone: true,
  imports: [CommonModule, SafehtmlPipe],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class FeatureComponent {
  @Input() feature :{
    title:string,
    imgUrl:string,
    preText?:string,
    description:string
  } | undefined

}
