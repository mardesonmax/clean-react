import {
  HttpPostClient,
  HttpPostPrams,
} from '../protocols/http/http-post-client';
import { HttpResponse, HttpStatusCode } from '../protocols/http/http-reponse';

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;

  body?: object;

  response: HttpResponse = {
    statusCode: HttpStatusCode.ok,
  };

  async post({ url, body }: HttpPostPrams): Promise<HttpResponse> {
    this.url = url;
    this.body = body;

    return Promise.resolve(this.response);
  }
}
