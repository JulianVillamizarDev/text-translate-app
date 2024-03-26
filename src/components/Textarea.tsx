import { useState, type KeyboardEventHandler } from 'react';
import {Textarea, Button} from "@nextui-org/react";

interface Props {
    onChange?: (event: React.ChangeEvent <HTMLInputElement>) => void;
    name: string;
    copiable?: boolean;
    text?: string;
    disabled?: boolean;
    counter?: boolean;
    counterValue?: number;
    counterLimit?: number; //default length set to 1000 
    readOnly?: boolean;
    textToSpeech?: boolean
}

export function TextareaC(props: Props) {
    const { onChange, name, copiable, textToSpeech, disabled, text = '', counter, counterValue, counterLimit = 1000, readOnly } = props;
    return (
        <div className='relative max-w-full'>
            <Textarea 
                value={text}
                name={name}
                fullWidth
                disabled={disabled}
                onChange={onChange}
                readOnly={readOnly}
                maxLength={counterLimit}
                minRows={5}
            />
            <div className='absolute bottom-0 right-0 p-2 flex justify-center items-center gap-2'>
                {
                    counter && 
                        <span className='p-2 text-gray-400'>
                            {counterValue}/{counterLimit}
                        </span>
                } 
                {
                    copiable &&
                    <Button 
                        onClick={() => {
                            navigator.clipboard.writeText(text);
                        }} 
                        color='primary' 
                        variant='light'
                    >
                        Copy
                    </Button>
                }   
                {
                    textToSpeech &&
                    <Button 
                        onClick={() => {
                            const msg = new SpeechSynthesisUtterance();
                            msg.text = text;
                            window.speechSynthesis.speak(msg);
                        }} 
                        color='primary' 
                        variant='flat'
                        className='p-0'
                    >
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9v3a5.006 5.006 0 0 1-5 5h-4a5.006 5.006 0 0 1-5-5V9m7 9v3m-3 0h6M11 3h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"/>
                        </svg>
                    </Button>
                }
            </div>
            
        </div>
        
    )
}