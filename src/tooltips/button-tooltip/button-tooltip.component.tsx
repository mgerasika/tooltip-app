import { ITooltip } from '@src/hooks/use-tooltip.hook';
import React, { useEffect } from 'react';
import { BaseTooltip } from '../base-tooltip/base-tooltip.component';
import { IButtonTooltipConfig } from './button-tooltip-config.class';

interface IProps extends ITooltip<IButtonTooltipConfig> {
    onComplete: () => void;
}

export const ButtonTooltip = (props: IProps): JSX.Element => {
    const { config: component, onComplete } = props;
    const htmlEl = document.querySelector(component.selector);
    useEffect(() => {
        htmlEl?.addEventListener('click', onComplete);
        return () => {
            htmlEl?.removeEventListener('click', onComplete);
        };
    }, [htmlEl, onComplete]);
    return <BaseTooltip {...props} htmlEl={htmlEl} />;
};
