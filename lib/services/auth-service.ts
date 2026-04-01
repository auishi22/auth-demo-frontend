import { api } from "../api";
import { fetcher } from "../fetcher";
import { currentUserApiResponse, loginPayload, loginResponse } from "../types/auth.types";

// export const authService = {
//     // login API call
//     login : async (payload : loginPayload) => {
//         const res = await api.post<loginResponse>('/login',payload);
//         // console.log(res.data)
//         return res.data;
//     },
//     // get current user API call 
//     getCurrentUser : async (token : string) =>{
//         const res = await api.get<CurrentUserApiResponse>("/user",{
//             headers : {
//                 Authorization : `Bearer ${token}`
//             }
//         })
//         return res.data;
//     }
// }

export const authService = {
    // login API call
    login : (payload: loginPayload): Promise<loginResponse> =>{
        return fetcher<loginResponse>("/login",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(payload)
        })
    },

    // get current user API call
    getCurrentUser : (token : string):Promise<currentUserApiResponse> =>{
        return fetcher<currentUserApiResponse>("/user",{
            headers : {
               Authorization : `Bearer ${token}` 
            }
        })
    } 
}

