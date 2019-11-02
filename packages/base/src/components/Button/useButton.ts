import { useImperativeHandle, useRef } from "react";
import { mergeSlotProps } from "@fluentui/react-theming";
import { IButtonProps } from "./Button.types";

export interface IButtonState {
  onClick: (ev: MouseEvent) => void;
  rootRef: React.Ref<Element>;
}

const useButtonState = (userProps: IButtonProps): IButtonState => {
  const { componentRef, disabled, onClick } = userProps;

  const rootRef = useRef<HTMLElement>(null);

  useImperativeHandle(componentRef, () => ({
    focus: () => {
      rootRef.current && rootRef.current.focus();
    }
  }));

  const onButtonClick = (ev: MouseEvent) => {
    if (!disabled && onClick) {
      onClick(ev);

      if (ev.defaultPrevented) {
        return;
      }
    }
  }

  return { 
    onClick: onButtonClick,
    rootRef
  };
}

export const useButton = (props: IButtonProps) => {
  const { disabled, href } = props;

  const state = useButtonState(props);
  const { onClick, rootRef } = state;

  const slotProps = mergeSlotProps(props, {
    endIcon: {},
    root: {
      "aria-disabled": disabled, 
      href,
      onClick,
      ref: rootRef,
      role: "button",
      type: href ? 'link' : 'button'
    },
    startIcon: {},
  });
  return {
    slotProps,
    state
  };
};