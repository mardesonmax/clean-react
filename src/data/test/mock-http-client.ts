import {
  HttpResponse,
  HttpStatusCode,
  HttpPostClient,
  HttpPostPrams,
} from '../protocols/http';

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string;

  body?: T;

  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok,
  };

  async post({ url, body }: HttpPostPrams<T>): Promise<HttpResponse<R>> {
    this.url = url;
    this.body = body;

    return Promise.resolve(this.response);
  }
}
