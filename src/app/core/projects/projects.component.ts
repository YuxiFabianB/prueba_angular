import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Project } from '../../shared/models/project';
import { ProjectService } from '../../shared/services/project.service';
import { ConfirmationDialogComponent } from '../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { CustomSnackBar } from '../../shared/utils/custom-snackbar';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  dataSource: MatTableDataSource<Project>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = [
    'name',
    'teamSize',
    'clientName',
    'actionsColumn'
  ];

  constructor(
    private projectService: ProjectService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private customSnackBar: CustomSnackBar
  ) { }

  ngOnInit() {
    this.fillProjectsTable();
  }

  fillProjectsTable() {
    this.projectService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
      this.dataSource = new MatTableDataSource(this.projects);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  deleteProject(project: Project) {

    debugger;

    //Open the dialog with parameters.
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: "Delete project.",
        message: "Are you sure to delete  '" + project.name + "'."
      }
    });

    //Get the response when the dialog is closed.
    dialogRef.afterClosed().subscribe(data => {
      debugger;
      if (data && data.accept === true) {
        this.projectService.deleteProject(project.id).subscribe(resp => {
          debugger;
          let position = this.projects.indexOf(project);
          let remove = this.projects.splice(position, 1);
          this.dataSource.data = this.projects;
          this.customSnackBar.openSnackBar(this.snackBar, "Project was deleted.", "OK");
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
