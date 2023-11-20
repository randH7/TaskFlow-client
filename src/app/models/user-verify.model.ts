export class UserVerifyDTO {
    constructor(
      public username: string,
      public email: string,
      public employName: string,
      public jobTitle: string,
      public role: string
    ) {}
  }