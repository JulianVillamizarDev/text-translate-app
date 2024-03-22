const API_URL = import.meta.env.PUBLIC_TRANSLATOR_API_URL;

export const getApiUrl = (path: string): string => `${API_URL}/${path}`;

