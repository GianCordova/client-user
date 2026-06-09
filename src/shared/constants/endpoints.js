// export const ENDPOINTS = {
//     AUTH: process.env.EXPO_PUBLIC_URL || "http://localhost:5156/api/v1/auth",
//     USER: process.env.EXPO_PUBLIC_URL || "http://localhost:3003/kinalSportsUser/v1"
// }

export const ENDPOINTS = {
    AUTH: process.env.EXPO_PUBLIC_AUTH_URL || "http://10.0.2.2:5277/api/v1/Auth",
    USER: process.env.EXPO_PUBLIC_USER_URL || "http://10.0.2.2:3003/kinalSportsUsers/v1"
}