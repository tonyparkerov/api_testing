import { controllers } from "../api/controllers/controller";
import { assertions } from "../api/controllers/assertions";
import { user5Response } from "../api/data/user5";
import { randomPostId } from "../api/data/id-data";
import { postBody, putBody } from "../api/data/body-data";

test('Get specific user', async () => {
    const response = await controllers.getSpecificUser(5);
    expect(response.data).toEqual(user5Response);
});

test('Post data and verify response', async () => {
    const response = await controllers.postData(postBody);
    assertions.verifyStatusCode(response.status, 201).verifyPostResponse(response.data, postBody);
});

test('Put specific post and verify response', async () => {
    const response = await controllers.putSpecificPost(putBody);
    assertions.verifyStatusCode(response.status, 200).verifyPutResponse(response.data, putBody);
});

test('Get specific post', async () => {
    const response = await controllers.getSpecificPost(randomPostId);
    assertions.verifyStatusCode(response.status, 200).verifySpecificPostId(response.data, randomPostId);
});

test('Delete specific post', async () => {
    const response = await controllers.deleteSpecificPost(randomPostId);
    assertions.verifyStatusCode(response.status, 200);
});