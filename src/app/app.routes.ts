// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RoleGuard } from './services/role.guard';
import { StudentProfileComponent } from './components/student/student-profile/student-profile.component';
import { CoursesComponent } from './components/student/courses/courses.component';
import { TranscriptComponent } from './components/student/transcript/transcript.component';
import { ScheduleComponent } from './components/student/schedule/schedule.component';
import { TeacherProfileComponent } from './components/teacher/teacher-profile/teacher-profile.component';
import { ClassesComponent } from './components/teacher/classes/classes.component';
import { AnnouncementsComponent } from './components/teacher/announcements/announcements.component';
import { StdannouncementsComponent } from './components/student/stdannouncements/stdannouncements.component';
import { AdminProfileComponent } from './components/admın/admin-profile/admin-profile.component';
import { StudentsComponent } from './components/admın/students/students.component';
import { TeachersComponent } from './components/admın/teachers/teachers.component';
import { AdmdannouncementsComponent } from './components/admın/admdannouncements/admdannouncements.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'student-dashboard', component: DashboardComponent , canActivate: [RoleGuard],  
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: StudentProfileComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'transcript', component: TranscriptComponent },
      { path: 'schedule', component: ScheduleComponent },
      { path: 'stdannouncements', component: StdannouncementsComponent },
    ]
  },
  { path: 'teacher-dashboard', component: DashboardComponent ,canActivate: [RoleGuard],
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: TeacherProfileComponent },
      { path: 'classes', component: ClassesComponent },
      { path: 'announcements', component: AnnouncementsComponent },
    ]
  },
  { path: 'admin-dashboard', component: DashboardComponent ,canActivate: [RoleGuard],
    children: [
      { path:'', redirectTo: 'profile' , pathMatch: 'full'},
      { path: 'profile', component: AdminProfileComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'teachers', component: TeachersComponent },
      { path: 'admannouncements', component: AdmdannouncementsComponent },
    ]
  },
];
