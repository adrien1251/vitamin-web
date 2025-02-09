/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface VtmnButton {
        /**
          * The size of the button.
          * @default 'medium'
         */
        "size": 'small' | 'medium' | 'large' | 'stretched';
        /**
          * The variant of the button.
          * @default 'primary'
         */
        "variant": | 'primary'
    | 'primary-reversed'
    | 'secondary'
    | 'secondary-reversed'
    | 'ghost'
    | 'conversion';
    }
    interface VtmnCheckbox {
        /**
          * The id of the checkbox and its label.
         */
        "identifier": string;
        /**
          * The checked state of the checkbox.
          * @default false
         */
        "isChecked": boolean;
        /**
          * The disabled state of the checkbox.
          * @default false
         */
        "isDisabled": boolean;
        /**
          * The text of the checkbox.
         */
        "labelText": string;
        /**
          * The name of the checkbox.
         */
        "name": string;
        /**
          * The value of the checkbox.
         */
        "value": string;
    }
    interface VtmnLink {
        /**
          * The hypertext link
          * @default '#'
         */
        "href": string;
        /**
          * Is the link standalone or not
          * @default null
         */
        "isStandalone": boolean;
        /**
          * The size of the link.
          * @default null
         */
        "size": 'small' | 'medium' | 'large';
        /**
          * The target of the link
          * @default null
         */
        "target": string;
    }
    interface VtmnRadio {
        /**
          * The id of the radio and its label.
         */
        "identifier": string;
        /**
          * The checked state of the radio.
          * @default false
         */
        "isChecked": boolean;
        /**
          * The disabled state of the radio.
          * @default false
         */
        "isDisabled": boolean;
        /**
          * The text of the radio.
         */
        "labelText": string;
        /**
          * The name of the radio.
         */
        "name": string;
        /**
          * The value of the radio.
         */
        "value": string;
    }
    interface VtmnTextInput {
        /**
          * The helper text of the text input.
         */
        "helperText": string;
        /**
          * The icon to be displayed
         */
        "icon": string;
        /**
          * The id of the text input.
         */
        "identifier": string;
        /**
          * The disabled state of the text-input.
         */
        "isDisabled": boolean;
        /**
          * Is the text-input multiline or not.
         */
        "isMultiline": boolean;
        /**
          * The label text of the text input.
         */
        "labelText": string;
        /**
          * The placeholder of the text input.
         */
        "placeholder": string;
        /**
          * The state of the text-input.
         */
        "state": 'valid' | 'error' | null;
    }
    interface VtmnToggle {
        /**
          * The id of the toggle and its label.
         */
        "identifier": string;
        /**
          * The checked state of the toggle.
          * @default false
         */
        "isChecked": boolean;
        /**
          * The disabled state of the toggle.
          * @default false
         */
        "isDisabled": boolean;
        /**
          * The text of the toggle.
         */
        "labelText": string;
        /**
          * The size of the toggle.
         */
        "size": 'small' | 'medium';
    }
}
declare global {
    interface HTMLVtmnButtonElement extends Components.VtmnButton, HTMLStencilElement {
    }
    var HTMLVtmnButtonElement: {
        prototype: HTMLVtmnButtonElement;
        new (): HTMLVtmnButtonElement;
    };
    interface HTMLVtmnCheckboxElement extends Components.VtmnCheckbox, HTMLStencilElement {
    }
    var HTMLVtmnCheckboxElement: {
        prototype: HTMLVtmnCheckboxElement;
        new (): HTMLVtmnCheckboxElement;
    };
    interface HTMLVtmnLinkElement extends Components.VtmnLink, HTMLStencilElement {
    }
    var HTMLVtmnLinkElement: {
        prototype: HTMLVtmnLinkElement;
        new (): HTMLVtmnLinkElement;
    };
    interface HTMLVtmnRadioElement extends Components.VtmnRadio, HTMLStencilElement {
    }
    var HTMLVtmnRadioElement: {
        prototype: HTMLVtmnRadioElement;
        new (): HTMLVtmnRadioElement;
    };
    interface HTMLVtmnTextInputElement extends Components.VtmnTextInput, HTMLStencilElement {
    }
    var HTMLVtmnTextInputElement: {
        prototype: HTMLVtmnTextInputElement;
        new (): HTMLVtmnTextInputElement;
    };
    interface HTMLVtmnToggleElement extends Components.VtmnToggle, HTMLStencilElement {
    }
    var HTMLVtmnToggleElement: {
        prototype: HTMLVtmnToggleElement;
        new (): HTMLVtmnToggleElement;
    };
    interface HTMLElementTagNameMap {
        "vtmn-button": HTMLVtmnButtonElement;
        "vtmn-checkbox": HTMLVtmnCheckboxElement;
        "vtmn-link": HTMLVtmnLinkElement;
        "vtmn-radio": HTMLVtmnRadioElement;
        "vtmn-text-input": HTMLVtmnTextInputElement;
        "vtmn-toggle": HTMLVtmnToggleElement;
    }
}
declare namespace LocalJSX {
    interface VtmnButton {
        /**
          * The size of the button.
          * @default 'medium'
         */
        "size"?: 'small' | 'medium' | 'large' | 'stretched';
        /**
          * The variant of the button.
          * @default 'primary'
         */
        "variant"?: | 'primary'
    | 'primary-reversed'
    | 'secondary'
    | 'secondary-reversed'
    | 'ghost'
    | 'conversion';
    }
    interface VtmnCheckbox {
        /**
          * The id of the checkbox and its label.
         */
        "identifier": string;
        /**
          * The checked state of the checkbox.
          * @default false
         */
        "isChecked"?: boolean;
        /**
          * The disabled state of the checkbox.
          * @default false
         */
        "isDisabled"?: boolean;
        /**
          * The text of the checkbox.
         */
        "labelText"?: string;
        /**
          * The name of the checkbox.
         */
        "name"?: string;
        /**
          * The value of the checkbox.
         */
        "value"?: string;
    }
    interface VtmnLink {
        /**
          * The hypertext link
          * @default '#'
         */
        "href"?: string;
        /**
          * Is the link standalone or not
          * @default null
         */
        "isStandalone"?: boolean;
        /**
          * The size of the link.
          * @default null
         */
        "size"?: 'small' | 'medium' | 'large';
        /**
          * The target of the link
          * @default null
         */
        "target"?: string;
    }
    interface VtmnRadio {
        /**
          * The id of the radio and its label.
         */
        "identifier": string;
        /**
          * The checked state of the radio.
          * @default false
         */
        "isChecked"?: boolean;
        /**
          * The disabled state of the radio.
          * @default false
         */
        "isDisabled"?: boolean;
        /**
          * The text of the radio.
         */
        "labelText"?: string;
        /**
          * The name of the radio.
         */
        "name"?: string;
        /**
          * The value of the radio.
         */
        "value"?: string;
    }
    interface VtmnTextInput {
        /**
          * The helper text of the text input.
         */
        "helperText": string;
        /**
          * The icon to be displayed
         */
        "icon"?: string;
        /**
          * The id of the text input.
         */
        "identifier": string;
        /**
          * The disabled state of the text-input.
         */
        "isDisabled"?: boolean;
        /**
          * Is the text-input multiline or not.
         */
        "isMultiline"?: boolean;
        /**
          * The label text of the text input.
         */
        "labelText": string;
        /**
          * The placeholder of the text input.
         */
        "placeholder": string;
        /**
          * The state of the text-input.
         */
        "state"?: 'valid' | 'error' | null;
    }
    interface VtmnToggle {
        /**
          * The id of the toggle and its label.
         */
        "identifier": string;
        /**
          * The checked state of the toggle.
          * @default false
         */
        "isChecked"?: boolean;
        /**
          * The disabled state of the toggle.
          * @default false
         */
        "isDisabled"?: boolean;
        /**
          * The text of the toggle.
         */
        "labelText"?: string;
        /**
          * The size of the toggle.
         */
        "size"?: 'small' | 'medium';
    }
    interface IntrinsicElements {
        "vtmn-button": VtmnButton;
        "vtmn-checkbox": VtmnCheckbox;
        "vtmn-link": VtmnLink;
        "vtmn-radio": VtmnRadio;
        "vtmn-text-input": VtmnTextInput;
        "vtmn-toggle": VtmnToggle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "vtmn-button": LocalJSX.VtmnButton & JSXBase.HTMLAttributes<HTMLVtmnButtonElement>;
            "vtmn-checkbox": LocalJSX.VtmnCheckbox & JSXBase.HTMLAttributes<HTMLVtmnCheckboxElement>;
            "vtmn-link": LocalJSX.VtmnLink & JSXBase.HTMLAttributes<HTMLVtmnLinkElement>;
            "vtmn-radio": LocalJSX.VtmnRadio & JSXBase.HTMLAttributes<HTMLVtmnRadioElement>;
            "vtmn-text-input": LocalJSX.VtmnTextInput & JSXBase.HTMLAttributes<HTMLVtmnTextInputElement>;
            "vtmn-toggle": LocalJSX.VtmnToggle & JSXBase.HTMLAttributes<HTMLVtmnToggleElement>;
        }
    }
}
