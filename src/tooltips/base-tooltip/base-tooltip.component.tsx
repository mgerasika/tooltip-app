/* eslint-disable @typescript-eslint/no-explicit-any */
import { css } from '@emotion/react';
import React, { useEffect } from 'react';

interface IProps {
    htmlEl: Element |  null;
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
            <div css={styles.message}>Message: {message}</div>
            <div css={styles.blockPanel}></div>
        </>
    );
};

const styles = {
    message: css`
        position: absolute;
        z-index: 101;
        background-color: white;
        font-size: 16px;
        padding: 6px;
        right: 16px;
    `,
    blockPanel: css`
        background-color: gray;
        opacity: 0.5;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
    `,
};
