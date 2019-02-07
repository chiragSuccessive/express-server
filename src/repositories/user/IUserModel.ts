import IVersionableModel from '../versionable/IVersionableModel';
export default interface IUserModel extends IVersionableModel {
  id: string;
  name: string;
  email: string;
  role: string;
  password: string;
}
