import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { SelectSearch } from "./SelectSearch";
import { getSupportLanguages, translateText } from "../services/languages";
import { TextareaC } from "./Textarea";
import type { Language } from "../types";

export function TranslateText({ }) {
    const [languages, setLanguages] = useState([]);
    const [outputLanguages, setOutputLanguages] = useState([]);
    const [inputLang, setInputLang] = useState("auto");
    const [outputLang, setOutputLang] = useState("en");
    const [text, setText] = useState("");
    const [output, setOutput] = useState("");

    const handleinputLang = (value: any) => {
        setInputLang(value);
    };

    const handleoutputLang = (value: any) => {
        setOutputLang(value);
    };

    const handleOnChangeInputText = (event: React.ChangeEvent <HTMLInputElement>) => {
        const value = event.target.value;
        setText(value);
    };

    const handleTranslate = () => {
        translateText(inputLang, outputLang, text)
            .then( res => {
                setOutput(res)
            });
        
    }

    useEffect(() => {
        const list = Promise.all([getSupportLanguages()]).then((res) => {
            const list = res[0].map(
                (language: Language) => ({
                    value: language.code,
                    label: language.language,
                })
            );
            setLanguages(list);
            setOutputLanguages(list.slice(1));
        });
    }, []);

    return (
        <div className="max-w-screen-xl m-auto p-4 xl:p-0 grid lg:grid-cols-2 gap-4">
            {/* input section */}
            <section className="flex flex-col gap-2 ">
                <div>
                    <SelectSearch 
                        label="Languages" 
                        options={languages}
                        onSelectionChange={handleinputLang}
                        defaultSelectedKey='auto'
                    />
                </div>
                <TextareaC
                    key="input-text"
                    name="input-text"
                    onChange={handleOnChangeInputText}
                    text={text}
                    counter
                    counterValue={text.length}
                />
                <Button 
                    variant="flat" 
                    color="primary" 
                    size="lg"
                    onClick={handleTranslate}
                >
                    Translate
                </Button>
            </section>
            {/*output section*/}
            <section className="flex flex-col gap-2 flex-1">
                <div>
                    <SelectSearch 
                        label="Languages" 
                        options={outputLanguages} 
                        defaultSelectedKey='en'
                        onSelectionChange={handleoutputLang}/>
                </div>
                <TextareaC
                    key="output-text"
                    copiable
                    text={output}
                    name="output-text"
                    readOnly
                />
            </section>
        </div>
    );
}
