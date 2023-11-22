export class ProjectAddDTO {
    constructor(
      public projectName: string,
      public leaderUsername: string,
      public startDate: string,
      public dueDate: string,
      public description: string,
      public projectStatus: string,
      public employeesUsername: String[]
    ) {}
  }