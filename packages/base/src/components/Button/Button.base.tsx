import React from "react";
import { IButtonProps, IButtonSlots } from "./Button.types";
import { useButton } from "./useButton";

export const ButtonBase: React.FunctionComponent<IButtonProps> = (props: IButtonProps) => {
    const { children, href, slots } = props;
    const tag = href ? 'a' : 'button';
    const {
        endIcon: EndIcon = "i",
        root: Root = tag,
        startIcon: StartIcon = "i"
    } = (slots || {}) as IButtonSlots;

    const { slotProps = {} } = useButton(props);

    return (
        <Root {...slotProps.root}>
            <StartIcon {...slotProps.startIcon} />
            {children}
            <EndIcon {...slotProps.endIcon} />
        </Root>
    );
};