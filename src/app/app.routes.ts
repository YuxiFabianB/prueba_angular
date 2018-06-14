import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { MainComponent } from './core/main/main.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ProjectsComponent } from './core/projects/projects.component';
import { EmployeesComponent } from './core/employees/employees.component';
import { AuthGuardService } from './shared/services/auth-guard.service';

const APP_ROUTES: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'notfound', component: NotFoundComponent },
    {
        path: 'main',
        component: MainComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'employees',
        component: EmployeesComponent,
        canActivate: [AuthGuardService]
    },        
    { path: 'callback', redirectTo: 'login' },
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: '**', component: NotFoundComponent }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
