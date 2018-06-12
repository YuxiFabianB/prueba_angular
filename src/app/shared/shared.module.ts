import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmployeesComponent } from '../core/employees/employees.component';
import { MainComponent } from '../core/main/main.component';
import { ProjectsComponent } from '../core/projects/projects.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NotFoundComponent,
    MainComponent,
    ProjectsComponent,
    EmployeesComponent,
    ConfirmationDialogComponent
  ]
})
export class SharedModule { }
