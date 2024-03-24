import React, { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { SelectSearch } from "./SelectSearch";
import { Loading } from "./Loading";
import { getSupportLanguages } from "../services/languages";
import { TextareaC } from "./Textarea";
import type { Option } from "../types";

export function TranslateText({ }) {
    const [languages, setLanguages] = useState([]);
    const [inputLanguage, setInputLanguage] = useState("");
    const [outputLanguage, setOutputLanguage] = useState("");
    const [text, setText] = useState("");
    const [output, setOutput] = useState("result");

    const handleInputLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        setInputLanguage(event.target.value);
    };

    const handleOutputLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        setOutputLanguage(event.target.value);
        console.log(outputLanguage);
    };

    const handleInputText = (event: FormEvent<HTMLTextAreaElement>) => {
        setText(event.currentTarget.value);
    };

    useEffect(() => {
        const list = Promise.all([getSupportLanguages()]).then((res) => {
            setInputLanguage(res[0][0].code);
            const list = res[0].map(
                (language: { code: string; language: string }) => ({
                    key: language.code,
                    item: language.language,
                })
            );
            setLanguages(list);
        });
    }, []);

    return (
        <div className="max-w-screen-xl m-auto px-4 lg:px-0 flex flex-col lg:flex-row gap-4">
            {/* input section */}
            <section className="flex flex-col gap-2 flex-1">
                <div>
                    <SelectSearch label="Languages" options={languages}/>
                </div>
                <TextareaC
                    key="input-text"
                    value={inputLanguage}
                    name="input-text"
                />
            </section>
            {/*output section*/}
            <section className="flex flex-col gap-2 flex-1">
                <div>
                    <SelectSearch label="Languages" options={languages.slice(1)}/>
                </div>
                <TextareaC
                    key="output-text"
                    onInput={() => { }}
                    copiable
                    value={output}
                    name="output-text"
                    disabled
                />
            </section>
        </div>
    );
}
