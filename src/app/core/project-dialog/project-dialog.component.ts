import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Project } from '../../shared/models/project';
import { Api } from '../../shared/services/api';
import { environment } from '../../../environments/environment';

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
    private api: Api
  ) {
    if (data.projectId) {
      this.api.get(environment.projectPath + "/" + data.projectId).subscribe((project: Project) => {
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
