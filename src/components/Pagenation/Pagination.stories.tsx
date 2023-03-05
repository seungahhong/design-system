import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pagination from './Pagination';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DesignSystem/Pagination',
  component: Pagination,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Pagination>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pagination> = (args) => {
  const [page, setPage] = useState<number>(args.activePage);

  return <Pagination {...args} activePage={page} handlePageChange={setPage} />;
};

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  size: 10,
  totalPage: 3,
  activePage: 0,
};
