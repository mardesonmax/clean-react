import { faker } from '@faker-js/faker';
import { HttpPostPrams } from '../protocols/http';

export const mockPostRequest = (): HttpPostPrams<any> => ({
  url: faker.internet.url(),
  body: faker.science.unit(),
});
