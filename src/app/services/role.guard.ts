import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userRole = this.authService.getUserRole();

    if (state.url.startsWith('/student-dashboard') && userRole === 'student') {
      return true;
    }
    if (state.url.startsWith('/teacher-dashboard') && userRole === 'teacher') {
      return true;
    }
    if (state.url.startsWith('/admin-dashboard') && userRole === 'admin') {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}

//   canActivate(): boolean {
//     const role = this.authService.getUserRole();
//     if (role === 'student' || role === 'teacher' || role === 'admin') {
//       return true;
//     } else {
//       this.router.navigate(['/login']); // Eğer yetkisi yoksa login sayfasına yönlendir
//       return false;
//     }
//   }
// }

