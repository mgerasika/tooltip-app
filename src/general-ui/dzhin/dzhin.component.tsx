import { css } from '@emotion/react';
import React, { ReactNode } from 'react';
import DzhinLeft from '../../assets/dzhin-left.png';
import DzhinRight from '../../assets/dzhin-right.png';
import CornerBottomLeft from '../../assets/corner-bottom-left.png';
import CornerBottomRight from '../../assets/corner-bottom-right.png';

interface IProps {
    text?: ReactNode;
    mode?: 'left' | 'right';
}
export const Dzhin = ({ text, mode = 'left' }: IProps): JSX.Element => {
    return (
        <div css={styles.root}>
            <div css={styles.panel}></div>
            <div css={styles.content}>
                {mode === 'left' && (
                    <>
                        <img css={styles.img} src={DzhinRight} alt="tooltip" />
                        <div css={styles.message}>
                            {text}
                            <img css={styles.cornerBottomLeft} src={CornerBottomLeft} alt="left corner" />
                        </div>
                    </>
                )}

                {mode === 'right' && (
                    <>
                        <div css={styles.message}>
                            {text}
                            <img css={styles.cornerBottomRight} src={CornerBottomRight} alt="right corner" />
                        </div>
                        <img css={styles.img} src={DzhinLeft} alt="tooltip" />
                    </>
                )}
            </div>
        </div>
    );
};

const styles = {
    root: css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    `,
    content: css`
        z-index: 102;
        position: absolute;
        display: flex;
        left: 300px;
        top: 100px;
    `,
    message: css`
        position: relative;
        background-color: white;
        border-radius: 16px;
        height: fit-content;
        padding: 16px;
        max-width: 200px;
        margin: 16px;
        margin-top: 15%;
    `,
    img: css`
        width: 200px;
        object-fit: contain;
    `,
    cornerBottomLeft: css`
        position: absolute;
        width: 24px;
        height: 24px;
        bottom: -8px;
        display: block;
        left: -8px;
    `,
    cornerBottomRight: css`
        position: absolute;
        width: 24px;
        height: 24px;
        bottom: -8px;
        display: block;
        right: -8px;
    `,
    panel: css`
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
