import user from "../repositories/user/UserRepository";
export default function seed(){
  console.log("in seed");

  user.create({id:"3",name:"dslf"});
}
