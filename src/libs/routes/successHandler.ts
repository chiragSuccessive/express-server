export default function successHandler( message: string, status: number,data:any=null) {
  return ({
    message: message,
    status: status,
    data:data
  });
}
