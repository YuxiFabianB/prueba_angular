import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  serviceUrl = "http://localhost:4200/api/";
  projectPath = "projects";

  constructor(
    private http: HttpClient
  ) { }

  getProjects() {
    let url = `${this.serviceUrl + this.projectPath}`
    return this.http.get(url);
  }

  getProject(projectId: number) {
    let url = `${this.serviceUrl + this.projectPath + "/" + projectId}`
    return this.http.get(url);
  }

  deleteProject(projectId: number) {
    let url = `${this.serviceUrl + this.projectPath + "/" + projectId}`
    return this.http.delete(url);
  }

  updateCreateProject(project: Project) {
    if (project.id) {
      let url = `${this.serviceUrl + this.projectPath + "/" + project.id}`
      return this.http.put(url, project);
    } else {
      let url = `${this.serviceUrl + this.projectPath}`
      return this.http.post(url, project);
    }
  }

  verifyTeamChanges(selectedId: number, oldId: number) {
    if (selectedId != oldId) {
      this.changeTeamSize(selectedId, oldId)
    }
  }

  changeTeamSize(selectedId: number, oldId: number) {
    this.getProject(selectedId).subscribe((project: Project) => {
      project.teamSize++;
      this.saveTeamSize(project);
    });

    this.getProject(oldId).subscribe((project: Project) => {
      project.teamSize--;
      this.saveTeamSize(project);
    })
  }

  saveTeamSize(project: Project) {
    this.updateCreateProject(project).subscribe(resp => {
    });
  }

}
