import Body from "./models/body-model";
import { faker } from '@faker-js/faker';

export const postBody = new Body(
    faker.number.int({ min: 1, max: 100 }),
    faker.word.words({ count: { min: 2, max: 5 } }),
    faker.word.words({ count: { min: 3, max: 10 } })
);

export const putBody = new Body(
    faker.number.int({ min: 1, max: 100 }),
    faker.word.words({ count: { min: 2, max: 5 } }),
    faker.word.words({ count: { min: 3, max: 10 } })
);