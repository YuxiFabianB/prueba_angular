import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Employee } from '../../shared/models/employee';
import { Project } from '../../shared/models/project';
import { Color } from '../../shared/models/color';
import { Api } from '../../shared/services/api';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent implements OnDestroy {

  employee: Employee;
  selectedColor: number;
  selectedProject: number;
  originalProject: number;
  projects: Project[];
  colors: Color[];

  constructor(
    private dialogRef: MatDialogRef<EmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private api: Api
  ) {
    if (data.employeeId) {
      this.api.get(environment.employeePath + "/" + data.employeeId).subscribe((employee: Employee) => {
        this.employee = employee;
        this.selectedProject = employee.project;
        this.selectedColor = employee.favoriteColor;
        this.originalProject = employee.project;
      });
    } else {
      this.employee = new Employee();
    }

    this.api.get(environment.projectPath).subscribe((projects: Project[]) => {
      this.projects = projects;
    })

    this.api.get(environment.colorsPath).subscribe((colors: Color[]) => {
      this.colors = colors;
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    this.employee.favoriteColor = this.selectedColor;
    this.employee.project = this.selectedProject;
  }

}
