import { authStorage } from "./auth-storage";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const fetcher = async <T> (url: string, options?: RequestInit) : Promise<T> => {
    const res = await fetch(`${baseUrl}${url}`,options);
    const data = await res.json();

    if(!res.ok){
        if(res.status === 401){
            // Unauthorized error, remove token and redirect to login
            authStorage.removeToken();
            window.location.href = "/login";
        }
        throw new Error(data.message);
    }

    return data;
}
