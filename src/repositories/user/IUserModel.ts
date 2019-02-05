import IVersionableModel from '../versionable/IVersionableModel';
export default interface IUserModel extends IVersionableModel {
 // _id: string;
  id: string;
  name: string;
  email: string;
  role: string;
}
