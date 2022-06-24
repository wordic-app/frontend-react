import React from 'react';
import Typography from './Typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
  argTypes: {
    align: {
      control: 'inline-radio',
    },
    variant: {
      control: 'inline-radio',
    },
  },
};

const Template = (args) => (
  <Typography {...args}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi expedita
    minima nam non perferendis, praesentium quod sapiente velit. Architecto
    assumenda at atque commodi eaque ex expedita explicabo, incidunt minus optio
    quisquam, quod temporibus! Accusamus assumenda cumque quasi quidem quod!
    Amet doloremque ex expedita facere quae, quos rerum sint ullam ut.
  </Typography>
);

export const Example = Template.bind({});
Example.args = {
  variant: 'p',
  align: 'inherit',
};
