export default function successHandler( message: string, status: number,data:any) {
  return ({
    message: message,
    status: status,
    data:data
  });
}
