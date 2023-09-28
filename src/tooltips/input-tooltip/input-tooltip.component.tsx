/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITooltip } from '@src/hooks/use-tooltip.hook';
import React, { useCallback, useEffect } from 'react';
import { BaseTooltip } from '../base-tooltip/base-tooltip.component';
import { IInputTooltipConfig } from './input-tooltip-config.class';

interface IProps extends ITooltip<IInputTooltipConfig> {
    onComplete: () => void;
}

export const InputTooltip = (props: IProps): JSX.Element => {
    const { config: component, onComplete } = props;
    const htmlEl = document.querySelector(component.selector);
    const handleChange = useCallback(
        (e: any) => {
            if (e.target.value === component.props.shouldHaveText) {
                onComplete();
            }
        },
        [component.props.shouldHaveText, onComplete],
    );
    useEffect(() => {
        if (component.props.shouldHaveText !== undefined) {
            htmlEl?.addEventListener('keyup', handleChange);
            return () => {
                htmlEl?.removeEventListener('keyup', handleChange);
            };
        }
        return () => null;
    }, [component.props.shouldHaveText, handleChange, htmlEl]);
    return <BaseTooltip {...props} htmlEl={htmlEl} />;
};
