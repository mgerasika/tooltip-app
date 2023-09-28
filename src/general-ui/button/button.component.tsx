import { css } from '@emotion/react';
import React, { ReactNode } from 'react';

interface IProps {
    id: string;
    children: ReactNode;
}
export const Button = ({ id, children }: IProps): JSX.Element => {
    return (
        <button css={styles.root} id={id}>
            {children}
        </button>
    );
};

const styles = {
    root: css`
        padding: 16px;
    `,
};
