import axios from 'axios';

export default class FormApi {
  private url: string;
  private data: object | undefined;
  private method: string | undefined = 'POST';
  constructor(url: string, data?: object, method?: string) {
    this.url = url;
    this.data = data;
    this.method = method;
  }

  private createFormData = (obj: any): FormData => {
    const data: FormData = new FormData();
    for (const key in obj) {
      if (key) {
        data.append(key, obj[key]);
      }
    }
    return data;
  }
}
