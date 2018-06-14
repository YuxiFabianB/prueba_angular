import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { EmployeeDialogComponent } from './employee-dialog/employee-dialog.component';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, EmployeeDialogComponent, ProjectDialogComponent]
})
export class CoreModule { }
