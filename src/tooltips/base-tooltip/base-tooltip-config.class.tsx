import { EWrapper } from "@src/enums/wrapper.enum";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IBaseTooltipConfig<T = any> {
    type: EWrapper;
    selector: string;
    props: T;
}

export class BaseTooltipConfig<T> implements IBaseTooltipConfig<T> {
    public type = EWrapper.none;
    public selector = '';
    public props = {} as T;

    constructor(selector: string) {
        this.selector = selector;
    }
}
