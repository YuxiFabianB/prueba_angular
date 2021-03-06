import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';
import { InMemoryDataService } from './back-end/in-mem-data.service';
import { EmployeeDialogComponent } from './core/employee-dialog/employee-dialog.component';
import { EmployeesComponent } from './core/employees/employees.component';
import { LoginComponent } from './core/login/login.component';
import { MainIconsComponent } from './core/main-icons/main-icons.component';
import { MainComponent } from './core/main/main.component';
import { ProjectDialogComponent } from './core/project-dialog/project-dialog.component';
import { ProjectsComponent } from './core/projects/projects.component';
import { MaterialModule } from './material-module/material-module.module';
import { ConfirmationDialogComponent } from './shared/components/confirmation-dialog/confirmation-dialog.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';
import { Api } from './shared/services/api';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { AuthService } from './shared/services/auth.service';
import { ProjectService } from './shared/services/project.service';
import { CustomSnackBar } from './shared/utils/custom-snackbar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    MainComponent,
    EmployeesComponent,
    ProjectsComponent,
    ConfirmationDialogComponent,
    SideNavComponent,
    MainIconsComponent,
    ProjectDialogComponent,
    EmployeeDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    APP_ROUTING,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  entryComponents: [
    ConfirmationDialogComponent,
    ProjectDialogComponent,
    EmployeeDialogComponent
  ],
  providers: [
    CustomSnackBar,
    InMemoryDataService,
    AuthService,
    AuthGuardService,
    Api,
    ProjectService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
