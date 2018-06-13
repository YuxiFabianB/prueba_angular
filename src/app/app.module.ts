import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';
import { InMemoryDataService } from './back-end/in-mem-data.service';
import { EmployeesComponent } from './core/employees/employees.component';
import { LoginComponent } from './core/login/login.component';
import { MainComponent } from './core/main/main.component';
import { ProjectsComponent } from './core/projects/projects.component';
import { MaterialModule } from './material-module/material-module.module';
import { ConfirmationDialogComponent } from './shared/components/confirmation-dialog/confirmation-dialog.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { EmployeeService } from './shared/services/employee.service';
import { LoginService } from './shared/services/login.service';
import { ProjectService } from './shared/services/project.service';
import { CustomSnackBar } from './shared/utils/custom-snackbar';
import { AuthService } from './shared/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    MainComponent,
    EmployeesComponent,
    ProjectsComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    APP_ROUTING,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  providers: [
    LoginService,
    ProjectService,
    EmployeeService,
    CustomSnackBar,
    InMemoryDataService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
