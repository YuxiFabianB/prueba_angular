import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Project } from '../../shared/models/project';
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
    if (data.projectId) {
      projectService.getProject(data.projectId).subscribe((project: Project) => {
        this.project = project;
      })
    } else {
      this.project = new Project();
      this.project.teamSize = 0;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
