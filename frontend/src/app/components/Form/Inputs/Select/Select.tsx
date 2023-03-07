import React, { SelectHTMLAttributes, useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "../../../../context/formContext";
import { SelectList } from "../../../../utils/SelectList";
import { SelectContainer } from "./style";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    id: any;
    value: string;
    name: any;
    listOptions: SelectList[];
    pixels?: string;
    selected?: boolean;
    color?: string;
    class?: string;
    disable?: boolean;
    subList?: any[];
    label: any;
    disabled?: boolean;
};

export const Select: React.FC<SelectProps> = ({ id, name, value, listOptions, label, pixels, ...props }) => {
    const [ selectdOptions, setSelectdOptions ] = useState();
    const inputSelectRef = useRef<any>(null);

    const { sendValues, inputArrayValues, setFormField } = useForm();

    useEffect(() => {
        setFormField({
            name: inputSelectRef.current?.name,
            ref: inputSelectRef.current
        });
    }, [setFormField]);

    return (
        <SelectContainer>
            <label htmlFor={id}>
                <span>
                    {label}
                </span>
            </label>
            <select
                name={name}
                id={id}
                value={value}
                ref={inputSelectRef}
                {...props}>
                <option
                    value=""
                    disabled
                    >Selecione
                </option>
                {listOptions?.map((item, index) => {
                            return (
                                <option
                                    key={index}
                                    value={item.key}
                                    >
                                        {item.value}
                                </option>        
                            )
                        }
                    )
                }
            </select>
        </SelectContainer>
    );
};