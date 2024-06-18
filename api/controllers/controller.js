import axios from "axios";
import { postConfig, putConfig } from "../data/config-data";
import { baseUrl } from "../../env";

class CustomControllers {

    async getSpecificUser(userId) {
        try {
            const response = await axios.get(`${baseUrl}/users/${userId}`);
            return response;
        } catch (error) {
            return error.response;
        }
    }

    async postData(body, config = postConfig) {
        config.data = body;
        try {
            const response = await axios.request(config);
            return response;
        } catch (error) {
            return error.response;
        }
    }

    async putSpecificPost(body, config = putConfig) {
        config.data = body;
        try {
            const response = await axios.request(config);
            return response;
        } catch (error) {
            return error.response;
        }
    }

    async getSpecificPost(postId) {
        try {
            const response = await axios.get(`${baseUrl}/posts/${postId}`);
            return response;
        } catch (error) {
            return error.response;
        }
    }

    async deleteSpecificPost(postId) {
        try {
            const response = await axios.delete(`${baseUrl}/posts/${postId}`);
            return response;
        } catch (error) {
            return error.response;
        }
    }
}

export const controllers = new CustomControllers();