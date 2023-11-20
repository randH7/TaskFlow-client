export class UserSignUp {

    username: string;
    email: string;
    password: string;
    employName: string;
    jobTitle: string;
  
    constructor(
      username: string,
      email: string,
      password: string,
      employName: string,
      jobTitle: string
    ) {
      this.username = username;
      this.email = email;
      this.password = password;
      this.employName = employName;
      this.jobTitle = jobTitle;
    }

}