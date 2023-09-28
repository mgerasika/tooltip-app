import { css } from '@emotion/react';
import React, { ReactNode, useCallback, useMemo, useState } from 'react';
import { ITooltip } from '../hooks/use-tooltip.hook';
import { IBaseTooltipConfig } from './base-tooltip/base-tooltip-config.class';
import { TooltipManager } from './tooltip-manager.component';
import { TooltipContext } from './tooltip.context';

interface IProps {
    tooltips?: ITooltip[];
    children: ReactNode;
}

export const t = (message: string, config: IBaseTooltipConfig): ITooltip => {
    return { message, config };
};

export const TooltipPanel = ({ children, ...rest }: IProps) => {
    const [index, setIndex] = useState(0);

    const [tooltips, setTooltips] = useState<ITooltip[]>(rest.tooltips || []);

    const activeTooltip = useMemo(() => {
        return tooltips.length > index ? tooltips[index] : undefined;
    }, [tooltips, index]);

    const handleAdd = useCallback((message: string, component: IBaseTooltipConfig): void => {
        setTooltips((prev) => [...prev, t(message, component)]);
    }, []);

    const createSetActiveHandler = (idx: number) => () => {
        setIndex(idx);
    };

    const handleComplete = useCallback(() => {
        setIndex((prev) => prev + 1);
    }, []);

    const handleSetTooltips = useCallback((newTooltips: ITooltip[]) => {
        setTooltips(newTooltips);
    }, []);
    return (
        <TooltipContext.Provider value={{ tooltips, add: handleAdd, setTooltips: handleSetTooltips }}>
            <div css={styles.root}>
                <div css={styles.leftPanel}>
                    <div css={styles.header}>Commands</div>
                    {tooltips.map((tooltip, idx) => {
                        return (
                            <pre
                                onClick={createSetActiveHandler(idx)}
                                css={styles.tooltip(index === idx)}
                                key={tooltip.message}
                            >
                                {JSON.stringify(tooltip, null, 2)}
                            </pre>
                        );
                    })}
                </div>
                <div css={styles.contentCnt}>
                    <div css={styles.header}>Preview</div>
                    <div css={styles.content}>
                        {activeTooltip && <TooltipManager onComplete={handleComplete} {...activeTooltip} />}
                        {children}
                    </div>
                </div>
            </div>
        </TooltipContext.Provider>
    );
};

const styles = {
    root: css`
        display: flex;
    `,
    header: css`
        font-weight: bold;
        padding: 16px;
    `,
    leftPanel: css`
        min-width: 600px;
        padding-top: 16px;
    `,
    contentCnt: css`
        flex-grow: 1;
        padding: 16px;
        display: flex;
        flex-direction: column;
    `,
    content: css`
        flex-grow: 1;
        padding: 16px;
        position: relative;
    `,
    tooltip: (isActive: boolean) => [
        css`
            padding: 16px;
            cursor: pointer;
        `,
        isActive &&
            css`
                background-color: #eee;
            `,
    ],
};
