import React from 'react';
import { ITooltip } from '../hooks/use-tooltip.hook';
import { IBaseTooltipConfig } from './base-tooltip/base-tooltip-config.class';

export interface ITooltipContext {
    tooltips: ITooltip[];
    add: (message: string, component: IBaseTooltipConfig) => void;
    setTooltips: (tooltips: ITooltip[]) => void;
}

export const TooltipContext = React.createContext<ITooltipContext>({
    tooltips: [],
    add: () => null,
    setTooltips: () => null,
});
