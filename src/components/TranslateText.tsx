import React, { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { Loading } from "./Loading";
import { getSupportLanguages } from "../services/languages";

export function TranslateText({ }) {

    const [languages, setLanguages] = useState([]);
    const [inputLangauge, setInputLanguage] = useState('auto');
    const [outputLanguage, setOutputLanguage] = useState('af');
    const [text, setText] = useState('');
    const [output, setOutput] = useState('');

    const handleInputLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        setInputLanguage(event.target.value);
        
    }

    const handleOutputLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        setOutputLanguage(event.target.value);
    }

    const handleInputText = (event: FormEvent<HTMLTextAreaElement>) => {
        setText(event.currentTarget.value);
    }

    
    useEffect(() => {
        const list = Promise.all([getSupportLanguages()])
                            .then( (res) => console.log(res));
    }, [])

    return (
        <div className="max-w-screen-xl m-auto flex flex-row gap-4">
            <section className="flex flex-col gap-2 flex-1">
                <div>
                    <select
                        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                        onChange={handleInputLanguage}
                    >
                    </select>
                </div>
                <textarea key="inputText" name="inputText" className="w-full h-full bg-gray-800" onInput={handleInputText} />
            </section>
            <section className="flex flex-col gap-2 flex-1">
                <div>
                    <select
                        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                        onChange={handleOutputLanguage}
                    >
                    </select>
                </div>
                <textarea key="inputText" name="inputText" className="w-full h-full bg-gray-800" />
            </section>
        </div>
    );

}