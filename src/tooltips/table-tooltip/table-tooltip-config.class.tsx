import { EWrapper } from '@src/enums/wrapper.enum';
import { BaseTooltipConfig, IBaseTooltipConfig } from '../base-tooltip/base-tooltip-config.class';

interface ITableProps {
    shouldBeSortedBy: string;
}
export type ITableTooltipConfig = IBaseTooltipConfig<ITableProps>;

export class TableTooltipConfig extends BaseTooltipConfig<ITableProps> implements ITableTooltipConfig {
    constructor(selector: string) {
        super(selector);
        this.type = EWrapper.table;
    }

    shouldBeSorted(column: string) {
        this.props.shouldBeSortedBy = column;
        return this;
    }
}
