import { Component, inject, Inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  router = inject(Router);

  OnLogOut() {
    localStorage.removeItem('email');
    this.router.navigateByUrl('/login');
  }
}
