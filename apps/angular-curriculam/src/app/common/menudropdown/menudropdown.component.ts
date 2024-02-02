import { Component, Input } from '@angular/core';
import { MenuDropdownItem } from '../../model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'org-menudropdown',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './menudropdown.component.html',
  styleUrl: './menudropdown.component.scss'
})
export class MenudropdownComponent {
  @Input() dropdownItems:MenuDropdownItem[] | undefined;
  @Input() dropdownTitle:string | undefined;

}
