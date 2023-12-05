/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dzhin } from '@src/general-ui/dzhin/dzhin.component';
import React, { useEffect } from 'react';

interface IProps {
    htmlEl: Element | null;
    message: string;
}

export const BaseTooltip = ({ message, htmlEl }: IProps): JSX.Element => {
    useEffect(() => {
        if (htmlEl) {
            htmlEl.classList.add('highlight-element');
            return () => {
                htmlEl.classList.remove('highlight-element');
            };
        }
        return () => null;
    }, [htmlEl]);

    return (
        <>
            <Dzhin mode="right" text={message} />
        </>
    );
};
