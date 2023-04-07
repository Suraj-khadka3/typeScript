type ErrorName = "Post Error" | "Authentication Error" | "Request Error";

export class ProjectError extends Error {
  name: ErrorName;
  message: string;

  constructor({ name, message }: { name: ErrorName; message: string }) {
    super();
    this.name = name;
    this.message = message;
  }
}
