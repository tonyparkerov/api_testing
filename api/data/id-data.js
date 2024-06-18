import { faker } from '@faker-js/faker';

export const randomPostId = faker.number.int({ min: 1, max: 100 });
export const invalidPostId = faker.number.int({ min: 101 });
export const idForNegativeCheck = faker.number.int({ min: 11 });