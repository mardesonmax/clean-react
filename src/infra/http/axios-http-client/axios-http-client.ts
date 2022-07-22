import axios from 'axios';
import { HttpPostPrams } from '~/data/protocols/http';

export class AxiosHttpClient {
  // eslint-disable-next-line class-methods-use-this
  async post(params: HttpPostPrams<any>): Promise<void> {
    await axios.post(params.url);
  }
}
