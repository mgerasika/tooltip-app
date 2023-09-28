import { useContext, useEffect } from 'react';
import { IBaseTooltipConfig } from '../tooltips/base-tooltip/base-tooltip-config.class';
import { TooltipContext } from '../tooltips/tooltip.context';

interface IProps {
    initial?: ITooltip[];
}
export interface ITooltip<T = IBaseTooltipConfig> {
    message: string;
    config: T;
}
interface IReturn {
    add: (message: string, component: IBaseTooltipConfig) => void;
}
export const useTooltip = ({ initial }: IProps): IReturn => {
    const { add, setTooltips } = useContext(TooltipContext);

    useEffect(() => {
        if (initial) {
            setTooltips(initial);
        }
    }, [initial, setTooltips]);
    return {
        add,
    };
};
