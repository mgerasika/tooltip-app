import { ITooltip } from '@src/hooks/use-tooltip.hook';
import React, { useEffect } from 'react';
import { BaseTooltip } from '../base-tooltip/base-tooltip.component';
import { ITableTooltipConfig } from './table-tooltip-config.class';

interface IProps extends ITooltip<ITableTooltipConfig> {
    onComplete: () => void;
}

export const TableTooltip = ({ message, config, onComplete }: IProps): JSX.Element => {
    let htmlEl = document.querySelector(config.selector);
    if (config.props.shouldBeSortedBy) {
        const selector = `${config.selector} th[id="${config.props.shouldBeSortedBy}"]`;
        htmlEl = document.querySelector(selector);
    }

    useEffect(() => {
        htmlEl?.addEventListener('click', onComplete);
        return () => {
            htmlEl?.removeEventListener('click', onComplete);
        };
    }, [htmlEl, onComplete]);
    return <BaseTooltip message={message} htmlEl={htmlEl} />;
};
