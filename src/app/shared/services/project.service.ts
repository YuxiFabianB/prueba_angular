import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Project } from '../models/project';
import { Api } from './api';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private api: Api
  ) { }

  updateCreateProject(project: Project) {
    if (project.id) {
      return this.api.put(environment.projectPath + "/" + project.id, project);
    } else {
      return this.api.post(environment.projectPath, project);
    }
  }

  verifyTeamChanges(selectedId: number, oldId: number) {
    if (selectedId != oldId) {
      this.changeTeamSize(selectedId, oldId)
    }
  }

  changeTeamSize(selectedId: number, oldId: number) {
    this.api.get(environment.projectPath + '/' + selectedId).subscribe((project: Project) => {
      project.teamSize++;
      this.updateCreateProject(project).subscribe(resp => {
      });
    });

    this.api.get(environment.projectPath + '/' + oldId).subscribe((project: Project) => {
      project.teamSize--;
      this.updateCreateProject(project).subscribe(resp => {
      });
    })
  }

}
