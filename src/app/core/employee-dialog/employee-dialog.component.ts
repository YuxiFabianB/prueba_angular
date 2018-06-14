import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Employee } from '../../shared/models/employee';
import { EmployeeService } from '../../shared/services/employee.service';
import { Project } from '../../shared/models/project';
import { ProjectService } from '../../shared/services/project.service';
import { Color } from '../../shared/models/color';
import { ColorsService } from '../../shared/services/colors.service';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent implements OnDestroy {

  employee: Employee;
  selectedColor: number;
  selectedProject: number;
  projects: Project[];
  colors: Color[];

  constructor(
    private dialogRef: MatDialogRef<EmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private employeeService: EmployeeService,
    private projectService: ProjectService,
    private colorService: ColorsService
  ) {
    if (data.employeeId) {
      employeeService.getEmployee(data.employeeId).subscribe((employee: Employee) => {
        this.employee = employee;
        this.selectedProject = employee.project;
        debugger;
        this.selectedColor = employee.favoriteColor;
      });
    } else {
      this.employee = new Employee();
    }

    projectService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
    })

    colorService.getColors().subscribe((colors: Color[]) => {
      this.colors = colors;
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    debugger;
    this.employee.favoriteColor = this.selectedColor;
    this.employee.project = this.selectedProject;
  }

}
