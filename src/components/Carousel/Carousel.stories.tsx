import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Carousel from './Carousel';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DesignSystem/Carousel',
  component: Carousel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Carousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args} />
);

export const CarouselBase = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CarouselBase.args = {
  width: '100%',
  imageList: [
    'https://www.w3schools.com/howto/img_nature_wide.jpg',
    'https://www.w3schools.com/howto/img_snow_wide.jpg',
    'https://www.w3schools.com/howto/img_mountains_wide.jpg',
  ],
};
