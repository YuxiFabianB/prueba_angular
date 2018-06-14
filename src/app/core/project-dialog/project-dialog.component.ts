import { Component, Inject } from '@angular/core';
import { Project } from '../../shared/models/project';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProjectService } from '../../shared/services/project.service';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.css']
})
export class ProjectDialogComponent {

  project: Project;

  constructor(
    private dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private projectService: ProjectService
  ) {
    projectService.getProject(data.projectId).subscribe((project: Project) => {
      debugger;
      this.project = project;
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
