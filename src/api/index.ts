import axios from 'axios';

export class FormApi {
  private url: string;
  private method: string = 'POST';

  constructor(initUrl: string, initMethod: string) {
    this.url = initUrl;
    this.method = initMethod;
  }
}
