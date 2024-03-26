import React from "react";
import styled, { css } from "styled-components";
import { TableProps } from "./Table.types";

const StyledTable = styled.table<{ borderColor: string; borderWidth: number; }>`
  border-collapse: collapse;
  width: 100%;
  border: ${({ borderWidth, borderColor }) => `${borderWidth}px solid ${borderColor}`};
`;

const TableCell = styled.td<{ cellColors: string; fontSize: string; textColor: string; }>`
  padding: ${({ theme }) => theme.colSpacing / 2}px ${({ theme }) => theme.colSpacing}px;
  background-color: ${({ cellColors }) => cellColors};
  color: ${({ textColor }) => textColor};
  font-size: ${({ fontSize }) => fontSize};
`;

const TableHeader = styled.th<{ fontSize: string; textColor: string; headerBgColor: string; }>`
  background-color: ${({ headerBgColor }) => headerBgColor};
  color: ${({ textColor }) => textColor};
  font-size: ${({ fontSize }) => fontSize};
  padding: ${({ theme }) => theme.colSpacing / 2}px ${({ theme }) => theme.colSpacing}px;
`;

const TableRow = styled.tr<{ rowHoverEffect: boolean; }>`
  ${({ rowHoverEffect }) =>
    rowHoverEffect &&
    css`
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    `}
`;

function Table({
  headers,
  rows,
  colSpacing = 10,
  cellColors = "white",
  borderColor = "#387ADF",
  borderWidth = 1,
  fontSize = "16px",
  textColor = "#000",
  headerBgColor = "#007bff",
  rowHoverEffect = false,
}: TableProps) {
  return (
    <StyledTable borderColor={borderColor} borderWidth={borderWidth}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <TableHeader key={index} fontSize={fontSize} textColor={textColor} headerBgColor={headerBgColor}>
              {header}
            </TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <TableRow key={rowIndex} rowHoverEffect={rowHoverEffect}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex} cellColors={cellColors} fontSize={fontSize} textColor={textColor}>
                {cell}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default Table;
