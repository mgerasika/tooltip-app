import { CSSInterpolation } from '@emotion/serialize';

declare module 'react' {
    // The tw and css prop
    interface DOMAttributes {
        css?: CSSInterpolation;
    }
}
