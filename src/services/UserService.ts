import { Axios } from "axios";
import type { BackendResponse } from "../interfaces/BackendResponse";

export class UserService {
    httpClient: Axios;
    
    constructor() {
        this.httpClient = new Axios();
    }

    async getPatienData() {
        return this.httpClient.get<BackendResponse>('/users', {
            baseURL: import.meta.env.VITE_BACKEND_BASE_URL
        });
    }

}
