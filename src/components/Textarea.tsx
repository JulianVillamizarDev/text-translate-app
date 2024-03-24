import { useState } from 'react';
import {Textarea, Button} from "@nextui-org/react";

interface Props {
    onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
    name: string;
    copiable?: boolean;
    value?: string;
    disabled?: boolean;
}

export function TextareaC(props: Props) {
    const {onInput, name, copiable, value, disabled} = props;
    const MAX_LENGTH = 1000;
    return (
        <div className='relative w-full h-full'>
            <Textarea 
                onInput={onInput}
                name={name}
                value={value}
                className='w-full h-full resize-none'
                disabled={disabled}
            />
            <div className='absolute bottom-0 right-0 p-2'>
                {
                    props.value && 
                        <span className='p-2 text-gray-400'>
                            {props.value.length}/{MAX_LENGTH}
                        </span>
                } 
                {
                    copiable && value &&
                    <Button 
                        onClick={() => navigator.clipboard.writeText(value)} 
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