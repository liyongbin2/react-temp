const devBaseURL = "https://api.apiopen.top/";
const proBaseURL = "https://api.apiopen.top/";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;
