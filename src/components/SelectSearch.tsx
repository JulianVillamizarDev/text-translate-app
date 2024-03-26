import React, { useState} from "react";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import type { Option } from "../types";

interface SelectProps {
    label: string;
    options: Array<Option>
    onSelectionChange?: (event: any) => void;
    defaultSelectedKey?: string;
}

export function SelectSearch(props: SelectProps) {
    const { label, options, onSelectionChange, defaultSelectedKey } = props;

    return (
        <Autocomplete 
            label={label}
            onSelectionChange={ onSelectionChange }
            defaultItems={options}
            defaultSelectedKey={defaultSelectedKey}
        >
            {
                (item: Option) => (
                    <AutocompleteItem key={item.value}>
                        {item.label}
                    </AutocompleteItem>
                )
            }
            {/* {
                options.map(option => (
                    <AutocompleteItem key={option["key"]} value={option["key"]}>
                        {option["item"]}
                    </AutocompleteItem>
                ))
            } */}
        </Autocomplete>
    )
}