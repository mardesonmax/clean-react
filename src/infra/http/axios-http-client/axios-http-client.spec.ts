import { faker } from '@faker-js/faker';
import axios from 'axios';
import { HttpPostPrams } from '~/data/protocols/http';
import { AxiosHttpClient } from './axios-http-client';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const makeSut = (): AxiosHttpClient => new AxiosHttpClient();

const mockPostRequest = (): HttpPostPrams<any> => ({
  url: faker.internet.url(),
  body: faker.science.unit(),
});

describe('AxiosHttpClient', () => {
  test('should call axios correct URL', async () => {
    const request = mockPostRequest();
    const sut = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url);
  });
});
