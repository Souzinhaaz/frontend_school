import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, ModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMobileMenuOpen: boolean = false;
  authService = inject(AuthService);
  router = inject(Router);

  @ViewChild('exitModal') exitModal!: ModalComponent;


  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.authService.updateLoginStatus();
      });
  }

  showExitModal() {
    this.exitModal.showModal(
      'Sair do sistema',
      'Você tem certeza que deseja sair?'
    );
  }

  onExitConfirm() {
    this.sair();
  }

  sair() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
