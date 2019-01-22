export interface IUsers {
  traineeEmail: string;
  reviewerEmail: string;
}
export interface IPermissions {
  [module: string]: {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
  };
}
