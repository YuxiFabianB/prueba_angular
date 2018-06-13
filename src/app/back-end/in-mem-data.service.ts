import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects = [
      { id: 1, name: 'Project 1', teamSize: 0, clientName: "TCC" },
      { id: 2, name: 'Project 2', teamSize: 0, clientName: "MSI" },
      { id: 3, name: 'Project 3', teamSize: 0, clientName: "Brainshark" },
      { id: 4, name: 'Project 4', teamSize: 0, clientName: "IMS" },
      { id: 5, name: 'Project 5', teamSize: 0, clientName: "Apex" },
      { id: 6, name: 'Project 6', teamSize: 0, clientName: "Apex" }
    ];

    const employees = [
      {
        id: 1,
        name: "Jorge Hurtado",
        company: "Company 1",
        age: 33,
        birthday: new Date(),
        favoriteColor: "blue",
        project: 1
      }, {
        id: 2,
        name: "Astrid Vanegas",
        company: "Company 1",
        age: 30,
        birthday: new Date(),
        favoriteColor: "pink",
        project: 1
      }, {
        id: 3,
        name: "Andres Hoyos",
        company: "Company 3",
        age: 27,
        birthday: new Date(),
        favoriteColor: "green",
        project: 3
        
      }, {
        id: 4,
        name: "Diego Rios",
        company: "Company 2",
        age: 30,
        birthday: new Date(),
        favoriteColor: "pink",
        project: 5
      }, {
        id: 5,
        name: "Fabian Buitrago",
        company: "Company 2",
        age: 30,
        birthday: new Date(),
        favoriteColor: "pink",
        project: 6
      }
    ];

    const users = [
      { id: 1, userName: 'dayro', password: '1001', token: "" },      
      { id: 1, userName: 'astrid', password: '1501', token: "" },
      { id: 1, userName: 'tomas', password: '1507', token: "" },
    ];

    return { projects, employees, users };
  }

  

}