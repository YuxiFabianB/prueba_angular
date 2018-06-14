import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource } from '@angular/material';
import { ConfirmationDialogComponent } from '../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { Employee } from '../../shared/models/employee';
import { EmployeeService } from '../../shared/services/employee.service';
import { CustomSnackBar } from '../../shared/utils/custom-snackbar';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
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
    'actionsColumn'
  ];

  constructor(
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private customSnackBar: CustomSnackBar
  ) { }


  ngOnInit() {
    this.fillEmployeesTable();
  }

  fillEmployeesTable() {
    this.employeeService.getEmployees().subscribe((employees: Employee[]) => {
      this.employees = employees;
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

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
