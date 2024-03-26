import { getApiUrl } from '../utils/config';
const API_KEY = import.meta.env.PUBLIC_TRANSLATOR_API_KEY;
const API_HOST = import.meta.env.PUBLIC_TRANSLATOR_API_HOST;

export const getSupportLanguages = async () => {
    const url = getApiUrl('support-languages');
    
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

export const translateText =  async (text: string, sourceLang: string, targetLang: string) => {
    const url = getApiUrl('text');
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST
        },
        body: new URLSearchParams({
            from: sourceLang,
            to: targetLang,
            text: text
        })
    };

    const data = await fetch(url, options)
                .then(res => res.json())
                .then( json => {
                    if(json.message){
                        return "Couldn't translate text";
                    }
                    return json.translate
                })
                .catch(err => "Couldn't translate text");

    return data;
}