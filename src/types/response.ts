export interface IResponse<T extends object> {
  data: T;
  message: "ok";
  isOk: boolean;
}
