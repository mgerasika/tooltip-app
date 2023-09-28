import { css } from '@emotion/react';
import React from 'react';

interface IProps {
    id: string;
    label: string;
    type?: string;
}
export const Input = ({ type = 'password', label, id }: IProps): JSX.Element => {
    return (
        <div>
            <label css={styles.label} htmlFor={id}>
                {label}
            </label>
            <input css={styles.input} type={type} id={id}></input>
        </div>
    );
};
const styles = {
    input: css`
        padding: 8px;
    `,
    label: css`
        display: block;
        padding-bottom: 8px;
    `,
};
