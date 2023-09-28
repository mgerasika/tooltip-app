import React from 'react';
import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
    <>
        <Global styles={styles} />
    </>
);

const styles = css`
    html,
    body {
        min-height: 100vh;
        font-family:
            Roboto,
            Muli,
            Helvetica Neue,
            Arial,
            sans-serif;
        margin: 0;
        -ms-user-select: none;
        user-select: none;
    }

    .highlight-element {
        z-index: 101;
        border: 1px solid red;
        position: relative;
    }
`;
export default GlobalStyles;
