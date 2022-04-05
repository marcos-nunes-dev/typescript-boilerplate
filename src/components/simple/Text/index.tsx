import React from 'react';
import Truncate, { TruncateProps } from 'react-truncate';
import styled from 'styled-components';
import { typography, TypographyProps } from 'styled-system';
import { theme } from 'styled-tools';

import { Box, BoxProps } from '../Box';

export type TextPropsStyled = BoxProps & TypographyProps;

export type TextProps = TextPropsStyled & {
  truncate?: TruncateProps;
  as?: any;
  htmlFor?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const TextStyled = styled(Box).attrs((props) => ({
  color: props.color || 'textGray',
}))<TextProps>`
  ${typography} ::selection {
    background-color: ${theme('resume.textLightGray')};
  }
`;

export const Text: React.FC<TextProps> = ({ children, truncate, ...props }) => {
  return (
    <TextStyled {...props}>
      {truncate ? <Truncate {...truncate}>{children}</Truncate> : children}
    </TextStyled>
  );
};
