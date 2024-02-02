import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuDropdownItem } from '../../model';
import { MenudropdownComponent } from '../menudropdown/menudropdown.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'org-header',
  standalone: true,
  imports: [RouterLink,MenudropdownComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
@Input()dropdownItems: MenuDropdownItem[] | undefined;
@Input()dropdownTitle:string | undefined;

}
