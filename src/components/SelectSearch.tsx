import React from "react";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import type { Option } from "../types";

interface SelectProps {
    label: string;
    options: Array<Option>
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SelectSearch(props: SelectProps) {
    const { label, options } = props;
    return (
        <Autocomplete label={label} onChange={props.onChange} defaultSelectedKey={options[0]?.["key"]}>
            {
                options.map(option => (
                    <AutocompleteItem key={option["key"]} value={option["key"]}>
                        {option["item"]}
                    </AutocompleteItem>
                ))
            }
        </Autocomplete>
    )
}