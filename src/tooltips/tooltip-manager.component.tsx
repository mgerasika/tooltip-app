/* eslint-disable @typescript-eslint/no-explicit-any */
import { EWrapper } from '@src/enums/wrapper.enum';
import { ITooltip } from '@src/hooks/use-tooltip.hook';
import { ButtonTooltip } from './button-tooltip/button-tooltip.component';
import React from 'react';
import { TableTooltip } from './table-tooltip/table-tooltip.component';
import { InputTooltip } from './input-tooltip/input-tooltip.component';

const MAP: Record<EWrapper, any> = {
    button: ButtonTooltip,
    input: InputTooltip,
    table: TableTooltip,
    none: <></>,
};

interface IProps extends ITooltip {
    onComplete: () => void;
}
export const TooltipManager = (props: IProps) => {
    const Comp = MAP[props.config.type];
    return <Comp {...props} />;
};
