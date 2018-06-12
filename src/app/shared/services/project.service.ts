import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  serviceUrl = "http://localhost:4200/api/";
  projectPath = "projects";

  constructor(
    private http: HttpClient
  ) { }

  getProjects(){
    let url = `${this.serviceUrl + this.projectPath}`
    return this.http.get(url);
  }

  deleteProject(projectId: number){
    let url = `${this.serviceUrl + this.projectPath + "/" + projectId}`
    return this.http.delete(url);
  }
}
