import styled from 'styled-components';
import {
    compose,
    space,
    layout,
    color,
    flexbox,
    background,
    border,
    position,
    shadow,
    grid,
    SpaceProps,
    LayoutProps,
    ColorProps,
    FlexboxProps,
    BackgroundProps,
    BorderProps,
    PositionProps,
    ShadowProps,
    GridProps,
} from 'styled-system';

export type BoxProps = SpaceProps &
    LayoutProps &
    ColorProps &
    FlexboxProps &
    BackgroundProps &
    BorderProps &
    PositionProps &
    ShadowProps &
    GridProps;

export const Box = styled.div<BoxProps>`
    ${compose(
        space,
        layout,
        color,
        flexbox,
        background,
        border,
        position,
        shadow,
        grid
    )}
`;
