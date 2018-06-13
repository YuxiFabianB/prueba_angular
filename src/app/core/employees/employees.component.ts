import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { EmployeeService } from '../../shared/services/employee.service';
import { Employee } from '../../shared/models/employee';

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
    private employeetService: EmployeeService
  ) { }

  
  ngOnInit() {
    this.fillEmployeesTable();
  }

  fillEmployeesTable() {
    this.employeetService.getEmployees().subscribe((employees: Employee[]) => {
      this.employees = employees;
      this.dataSource = new MatTableDataSource(this.employees);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
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
