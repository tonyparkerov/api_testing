import Config from "./models/config-model";
import { baseUrl } from "../../env";

export const postConfig = new Config(
    'post',
    `${baseUrl}/posts`,
    { 'Content-Type': 'application/json' }
);

export const putConfig = new Config(
    'put',
    `${baseUrl}/posts/1`,
    { 'Content-Type': 'application/json' }
);