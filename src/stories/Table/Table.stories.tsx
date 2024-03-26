import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TableProps } from './Table.types';
import Table from "./Table.tsx";
import { within } from '@storybook/test';
import { expect } from '@storybook/jest';
export default {
  title: 'Table',
  component: Table,
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  headers: ['Header 1', 'Header 2', 'Header 3'],
  rows: [
    ['Row 1 Cell 1', 'Row 1 Cell 2', 'Row 1 Cell 3'],
    ['Row 2 Cell 1', 'Row 2 Cell 2', 'Row 2 Cell 3'],
    ['Row 3 Cell 1', 'Row 3 Cell 2', 'Row 3 Cell 3'],
  ],
  colSpacing: 10,
  cellColors: "white",
  borderColor: "#387ADF",
  borderWidth: 1,
  fontSize: "16px",
  textColor: "#000",
  headerBgColor: "#007bff",
  rowHoverEffect: true,
};


Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  // Verify that headers are visible
  Default.args.headers.forEach(async (headerText) => {
    const header = await canvas.getByText(headerText);
    await expect(header).toBeInTheDocument();
  });

  // Verify that the first cell of each row is visible
  const firstRowCellText = Default.args.rows[0][0];
  const firstCell = await canvas.getByText(firstRowCellText);
  await expect(firstCell).toBeInTheDocument();
};
