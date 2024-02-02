import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HeaderComponent } from './common/header/header.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent,HeaderComponent,RouterLink,RouterLinkActive,RouterOutlet, RouterModule],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-curriculam';
}
