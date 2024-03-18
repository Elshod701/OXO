import axios from "axios"
export const request = axios.create({ baseURL: import.meta.env.VITE_API_KEY })


// request.interceptors.request.use(
//     (config) => {
//         const token = loadState("user");
//         config.headers = {
//             ...config.headers,
//             Authorization: `Bearer ${token?.accessToken}`,
//         };
//         PostData(config);
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// request.interceptors.response.use(
//     (response) => {
//         if (response.status === 401) {
//             return (window.location.pathname = "/");
//         }
//         return response;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );


