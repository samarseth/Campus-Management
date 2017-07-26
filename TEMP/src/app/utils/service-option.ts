export class ServiceOption {

  object: string;
  param: Map<string, string>;

  constructor(object: string, param: Map<string, string>) {
    this.object = object;
    this.param = param;
  }
}
