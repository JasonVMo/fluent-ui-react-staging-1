import * as React from "react";
import { useControlledState } from "../../hooks/useControlledState";
import { useWindowEvent } from "../../hooks/useWindowEvent";
import { ISliderProps, ISliderSlotProps } from "./Slider.types";

function _getDragValues(
  ev: any,
  containerRect: any,
  min: any,
  max: any,
  step: any,
  snapToStep: any
) {
  const range = max - min;
  const percentage = Math.min(
    1,
    Math.max(0, (ev.clientX - containerRect.left) / containerRect.width)
  );
  const value = Math.round(min + (percentage * range) / step) * step;

  return {
    percentage: snapToStep ? (100 * value) / (max - min) : 100 * percentage,
    value
  };
}

export interface ISliderState {
  min: number;
  max: number;
  value: number;
  trackRef: React.Ref<Element>;
  onMouseDown: (ev: React.MouseEvent) => void;
  onKeyDown: (ev: React.MouseEvent) => void;
  percentage: number;
}

/**
 * Slider hook for building an accessible slider.
 *
 * https://www.w3.org/TR/2017/REC-wai-aria-1.1-20171214/#slider
 */
const useSliderState = (userProps: ISliderProps): ISliderState => {
  const {
    min = 0,
    max = 100,
    step = 1,
    value: controlledValue,
    snapToStep,
    onChange,
    defaultValue
  } = userProps;
  const [dragging, setDragging] = React.useState(false);
  const [value, setValue] = useControlledState(controlledValue, defaultValue);
  const [dragState, setDragState] = React.useState({
    trackRect: null
  });
  const trackRef = React.useRef(null);
  const percentage = (100 * (value - min)) / (max - min);

  const _updateValue = React.useCallback(
    (ev, val) => {
      if (onChange) {
        onChange(ev, val);
      }

      setValue(val);
      return val;
    },
    [onChange, setValue]
  );

  const onMouseMove = React.useCallback(
    (ev: any, allowDefault: any) => {
      if (dragState && dragState.trackRect) {
        const drag = _getDragValues(
          ev,
          dragState.trackRect,
          min,
          max,
          step,
          snapToStep
        );

        _updateValue(ev, drag.value);
      }

      if (!allowDefault) {
        ev.preventDefault();
        ev.stopPropagation();
      }
    },
    [
      _getDragValues,
      dragging,
      dragState,
      min,
      max,
      step,
      snapToStep,
      _updateValue
    ]
  );

  const onMouseDown = React.useCallback(
    (ev: any) => {
      setDragState({
        trackRect: (trackRef.current as any).getBoundingClientRect()
      });
      setDragging(true);
      onMouseMove(ev, true);
    },
    [onMouseMove, setDragging, dragState, setDragState, trackRef]
  );

  const onMouseUp = React.useCallback(
    (ev: any) => {
      setDragging(false);

      ev.preventDefault();
      ev.stopPropagation();
    },
    [setDragging]
  );

  useWindowEvent("mousemove", dragging && onMouseMove);
  useWindowEvent("mouseup", dragging && onMouseUp);

  const onKeyDown = (ev: any) => {
    let newValue;

    switch (ev.which) {
      case 36: // home
        newValue = min;
        break;

      case 35: // end
        newValue = max;
        break;

      case 37: // left
      case 40: // down
        newValue = ev.metaKey ? min : Math.max(min, value - step);
        break;

      case 38: // up
      case 39: // right
        newValue = ev.metaKey ? max : Math.min(max, value + step);
        break;

      default:
        return;
    }

    _updateValue(ev, newValue);
    ev.preventDefault();
    ev.stopPropagation();
  };

  return {
    min,
    max,
    value,
    trackRef,
    onMouseDown,
    onKeyDown,
    percentage
  };
};

export const useSlider = (props: ISliderProps) => {
  const state = useSliderState(props);
  const {
    min,
    max,
    value,
    trackRef,
    onMouseDown,
    onKeyDown,
    percentage
  } = state;
  const slotProps: ISliderSlotProps = {
    root: {
      role: "slider",
      onMouseDown,
      onKeyDown,
      ...(props.slotProps && props.slotProps.root)
    },
    rail: {
      ...{ ref: trackRef },
      ...(props.slotProps && props.slotProps.rail)
    },
    track: {
      ...{
        style: {
          width: `${percentage}%`
        }
      },
      ...(props.slotProps && props.slotProps.track)
    },
    thumb: {
      ...{
        tabIndex: 0,
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": value,
        style: {
          left: `${percentage}%`
        }
      },
      ...(props.slotProps && props.slotProps.thumb)
    }
  };

  return {
    state,
    slotProps
  };
};