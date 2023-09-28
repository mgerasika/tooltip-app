import { EWrapper } from '@src/enums/wrapper.enum';
import { BaseTooltipConfig, IBaseTooltipConfig } from '../base-tooltip/base-tooltip-config.class';

export interface IInputProps {
    shouldHaveText: string;
    shouldHaveFocus: boolean;
}
export type IInputTooltipConfig = IBaseTooltipConfig<IInputProps>;

export class InputTooltipConfig extends BaseTooltipConfig<IInputProps> implements IInputTooltipConfig {
    constructor(selector: string) {
        super(selector);
		this.type = EWrapper.input;
    }
    shouldHaveText(text: string) {
        this.props.shouldHaveText = text;
        return this;
    }

    shouldHaveFocus(text: string) {
        this.props.shouldHaveText = text;
        return this;
    }
}
