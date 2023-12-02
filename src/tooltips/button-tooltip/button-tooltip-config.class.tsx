import { EWrapper } from '@src/enums/wrapper.enum';
import { BaseTooltipConfig, IBaseTooltipConfig } from '../base-tooltip/base-tooltip-config.class';

interface IButtonProps {
    shouldBeClicked: boolean;
}
export type IButtonTooltipConfig = IBaseTooltipConfig<IButtonProps>;

export class ButtonTooltipConfig extends BaseTooltipConfig<IButtonProps> implements IButtonTooltipConfig {
    constructor(selector: string) {
        super(selector);
        this.type = EWrapper.button;
    }

    shouldBeClicked() {
        this.props.shouldBeClicked = true;
        return this;
    }
}
