// components/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  selectedRole: string = '';

  constructor(private authService: AuthService) {}

  login(): void {
    if (this.selectedRole) {
      this.authService.login(this.selectedRole); // Burada login fonksiyonuna rol gönderiyoruz.
    } else {
      alert('Lütfen bir rol seçiniz.');
    }
  }
}

