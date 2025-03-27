import * as react_jsx_runtime from 'react/jsx-runtime';
import { PopoverProps } from '@mui/material/Popover';
import { SvgIconProps } from '@mui/material';
import { Locale } from 'date-fns';
import { ElementType } from 'react';

type Marker = symbol;
type DefinedRange = {
    startDate: Date;
    endDate: Date;
    label: string;
};
type DateRange = {
    startDate?: Date;
    endDate?: Date;
};
type RangeSeparatorIconsProps = {
    xs?: ElementType<SvgIconProps>;
    md?: ElementType<SvgIconProps>;
};
type PickerProps = {
    initialDateRange?: DateRange;
    definedRanges?: DefinedRange[];
    minDate?: Date | string;
    maxDate?: Date | string;
    locale?: Locale;
    labels?: Labels;
    onChange?: (dateRange: DateRange) => void;
    hideDefaultRanges?: boolean;
    hideOutsideMonthDays?: boolean;
};
type ModalCustomProps = {
    onSubmit?: (dateRange: DateRange) => void;
    onCloseCallback?: () => void;
    RangeSeparatorIcons?: RangeSeparatorIconsProps;
    hideActionButtons?: boolean;
};

type PickerModalProps = PickerProps & {
    modalProps: PopoverProps;
    customProps: ModalCustomProps;
};
type PickerBaseProps = PickerProps;
type Labels = {
    predefinedRanges?: string;
    actions?: {
        apply?: string;
        cancel?: string;
    };
    footer?: {
        startDate?: string;
        endDate?: string;
    };
};

declare const PickerModal: ({ modalProps, customProps, ...dateRangePickerProps }: PickerModalProps) => react_jsx_runtime.JSX.Element;

declare const PickerBase: (props: PickerBaseProps) => react_jsx_runtime.JSX.Element;

export { type DateRange, type DefinedRange, type Marker, type ModalCustomProps, PickerBase, type PickerBaseProps, PickerModal, type PickerModalProps, type PickerProps, type RangeSeparatorIconsProps };
