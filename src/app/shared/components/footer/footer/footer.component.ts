import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  isMobileMenuOpen: boolean = false;
  isUserLoggedIn: boolean = false;
  authService = inject(AuthService);
  router = inject(Router);
  cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isUserLoggedIn = isLoggedIn;
      this.cdr.detectChanges();
    })
  }
}
