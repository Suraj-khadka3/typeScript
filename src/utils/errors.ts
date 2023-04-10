type ErrorName = "Post Error" | "Authentication Error" | "Request Error";

export class ProjectError extends Error {
  name: ErrorName;
  message: string;

  constructor({ name, message }: { name: ErrorName; message: string }) {
    super();
    //super must be called before using this. ... because it is used to get properties of parent
    this.name = name;
    this.message = message;
  }
}
