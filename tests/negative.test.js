import { controllers } from "../api/controllers/controller";
import { invalidPostId, idForNegativeCheck } from "../api/data/id-data";

test('Get specific user with invalid id', async () => {
    const response = await controllers.getSpecificUser(idForNegativeCheck);
    expect(response.status).toBe(404);
    expect(response.statusText).toBe('Not Found');
});

test('Post data with invalid payload', async () => {
    const response = await controllers.postData(JSON.stringify(1));
    expect(response.status).toBe(500);
    expect(response.statusText).toBe('Internal Server Error');
});

test('Put specific post with invalid payload', async () => {
    const response = await controllers.putSpecificPost(JSON.stringify(1));
    expect(response.status).toBe(500);
    expect(response.statusText).toBe('Internal Server Error');
});


test('Get specific post with invalid id', async () => {
    const response = await controllers.getSpecificPost(invalidPostId);
    expect(response.status).toBe(404);
    expect(response.statusText).toBe('Not Found');
});

test('Delete specific post without id', async () => {
    const response = await controllers.deleteSpecificPost('');
    expect(response.status).toBe(404);
    expect(response.statusText).toBe('Not Found');
});