import axios from 'axios';
import {
  HttpPostClient,
  HttpPostPrams,
  HttpResponse,
} from '~/data/protocols/http';

export class AxiosHttpClient implements HttpPostClient<any, any> {
  async post({ url, body }: HttpPostPrams<any>): Promise<HttpResponse<any>> {
    const { status, data } = await axios.post(url, body);

    return {
      statusCode: status,
      body: data,
    };
  }
}
