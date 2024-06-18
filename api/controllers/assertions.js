class CustomAssertions {
    verifyStatusCode(actualCode, expectedCode) {
        expect(actualCode).toBe(expectedCode);
        return this;
    }

    verifyPostResponse(response, data) {
        expect(response.userId).toBe(data.userId);
        expect(response.title).toBe(data.title);
        expect(response.body).toBe(data.body);
        return this;
    }

    verifyPutResponse(response, data) {
        expect(response.userId).toBe(data.userId);
        expect(response.title).toBe(data.title);
        expect(response.body).toBe(data.body);
        expect(response.id).toBe(1);
        return this;
    }

    verifySpecificPostId(response, data) {
        expect(response.id).toBe(data);
        return this;
    }
}

export const assertions = new CustomAssertions();