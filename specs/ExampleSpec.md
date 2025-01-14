> This document represents a component specification template.
>
> Its primary audience is a developer authoring a given component.
>
> Specs are important to write down, as the author implementing a component may not always be the long-term maintainer. Decisions should be recorded so that maintainers know what was originally intended, but also so that consumers understand the expected behavior.

# {ComponentName} component specification

> Enter a description here. Example:
>
> The `{ComponentName}` component allows a user to slide a single thumb along a horizontal or vertical axis, representing a min/max range.

## Visual examples

> Provide, if possible, visual examples of the component being built.

## Component anatomy

> Outline the parts of a component; what their names and purposes are. Ideally order them in DOM order. Also consider if the component should be broken into subcomponents. Example:
>
> | Name        | Considerations                                                       |
> | ----------- | -------------------------------------------------------------------- |
> | `root`      | The root element.                                                    |
> | `rail`      | The line behind the Slider thumb and rail.                           |
> | `mark`      | Optional mark line on top of the rail, below the track.              |
> | `markLabel` | A label aligned with a mark to render the textual value of the mark. |
> | `track`     | The selected area of the Slider.                                     |
> | `thumb`     | The focusable draggable knob within the Slider.                      |
> | `tooltip`   | The tooltip rendered above a thumb.                                  |

## Component props

> Outline the recommended props for the component; taking into consideration conformance guidelines. Make sure to discuss differences and rationalizations.
>
> Example:
>
> | Name           | Type (default value if clarification needed) | Purpose                                                                                    |
> | -------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------ |
> | `as`           | `string` (`"div"`)                                 | Replaces the primitive root element type.                                                  |
> | `className`    | `string`                                       | Allows the author to add a class name to the root element.                                 |
> | `defaultValue` | `number` \| `number[]`                           | Provides the uncontrolled default value of the component, mutually exclusive with `value`. |
> | `disabled`     | `boolean`                                      | Specifies whether a component should be disabled.                                          |  |

## DOM hierarchy/structure

> Define the recommended DOM shape to represent the component, and how important attributes (aria attributes especially) are applied to the various parts. In cases where a component nests other components, ideally, you expand the full dom structure to understand both the expectation and if there are shortcommings in the child components' customizability.
>
> Example:
>
> ```html
> <div class="root">
>   <div class="rail"></div>
>
>   <div class="mark">
>     <label class="markLabel" />
>   </div>
>   <div class="track" />
>   <div
>     class="thumb"
>     tabindex="0"
>     role="{ComponentName}"
>     aria-valuenow="0"
>     aria-valuemin="0"
>     aria-valuemax="10"
>   />
>   <input name="{name}" type="hidden" value="0" />
> </div>
> ```

## Behaviors

> Define the behaviors of the component including user interactions and expected screen reader behaviors. If there are also considerations for different screen sizes or form factors, include those as well. Link the relevant [W3 ARIA specification](https://www.w3.org/TR/WCAG21) (and read it).
>
> - How should disabled behavior work (are things focusable)?
> - How and when should focus indicators show up?

### Keyboard interaction

> Define the keyboarding behaviors of the component. What specific keyboard events should be observed and how they affect the component?
>
> - Consider arrow behaviors vs tabbing
> - Do modifiers affect things? (shift, ctrl, meta)
> - Are states changed as a result of a keystroke?
> - Are some events triggered on key down vs key press?
> - RTL settings?
>
> Example:
>
> | Key       | Description                                                                                                                                                    |
> | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | Up/Right  | Increments the value of the {ComponentName} by the amount specified by the `step` prop. If the `shift` modifier is pressed, increases by 10x the `step` value. |
> | Down/Left | Decrements the value of the {ComponentName} by the amount specified by the `step` prop. If the `shift` modifier is pressed, increases by 10x the `step` value. |

### Mouse interaction

> Define the mouse behaviors of the component.
>
> - What specific mouse events (down, up, move) are being listened to and how does that affect the component?
> - For behaviors which are accessible through mouse input, can you also do the same thing using a keyboard?
>
> Example:
>
> - `mousedown` should immediately attempt to set value to the appropriate value.
> - `mousemove` should be attached to the window during mousedown to track window-wise move events. Value should be updated appropriately. Note; if a `mousemove` occurs
>   without the primary button pressed, tracking should cancel and treat the even as a `mouseup`. (Edge case: mouse down, move cursor out of window, release mouse)
> - `mouseup` should remove the `mousemove` event.

### Touch interaction

> Define the touch behaviors of the component.
>
> - Are there different behaviors than in mouse scenarios?
> - Are touch targets large enough for fat fingers? (44x44px is the recommended minimum size.) For example, the `thumb` of a slider might appear to be small, but the touchable area should be larger.

### Screen reader accessibility

> Review/link aria specifications and list which aria labels should appear on which parts of the component.
>
> If there are ambiguous requirements or lacking guidance in the specifications, consult the experts in your organization to propose refinements/additions to the specifications.
>
> Example:
>
> `root`:
>
> - should render the native element using the `as` prop, defaulting to `div`
> - should mix in native props expected for the element type defined in `as`.
>
> `thumb`:
>
> - should be focusable via `tabindex=0`
> - role set to `{ComponentName}`
> - receives `aria-valuemin` and `aria-valuemax` representing min/max
> - receives `aria-valuenow` representing the current value

### Accessibility concerns for the user

> Consider which props, mapped to attribute values, must be provided for the user to make the component accessible. Often props which require localization or calculating a value must be provided by the user.
>
> For React props, consider using `ariaLabel` and `ariaLabelledBy`, rather than the natural kebab-cased variants (`aria-label`) so that they can be provided without destroying type safety.

## Themability and customization

> Components should be built to withstand multiple aesthetic looks. This ensures customizability and reuse in the long term.
>
> At minimum, each component should consider the following theming requirements: light mode, dark mode, high contrast light and high contrast dark.
>
> If applicable, include some screenshots of themed variants of the component to get an idea of what is to be achieved through customization.

## Class names

> Components should include a class name contract to achieve maximum reusability. The contract should include:
>
> - A classname per anatomy (Examples: `root`, `rail`, `thumb`)
> - A classname per state/variant attached to the root in applicable conditions (Examples: `rootDisabled`, `rootSelected`)
>
> Example:
>
> | Name           | Description                             |
> | -------------- | --------------------------------------- |
> | `root`         | Root slot class.                        |
> | `rail`         | Rail slot class.                        |
> | `thumb`        | Thumb slot class.                       |
> | `rootDisabled` | Applied when the component is disabled. |
> | `rootSelected` | Applied when the component is selected. |

### Component design tokens

> Assuming the Fluent UI styling system, a component's styling may reference design tokens.
>
> Tokens represent the general look and feel of the various visual slots. Tokens feed values into the styling during applicable conditions. For example, `railBackgroundHovered` would apply to the `rail` background when the mouse cursor is hovered over the component.
>
> Tokens use a camelCased name following this format:
> `{slot (or none for root)}{property}{state (or none for default)}`. Example: `thumbSizeHovered`.
>
> Common property names: `size`, `background`, `color`, `borderRadius`
>
> Common states: `hovered`, `pressed`, `focused`, `checked`, `checkedHovered`, `disabled`
>
> Example:
>
> | Name | Considerations |
> | ------------------ | -------------- |
> | `background` | Background on the root element in the idle enabled state. |
> | `railBorderColor` | Border color of the rail. |
> | `railBorderRadius` | Rail border radius. |
> | `railBorderWidth` | |
> | `railBackground` | Rail background color. |
> | `railBackgroundDisabled` | Rail background color when disabled. |

### Considerations for different screen sizes

> Consider how the component will behave in the context of phone/tablet/desktop sizes. Would different sizes cause the component look or behave differently?

## Use cases

> If applicable, call out specific use cases for the component that are exceptional.
>
> Example:
>
> The `Slider` component may be used within a `Form` component by providing the `name` prop to indicate the name of the input element to be fed into the form action.

## Migration policy

> If there is a previous version (or multiple versions) of the component, list the plan of migration.
>
> There are 4 approaches to API surface changes to consider. It is assumed that all changes will be listed for the component in release notes. Additionally, we can consider if these apply:
>
> 1. Adjust the existing version in a non-breaking way to pull the legacy surface closer to the new one.
> 2. Provide both old/new APIs in new version. (Not recommended, but may be necessary with high traffic scenarios.)
> 3. Create a codemod to upgrade existing partner code to reflect the new API surface.
> 4. Create a shim component to shim the legacy API in to the new one.
>
> List each major change and suggest one or more approaches to adapt the new component. Example:
>
> | Change                                         | Strategy |
> | ---------------------------------------------- | -------- |
> | Rename `onChanged(ev)` to `onChange(ev, data)` | Code mod |
> | Replace `originFromZero` with `origin`         | Code mod |
> | Remove `styles`                                | Shim     |

## Implementation research

> It's important to research. Consider a number of existing open source component frameworks. (AntDesign, Base UI, Carbon, Chakra, FastDNA, Material UI, Semantic UI, Stardust, UI Fabric)
>
> - Try them. Create a codesandbox trying the other implementations.
> - What features do they have?
> - What variants to they support?
> - What props do they contain and what is the general consensus?
> - What does the DOM shape look like?
> - How did they approach the aria labeling and roles?
> - Which elements are focused and how do they work when disabled?
> - What is the anatomy, and how do they name things?
> - Are keyboarding/mouse/touch interactions similar/different?
> - How is focus managed? What about when disabled?
