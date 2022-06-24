import React from 'react';
import Button from 'components/atoms/Button/Button';
import { FaFacebook } from 'react-icons/fa';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: {
      control: 'inline-radio',
    },
    variant: {
      control: 'inline-radio',
    },
    size: {
      control: 'inline-radio',
    },
    Icon: {
      control: 'hidden',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const TextButton = Template.bind({});
TextButton.args = {
  color: 'primary',
  variant: 'default',
  size: 'medium',
  children: 'Text Button',
};

export const TextAndIconButton = Template.bind({});
TextAndIconButton.args = {
  color: 'primary',
  variant: 'default',
  size: 'medium',
  children: 'FACEBOOK',
  Icon: FaFacebook,
};

export const IconButton = Template.bind({});
IconButton.args = {
  color: 'primary',
  variant: 'default',
  size: 'medium',
  Icon: FaFacebook,
};
