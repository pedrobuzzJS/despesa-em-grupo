import React from "react";
import { IconBaseProps } from "react-icons";

export interface LinkMenu {
    id:                 number;
    name:               string;
    parameters?:        string;
    route?:             string;
    icon:               React.ComponentType<IconBaseProps>;
    parent_id?:         number;
    component?:         string;
    has_childrens:      boolean;
    order?:             number;
    disabled:           boolean;
    status_id?:         number;
    created_at:         Date;
    updated_at?:        Date;
};