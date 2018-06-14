import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource } from '@angular/material';
import { ConfirmationDialogComponent } from '../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { Color } from '../../shared/models/color';
import { Employee } from '../../shared/models/employee';
import { Project } from '../../shared/models/project';
import { EmployeeService } from '../../shared/services/employee.service';
import { CustomSnackBar } from '../../shared/utils/custom-snackbar';
import { EmployeeDialogComponent } from '../employee-dialog/employee-dialog.component';
import { ProjectService } from '../../shared/services/project.service';
import { ColorsService } from '../../shared/services/colors.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  projects: Project[];
  colors: Color[];
  dataSource: MatTableDataSource<Employee>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = [
    'id',
    'name',
    'company',
    'age',
    'birthday',
    'favoriteColor',
    'project',
    'actionsColumn'
  ];

  constructor(
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private customSnackBar: CustomSnackBar,
    private projectService: ProjectService,
    private colorService: ColorsService
  ) {
    projectService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
    })

    colorService.getColors().subscribe((colors: Color[]) => {
      this.colors = colors;
    })
  }

  ngOnInit() {
    this.fillEmployeesTable();
  }

  fillEmployeesTable() {
    this.employeeService.getEmployees().subscribe((employees: Employee[]) => {
      this.employees = employees;

      this.employees.forEach(employee => {
        let project = this.projects.find(project => project.id === employee.project);
        employee.projectDescription = project.name;
        let color = this.colors.find(color => color.id === employee.favoriteColor)
        employee.favoriteColorDescription = color.name;
      });

      this.dataSource = new MatTableDataSource(this.employees);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  deleteEmployee(employee: Employee) {
    //Open the dialog with parameters.
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: "Delete employee.",
        message: "Are you sure to delete  '" + employee.name + "'."
      }
    });

    //Get the response when the dialog is closed.
    dialogRef.afterClosed().subscribe(data => {
      if (data && data.accept === true) {
        this.employeeService.deleteEmployee(employee.id).subscribe(resp => {
          let position = this.employees.indexOf(employee);
          let remove = this.employees.splice(position, 1);
          this.dataSource.data = this.employees;
          this.customSnackBar.openSnackBar(this.snackBar, "Employee was deleted.", "OK");
        });
      }
    });
  }

  newEmployee() {
    let employee = new Employee();
    this.openEmployeeDialog(employee);
  }

  openEmployeeDialog(employee: Employee) {

    //Open the dialog with parameters.
    let dialogRef = this.dialog.open(EmployeeDialogComponent, {
      width: '500px',
      data: { employeeId: employee.id }
    });

    //Get the response when the dialog is closed.
    dialogRef.afterClosed().subscribe(data => {
      if (data.employee) {
        this.editEmployee(data.employee);
      }

      this.projectService.verifyTeamChanges(data.selectedProject, data.originalProject);
    });
  }

  editEmployee(employee: Employee) {
    this.employeeService.updateCreateEmployee(employee).subscribe(resp => {
      if (employee.id) {
        this.customSnackBar.openSnackBar(this.snackBar, "Project was updated.", "OK");
      } else {
        this.customSnackBar.openSnackBar(this.snackBar, "Project was created.", "OK");
      }
      this.fillEmployeesTable();
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
