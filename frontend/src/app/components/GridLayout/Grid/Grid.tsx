import React, { PropsWithChildren } from "react";
import { StyledGrid } from "./style";

export type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Spacing = "sm" | "md" | "lg";

export interface IGridSystem extends PropsWithChildren {
    container?: boolean;
    item?: boolean;
    cols?: Cols;
    spacing?: Spacing;
    height?: number;
}

export const GridSysten: React.FC<IGridSystem> = ({container=false, item=false, cols, height, children, ...props}) => {
    return (
        <StyledGrid
            container={container}
            item={item}
            cols={cols}
            {...props}
        >
            {children}
        </StyledGrid>
    );
};