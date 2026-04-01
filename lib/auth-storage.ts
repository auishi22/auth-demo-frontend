const TOKEN_KEY = "token";

export const authStorage = {
    // get token from localStorage
    getToken : () => {
        if (typeof window === "undefined") return null; // Return null if window is not defined (e.g., during server-side rendering)
        return localStorage.getItem(TOKEN_KEY);
    },

    // set token in localStorage
    setToken : (token : string) => {
        if (typeof window === "undefined") return;
        localStorage.setItem(TOKEN_KEY, token)
    },

    // remove token from localStorage
    removeToken : () => {
        if (typeof window === "undefined") return;
        localStorage.removeItem(TOKEN_KEY);
    }
}