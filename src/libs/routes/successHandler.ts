export default function successHandler( message: string, status: number, data: any = 'data') {
  return ({
    data,
    message,
    status,
  });
}
