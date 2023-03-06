import React, { PropsWithChildren } from "react";
import { StyledGrid } from "./style";

export type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Spacing = "sm" | "md" | "lg";
type Justify = "start" | "center" | "end";

export interface IGridSystem extends PropsWithChildren {
    container?: boolean;
    item?: boolean;
    wrapper?: boolean
    cols?: Cols;
    spacing?: Spacing;
    height?: number;
    justify?: Justify;
}

export const GridSysten: React.FC<IGridSystem> = ({container=false, item=false, wrapper=false, cols, height, children, justify, ...props}) => {
    return (
        <StyledGrid
            container={container}
            item={item}
            cols={cols}
            justify={justify}
            {...props}
        >
            {children}
        </StyledGrid>
    );
};