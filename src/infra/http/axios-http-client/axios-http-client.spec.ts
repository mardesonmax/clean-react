import { faker } from '@faker-js/faker';
import axios from 'axios';
import { HttpPostPrams } from '~/data/protocols/http';
import { AxiosHttpClient } from './axios-http-client';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const makeSut = (): AxiosHttpClient => new AxiosHttpClient();

const mockedAxisResult = {
  data: faker.science.unit(),
  status: faker.datatype.number(),
};

mockedAxios.post.mockResolvedValue(mockedAxisResult);

const mockPostRequest = (): HttpPostPrams<any> => ({
  url: faker.internet.url(),
  body: faker.science.unit(),
});

describe('AxiosHttpClient', () => {
  test('should call axios correct values', async () => {
    const request = mockPostRequest();
    const sut = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });

  test('should return the correct statusCode and body', async () => {
    const request = mockPostRequest();
    const sut = makeSut();
    const response = await sut.post(request);
    expect(response).toEqual({
      statusCode: mockedAxisResult.status,
      body: mockedAxisResult.data,
    });
  });
});
