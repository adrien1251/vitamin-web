import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';

export default {
  title: 'Components/vtmn-checkbox',
  component: 'vtmn-checkbox',
  argTypes: {
    identifier: {
      type: { name: 'string', required: true },
      description: 'The id of the checkbox and its label.',
      defaultValue: 'my-checkbox',
      control: {
        type: 'text',
      },
    },
    labelText: {
      type: { name: 'string', required: false },
      description: 'The label of the checkbox.',
      defaultValue: 'My label',
      control: {
        type: 'text',
      },
    },
    name: {
      type: { name: 'string', required: false },
      description: 'The name of the checkbox.',
      defaultValue: null,
      control: {
        type: 'text',
      },
    },
    value: {
      type: { name: 'string', required: false },
      description: 'The value of the checkbox.',
      defaultValue: null,
      control: {
        type: 'text',
      },
    },
    checked: {
      type: { name: 'boolean', required: false },
      description: 'The checked state of the checkbox',
      defaultValue: null,
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      type: { name: 'boolean', required: false },
      description: 'The disabled state of the checkbox',
      defaultValue: null,
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    backgrounds: { default: 'white' },
    actions: {
      handles: ['mouseenter', 'click', 'focusin', 'focusout'],
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vtmn---Web?node-id=783%3A9869',
    },
  },
};

const Template = (args) => html`<vtmn-checkbox ...=${spread(args)} />`;

export const Overview = Template.bind({});
Overview.args = {};
