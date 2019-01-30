
export interface IPermissions {
  [module: string]: {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
  };
}
