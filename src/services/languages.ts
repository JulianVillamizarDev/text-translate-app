import { getApiUrl } from '../utils/config';
const API_KEY = import.meta.env.PUBLIC_TRANSLATOR_API_KEY;
const API_HOST = import.meta.env.PUBLIC_TRANSLATOR_API_HOST;

export const getSupportLanguages = async () => {
    const url = getApiUrl('/support-languages');
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
}