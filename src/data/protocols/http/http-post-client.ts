import { HttpResponse } from '.';

export type HttpPostPrams<T> = {
  url: string;
  body?: T;
};

export interface HttpPostClient<T, R> {
  post(params: HttpPostPrams<T>): Promise<HttpResponse<R>>;
}
