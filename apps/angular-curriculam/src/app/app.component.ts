import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HeaderComponent } from './common/header/header.component';
import { MenuDropdownItem } from './model';
import { DROPDOWN_ITEMS } from './data';
import {  HttpClientModule } from '@angular/common/http';
import 'ag-grid-enterprise';


@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    HeaderComponent,
    HttpClientModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    RouterModule,
  ],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-curriculam';
  dropdownTitle = 'Versions';
  dropdownItems: MenuDropdownItem[] = DROPDOWN_ITEMS;
}
