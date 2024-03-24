import { getApiUrl } from '../utils/config';
const API_KEY = import.meta.env.PUBLIC_TRANSLATOR_API_KEY;
const API_HOST = import.meta.env.PUBLIC_TRANSLATOR_API_HOST;

export const getSupportLanguages = async () => {
    const url = getApiUrl('support-languages');
    console.log(url);
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST
        }
    };
    const data = await fetch(url, options).then( res => res.json());

    return data;
}