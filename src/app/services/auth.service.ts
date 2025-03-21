// services/auth.service.ts
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';

// @Injectable({ providedIn: 'root' })
// export class AuthService {
//   private userRole: string | null = null;
//   private isAuthenticated: boolean = false;
//   constructor(private router: Router) {}

  
//   login(): void {
//     this.isAuthenticated = true;
//     localStorage.setItem('isAuthenticated', 'true');
//     this.router.navigate(['/dashboard']);
//   }

//   getRole(): string | null {
//     if (typeof window !== 'undefined' && localStorage) {
//       return localStorage.getItem('userRole');
//     }
//     return null;
//   }
  
//   logout(): void {
//     this.isAuthenticated = false;
//     localStorage.removeItem('isAuthenticated');
//     this.router.navigate(['/login']);
//   }

//   isLoggedIn(): boolean {
//     return localStorage.getItem('isAuthenticated') === 'true';
//   }
// }
import { Injectable , Inject, PLATFORM_ID} from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userRole: string | null = null;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  login(userRole: string): void {  // login fonksiyonuna parametre eklendi!
    this.userRole = userRole;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('userRole', userRole);
    }

    localStorage.setItem('userRole', userRole);
    
    if (userRole === 'student') {
      this.router.navigate(['/student-dashboard']);
    } else if (userRole === 'teacher') {
      this.router.navigate(['/teacher-dashboard']);
    } else if (userRole === 'admin') {
      this.router.navigate(['/admin-dashboard']);
    }
  }

  getUserRole(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('userRole');
    }
    return null;
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('userRole');
    }
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('userRole');
  }

  isLoggedIn(): boolean {

    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('token'); // Sadece tarayıcıda çalıştır
    }
    return false; // Server tarafında false döndür
      }
}

