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
}

export function TextareaC(props: Props) {
    const { onChange, name, copiable, disabled, text = '', counter, counterValue, counterLimit = 1000, readOnly } = props;
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
            <div className='absolute bottom-0 right-0 p-2'>
                {
                    counter && 
                        <span className='p-2 text-gray-400'>
                            {counterValue}/{counterLimit}
                        </span>
                } 
                {
                    copiable &&
                    <Button 
                        onClick={() => navigator.clipboard.writeText(text)} 
                        color='primary' 
                        variant='light'
                    >
                        Copy
                    </Button>
                }   
            </div>
            
        </div>
        
    )
}