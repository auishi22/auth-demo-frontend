import { api } from "../api";
import { loginPayload, loginResponse } from "../types/auth.types";

export const authService = {
    // login API call
    login : async (payload : loginPayload) => {
        const res = await api.post<loginResponse>('/login',payload);
        // console.log(res.data)
        return res.data;
    }
}