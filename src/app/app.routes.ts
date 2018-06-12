import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { MainComponent } from './core/main/main.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ProjectsComponent } from './core/projects/projects.component';
import { EmployeesComponent } from './core/employees/employees.component';

const APP_ROUTES: Routes = [
    { path: 'notfound', component: NotFoundComponent },
    { path: 'login', component: LoginComponent },
    { path: 'main', component: MainComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'employees', component: EmployeesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'notfound' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
