"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  PickerBase: () => PickerBase,
  PickerModal: () => PickerModal
});
module.exports = __toCommonJS(src_exports);

// src/components/Sections.tsx
var import_material9 = require("@mui/material");
var import_date_fns9 = require("date-fns");

// src/components/Sections.DefinedRanges.tsx
var import_react = require("react");
var import_date_fns = require("date-fns");
var import_material = require("@mui/material");
var import_jsx_runtime = require("react/jsx-runtime");
var isSameRange = (first, second) => {
  const { startDate: fStart, endDate: fEnd } = first;
  const { startDate: sStart, endDate: sEnd } = second;
  if (fStart && sStart && fEnd && sEnd) {
    return (0, import_date_fns.isSameDay)(fStart, sStart) && (0, import_date_fns.isSameDay)(fEnd, sEnd);
  }
  return false;
};
var DefinedRanges = ({
  ranges,
  setRange,
  selectedRange
}) => {
  const theme = (0, import_material.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.Unstable_Grid2, { xs: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_material.Box,
      {
        height: "54px",
        sx: {
          backgroundColor: (0, import_material.alpha)(theme.palette.grey[400], 0.1)
        }
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.Unstable_Grid2, { xs: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_material.List,
      {
        sx: {
          pt: "10px"
        },
        children: ranges.map((range, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_material.ListItem,
          {
            disablePadding: true,
            onClick: () => setRange(range),
            sx: [
              isSameRange(range, selectedRange) ? {
                backgroundColor: (0, import_material.alpha)(theme.palette.grey[600], 0.1)
              } : {}
            ],
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_material.ListItemButton,
              {
                disableRipple: true,
                dense: true,
                sx: {
                  p: {
                    xs: "8px",
                    md: "12px"
                  },
                  height: "32px",
                  ".mui-tlelie-MuiListItemText-root": {
                    my: 0
                  }
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_material.ListItemText,
                  {
                    primaryTypographyProps: {
                      sx: [
                        isSameRange(range, selectedRange) ? {
                          color: (0, import_material.alpha)(theme.palette.grey[800], 1)
                        } : {
                          color: (0, import_material.alpha)(theme.palette.grey[600], 1)
                        },
                        {
                          fontFamily: "Roboto",
                          fontSize: 13,
                          fontWeight: 400
                        }
                      ]
                    },
                    children: range.label
                  }
                )
              }
            )
          },
          idx
        ))
      }
    ) })
  ] });
};

// src/components/Sections.DuelCalender.tsx
var import_date_fns6 = require("date-fns");
var import_material5 = require("@mui/material");

// src/components/Month.tsx
var import_react3 = require("react");
var import_date_fns5 = require("date-fns");
var import_material4 = require("@mui/material");

// src/utils/index.ts
var import_date_fns2 = require("date-fns");
var chunks = (array, size) => Array.from(
  { length: Math.ceil(array.length / size) },
  (_v, i) => array.slice(i * size, i * size + size)
);
var getDaysInMonth = (date, locale) => {
  const startWeek = (0, import_date_fns2.startOfWeek)((0, import_date_fns2.startOfMonth)(date), { locale });
  const endWeek = (0, import_date_fns2.endOfWeek)((0, import_date_fns2.endOfMonth)(date), { locale });
  const days = [];
  for (let curr = startWeek; (0, import_date_fns2.isBefore)(curr, endWeek); ) {
    days.push(curr);
    curr = (0, import_date_fns2.addDays)(curr, 1);
  }
  return days;
};
var isStartOfRange = ({ startDate }, day) => startDate && (0, import_date_fns2.isSameDay)(day, startDate);
var isEndOfRange = ({ endDate }, day) => endDate && (0, import_date_fns2.isSameDay)(day, endDate);
var inDateRange = ({ startDate, endDate }, day) => startDate && endDate && ((0, import_date_fns2.isWithinInterval)(day, { start: startDate, end: endDate }) || (0, import_date_fns2.isSameDay)(day, startDate) || (0, import_date_fns2.isSameDay)(day, endDate));
var isRangeSameDay = ({ startDate, endDate }) => {
  if (startDate && endDate) {
    return (0, import_date_fns2.isSameDay)(startDate, endDate);
  }
  return false;
};
var parseOptionalDate = (date, defaultValue) => {
  if (date) {
    const parsed = date instanceof Date ? date : (0, import_date_fns2.parseISO)(date);
    if ((0, import_date_fns2.isValid)(parsed))
      return parsed;
  }
  return defaultValue;
};
var getValidatedMonths = (range, minDate, maxDate) => {
  const { startDate, endDate } = range;
  if (startDate && endDate) {
    const newStart = (0, import_date_fns2.max)([startDate, minDate]);
    const newEnd = (0, import_date_fns2.min)([endDate, maxDate]);
    return [
      newStart,
      (0, import_date_fns2.isSameMonth)(newStart, newEnd) ? (0, import_date_fns2.addMonths)(newStart, 1) : newEnd
    ];
  }
  return [startDate, endDate];
};

// src/components/Month.Header.tsx
var import_date_fns4 = require("date-fns");
var import_material2 = require("@mui/material");
var import_icons_material = require("@mui/icons-material");

// src/Constants/index.ts
var import_date_fns3 = require("date-fns");
var AVAILABLE_MIN_DATE = (0, import_date_fns3.startOfYear)((0, import_date_fns3.addYears)(/* @__PURE__ */ new Date(), -10));
var AVAILABLE_MAX_DATE = (0, import_date_fns3.endOfYear)((0, import_date_fns3.addYears)(/* @__PURE__ */ new Date(), 10));

// src/components/Month.Header.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var generateYears = ({ start, end }) => {
  const count = end - start + 1;
  return Array(count).fill(0).map((_y, i) => start + i);
};
var MonthHeader = ({
  minDate,
  maxDate,
  currentDate,
  setDate,
  nextDisabled,
  prevDisabled,
  onClickNext,
  onClickPrevious,
  locale
}) => {
  const theme = (0, import_material2.useTheme)();
  const availableYearRange = {
    start: (minDate || AVAILABLE_MIN_DATE).getFullYear(),
    end: (maxDate || AVAILABLE_MAX_DATE).getFullYear()
  };
  const MONTHS = Array.from(
    { length: 12 },
    (_, index) => typeof locale !== "undefined" ? locale.localize?.month(index, {
      width: "abbreviated",
      context: "standalone"
    }) : [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ][index]
  );
  const handleMonthChange = (event) => {
    setDate((0, import_date_fns4.setMonth)(currentDate, parseInt(event.target.value, 10)));
  };
  const handleYearChange = (event) => {
    setDate((0, import_date_fns4.setYear)(currentDate, parseInt(event.target.value, 10)));
  };
  const currentMonth = (0, import_date_fns4.getMonth)(currentDate);
  const currentYear = (0, import_date_fns4.getYear)(currentDate);
  const minYear = (0, import_date_fns4.getYear)(minDate);
  const maxYear = (0, import_date_fns4.getYear)(maxDate);
  const minMonthID = (0, import_date_fns4.getMonth)(minDate);
  const maxMonthID = (0, import_date_fns4.getMonth)(maxDate);
  const isDisabled = (month) => {
    if (currentYear === minYear || currentYear === maxYear) {
      if (currentYear === minYear && month < minMonthID) {
        return true;
      }
      if (currentYear === maxYear && month > maxMonthID) {
        return true;
      }
    }
    return false;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material2.Unstable_Grid2, { xs: "auto", ml: "10px", container: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_material2.IconButton,
      {
        disableRipple: true,
        size: "small",
        color: "secondary",
        className: "Mui-upon-secondary-bg",
        disabled: prevDisabled,
        onClick: onClickPrevious,
        sx: {
          borderRadius: "8px",
          color: theme.palette.grey[600],
          ".MuiSvgIcon-root": {
            color: theme.palette.grey[600]
          },
          "&:hover": {
            backgroundColor: theme.palette.grey[100]
          },
          "&.Mui-disabled": {
            backgroundColor: "transparent"
          },
          "&.Mui-upon-secondary-bg": {
            // backgroundColor: grey[200],
            "&:hover": {
              backgroundColor: theme.palette.grey[200]
            }
          }
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_icons_material.KeyboardArrowLeft,
          {
            fontSize: "small",
            sx: {
              fill: prevDisabled ? `${theme.palette.grey[400]}` : "secondary"
            }
          }
        )
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material2.Unstable_Grid2, { xsOffset: "auto", xs: "auto", container: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material2.FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_material2.Select,
      {
        SelectDisplayProps: {
          style: {
            minHeight: "unset"
          }
        },
        variant: "outlined",
        size: "small",
        defaultValue: currentYear,
        IconComponent: (props) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_icons_material.KeyboardArrowDown,
          {
            fontSize: "small",
            sx: {
              fill: theme.palette.grey[400]
            },
            ...props
          }
        ),
        slotProps: {
          root: {
            sx: {
              width: {
                sm: "100px",
                md: "120px"
              },
              height: "30px",
              backgroundColor: "#fff"
            }
          }
        },
        MenuProps: {
          disablePortal: true,
          PaperProps: {
            sx: {
              width: "auto",
              maxHeight: "224px",
              boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
            }
          }
        },
        value: currentMonth,
        onChange: handleMonthChange,
        children: MONTHS.map((month, idx) => {
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material2.MenuItem, { value: idx, disabled: isDisabled(idx), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_material2.Typography,
            {
              noWrap: true,
              sx: {
                fontSize: "14px"
              },
              children: month
            }
          ) }, month);
        })
      }
    ) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material2.Unstable_Grid2, { xsOffset: "auto", xs: "auto", container: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material2.FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_material2.Select,
      {
        variant: "outlined",
        size: "small",
        defaultValue: currentYear,
        SelectDisplayProps: {
          style: {
            minHeight: "unset"
          }
        },
        IconComponent: (props) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_icons_material.KeyboardArrowDown,
          {
            fontSize: "small",
            sx: {
              fill: theme.palette.grey[400]
            },
            ...props
          }
        ),
        slotProps: {
          root: {
            sx: {
              height: "30px",
              backgroundColor: "#fff"
            }
          }
        },
        MenuProps: {
          disablePortal: true,
          PaperProps: {
            sx: {
              width: "auto",
              maxHeight: "224px",
              boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
            }
          }
        },
        value: (0, import_date_fns4.getYear)(currentDate),
        onChange: handleYearChange,
        children: generateYears(availableYearRange).map((year) => {
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material2.MenuItem, { value: year, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_material2.Typography,
            {
              sx: {
                fontSize: "14px"
              },
              children: year
            }
          ) }, year);
        })
      }
    ) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material2.Unstable_Grid2, { mr: "10px", xsOffset: "auto", xs: "auto", container: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_material2.IconButton,
      {
        disableRipple: true,
        size: "small",
        color: "secondary",
        className: "Mui-upon-secondary-bg",
        disabled: nextDisabled,
        onClick: onClickNext,
        sx: {
          borderRadius: "8px",
          color: theme.palette.grey[600],
          ".MuiSvgIcon-root": {
            color: theme.palette.grey[600]
          },
          "&:hover": {
            backgroundColor: theme.palette.grey[100]
          },
          "&.Mui-disabled": {
            backgroundColor: "transparent"
          },
          "&.Mui-upon-secondary-bg": {
            "&:hover": {
              backgroundColor: theme.palette.grey[200]
            }
          }
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_icons_material.KeyboardArrowRight,
          {
            fontSize: "small",
            sx: {
              fill: nextDisabled ? `${theme.palette.grey[400]}` : "secondary"
            }
          }
        )
      }
    ) })
  ] });
};

// src/components/Day.tsx
var import_react2 = require("react");
var import_material3 = require("@mui/material");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Day = ({
  startOfRange,
  endOfRange,
  disabled,
  hidden,
  highlighted,
  outlined,
  filled,
  onClick,
  onHover,
  value,
  hideOutsideMonthDays = true
}) => {
  const theme = (0, import_material3.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_material3.Box,
    {
      sx: {
        display: "flex",
        borderRadius: startOfRange ? "50% 0 0 50%" : endOfRange ? "0 50% 50% 0" : void 0,
        backgroundColor: !disabled && highlighted ? (0, import_material3.alpha)(theme.palette.primary.main, 0.1) : void 0
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        import_material3.IconButton,
        {
          disableRipple: true,
          color: "primary",
          sx: {
            ":hover": {
              backgroundColor: (0, import_material3.alpha)(theme.palette.primary.light, 0.2)
            },
            borderRadius: "8px",
            height: "36px",
            width: "36px",
            padding: 0,
            border: !disabled && outlined ? `1px solid ${theme.palette.primary.main}` : void 0,
            ...!disabled && filled ? {
              "&:hover": {
                backgroundColor: theme.palette.primary.main
              },
              backgroundColor: theme.palette.primary.main
            } : {}
          },
          disabled,
          onClick,
          onMouseOver: onHover,
          children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_material3.Typography,
            {
              sx: {
                fontSize: "14px",
                visibility: hidden && hideOutsideMonthDays ? "hidden" : "visible",
                color: !disabled ? filled ? theme.palette.primary.contrastText : theme.palette.text.primary : theme.palette.text.secondary
              },
              children: value
            }
          )
        }
      )
    }
  );
};

// src/components/Month.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Month = (props) => {
  const theme = (0, import_material4.useTheme)();
  const {
    helpers,
    handlers,
    currentDate,
    otherDate,
    dateRange,
    marker,
    setMonth: setMonth2,
    minDate,
    maxDate,
    locale,
    hideOutsideMonthDays
  } = props;
  const weekStartsOn = locale?.options?.weekStartsOn || 0;
  const WEEK_DAYS = Array.from(
    { length: 7 },
    (_, index) => typeof locale !== "undefined" ? locale.localize?.day((index + weekStartsOn) % 7, {
      width: "short",
      context: "standalone"
    }) : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][index]
  );
  const [back, forward] = props.navState;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_material4.Unstable_Grid2,
      {
        container: true,
        justifyContent: "space-between",
        alignItems: "center",
        sx: {
          height: "55px",
          backgroundColor: (0, import_material4.alpha)(theme.palette.grey[400], 0.1)
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          MonthHeader,
          {
            minDate,
            maxDate,
            marker,
            currentDate,
            otherDate,
            setDate: setMonth2,
            nextDisabled: !forward,
            prevDisabled: !back,
            onClickPrevious: () => handlers.handleClickNavIcon(marker, -1 /* Previous */),
            onClickNext: () => handlers.handleClickNavIcon(marker, 1 /* Next */),
            locale
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_material4.Unstable_Grid2,
      {
        container: true,
        justifyContent: "center",
        sx: {
          margin: "16px 24px 0 24px"
        },
        children: WEEK_DAYS.map((day, index) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_material4.Unstable_Grid2, { container: true, width: "36px", justifyContent: "center", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_material4.Typography,
          {
            color: "textSecondary",
            sx: {
              fontSize: "12px"
            },
            children: day
          },
          index
        ) }, index))
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_material4.Unstable_Grid2,
      {
        container: true,
        direction: "column",
        sx: {
          margin: "24px"
        },
        children: chunks(getDaysInMonth(currentDate, locale), 7).map((week, idx) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_material4.Unstable_Grid2, { container: true, direction: "row", justifyContent: "center", children: week.map((day) => {
          const isStart = isStartOfRange(dateRange, day);
          const isEnd = isEndOfRange(dateRange, day);
          const isRangeOneDay = isRangeSameDay(dateRange);
          const highlighted = inDateRange(dateRange, day) || helpers.isInHoverRange(day);
          return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            Day,
            {
              filled: isStart || isEnd,
              outlined: (0, import_date_fns5.isToday)(day),
              highlighted: highlighted && !isRangeOneDay,
              disabled: !(0, import_date_fns5.isSameMonth)(currentDate, day) || !((0, import_date_fns5.isWithinInterval)(day, { start: minDate, end: maxDate }) || isStartOfRange(
                {
                  startDate: minDate,
                  endDate: maxDate
                },
                day
              )),
              hidden: !(0, import_date_fns5.isSameMonth)(currentDate, day),
              hideOutsideMonthDays,
              startOfRange: isStart && !isRangeOneDay,
              endOfRange: isEnd && !isRangeOneDay,
              onClick: () => handlers.handleClickDateNumber(day),
              onHover: () => handlers.handleHoverDateNumber(day),
              value: (0, import_date_fns5.getDate)(day)
            },
            (0, import_date_fns5.format)(day, "dd-MM-yyyy")
          );
        }) }, idx))
      }
    )
  ] });
};

// src/Constants/markers.ts
var MARKERS = {
  FIRST_MONTH: Symbol("firstMonth"),
  SECOND_MONTH: Symbol("secondMonth"),
  SINGLE_MONTH: Symbol("singleMonth")
};

// src/components/Sections.DuelCalender.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var DuelCalender = ({
  firstMonth,
  secondMonth,
  handleSetFirstMonth,
  handleSetSecondMonth,
  canNavigateCloser,
  commonProps,
  locale,
  hideOutsideMonthDays
}) => {
  const canNavigateBack = !(0, import_date_fns6.isSameMonth)(firstMonth, commonProps.minDate);
  const canNavigateForward = !(0, import_date_fns6.isSameMonth)(secondMonth, commonProps.maxDate);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    import_material5.Unstable_Grid2,
    {
      xs: 12,
      container: true,
      direction: {
        xs: "column",
        md: "row"
      },
      justifyContent: "center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_material5.Unstable_Grid2, { xs: "auto", container: true, direction: "column", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          Month,
          {
            ...commonProps,
            currentDate: firstMonth,
            otherDate: secondMonth,
            setMonth: handleSetFirstMonth,
            navState: [canNavigateBack, canNavigateCloser],
            marker: MARKERS.FIRST_MONTH,
            locale,
            hideOutsideMonthDays
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_material5.Unstable_Grid2, { xs: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_material5.Divider, { orientation: "vertical" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_material5.Unstable_Grid2, { xs: "auto", container: true, direction: "column", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          Month,
          {
            ...commonProps,
            currentDate: secondMonth,
            otherDate: firstMonth,
            setMonth: handleSetSecondMonth,
            navState: [canNavigateCloser, canNavigateForward],
            marker: MARKERS.SECOND_MONTH,
            locale,
            hideOutsideMonthDays
          }
        ) })
      ]
    }
  );
};

// src/components/Sections.tsx
var import_react4 = require("react");

// src/components/Sections.Footer.tsx
var import_date_fns7 = require("date-fns");
var import_material7 = require("@mui/material");

// src/components/Actions.tsx
var import_material6 = require("@mui/material");
var import_jsx_runtime6 = require("react/jsx-runtime");
var CancelButtonStyled = (0, import_material6.styled)(import_material6.Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: 13,
  fontWeight: 400,
  borderRadius: "8px",
  marginRight: "8px",
  padding: "0 16px",
  height: "36px",
  color: theme.palette.grey[600],
  "&:hover": {
    backgroundColor: theme.palette.grey[100]
  }
}));
var ApplyButtonStyled = (0, import_material6.styled)(import_material6.Button)({
  fontSize: 13,
  fontWeight: 400,
  borderRadius: "8px",
  textTransform: "none",
  height: "36px",
  padding: "0 16px"
});
var Actions = ({
  onCloseCallback,
  onSubmit,
  labels
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_material6.Unstable_Grid2, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      CancelButtonStyled,
      {
        disableRipple: true,
        disableElevation: true,
        variant: "text",
        onClick: onCloseCallback,
        children: labels?.cancel || "Cancel"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_material6.Unstable_Grid2, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      ApplyButtonStyled,
      {
        disableRipple: true,
        disableElevation: true,
        type: "submit",
        variant: "contained",
        color: "primary",
        onClick: onSubmit,
        children: labels?.apply || "Apply"
      }
    ) })
  ] });
};

// src/components/Sections.Footer.tsx
var import_icons_material2 = require("@mui/icons-material");
var import_jsx_runtime7 = require("react/jsx-runtime");
var PreviewDateTypoStyled = (0, import_material7.styled)(import_material7.Typography)(({ theme }) => ({
  position: "relative",
  top: "1px",
  minWidth: "130px",
  fontSize: 14,
  lineHeight: "14px",
  color: theme.palette.grey[800]
}));
var PreviewDateMessageTypoStyled = (0, import_material7.styled)(import_material7.Typography)(({ theme }) => ({
  position: "relative",
  top: "1px",
  minWidth: "130px",
  fontSize: 14,
  lineHeight: "14px",
  color: theme.palette.grey[500]
}));
var Footer = ({
  startDate,
  endDate,
  locale,
  labels,
  onCloseCallback,
  onSubmit,
  RangeSeparatorIcons
}) => {
  const theme = (0, import_material7.useTheme)();
  const previewDate = (date) => {
    return (0, import_date_fns7.format)(date, "dd MMMM yyyy", { locale });
  };
  const IconXs = RangeSeparatorIcons?.xs || import_icons_material2.KeyboardDoubleArrowDown;
  const IconMd = RangeSeparatorIcons?.md || import_icons_material2.KeyboardDoubleArrowRight;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      import_material7.Unstable_Grid2,
      {
        xs: true,
        container: true,
        gap: "8px",
        direction: {
          xs: "column",
          md: "row"
        },
        justifyContent: "flex-start",
        alignItems: "center",
        children: [
          startDate ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            PreviewDateTypoStyled,
            {
              textAlign: {
                xs: "center",
                md: "left"
              },
              children: previewDate(startDate)
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            PreviewDateMessageTypoStyled,
            {
              textAlign: {
                xs: "center",
                md: "left"
              },
              children: labels?.footer?.startDate || "Start Date"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            IconXs,
            {
              fontSize: "small",
              sx: {
                fill: theme.palette.grey[400],
                display: {
                  xs: "block",
                  md: "none"
                }
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            IconMd,
            {
              fontSize: "small",
              sx: {
                fill: theme.palette.grey[400],
                display: {
                  xs: "none",
                  md: "block"
                }
              }
            }
          ),
          endDate ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            PreviewDateTypoStyled,
            {
              textAlign: {
                xs: "center",
                md: "left"
              },
              children: previewDate(endDate)
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            PreviewDateMessageTypoStyled,
            {
              textAlign: {
                xs: "center",
                md: "left"
              },
              children: labels?.footer?.endDate || "End Date"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      import_material7.Unstable_Grid2,
      {
        display: {
          xs: "block",
          md: "none"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material7.Divider, { orientation: "horizontal" })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material7.Unstable_Grid2, { xs: "auto", container: true, justifyContent: "flex-end", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Actions, { onCloseCallback, onSubmit, labels: labels?.actions }) })
  ] });
};

// src/components/Sections.tsx
var import_icons_material3 = require("@mui/icons-material");

// src/components/Sections.SingleCalender.tsx
var import_date_fns8 = require("date-fns");
var import_material8 = require("@mui/material");
var import_jsx_runtime8 = require("react/jsx-runtime");
var SingleCalender = ({
  firstMonth,
  secondMonth,
  handleSetSingleMonth,
  commonProps,
  locale,
  hideOutsideMonthDays
}) => {
  const canNavigateBack = !(0, import_date_fns8.isSameMonth)(firstMonth, commonProps.minDate);
  const canNavigateForward = !(0, import_date_fns8.isSameMonth)(firstMonth, commonProps.maxDate);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    import_material8.Unstable_Grid2,
    {
      xs: 12,
      container: true,
      direction: {
        xs: "column",
        md: "row"
      },
      justifyContent: "center",
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_material8.Unstable_Grid2, { xs: "auto", container: true, direction: "column", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        Month,
        {
          ...commonProps,
          currentDate: firstMonth,
          otherDate: secondMonth,
          setMonth: handleSetSingleMonth,
          navState: [canNavigateBack, canNavigateForward],
          marker: MARKERS.SINGLE_MONTH,
          locale,
          hideOutsideMonthDays
        }
      ) })
    }
  );
};

// src/components/Sections.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var Sections = (props) => {
  const theme = (0, import_material9.useTheme)();
  const {
    dateRange,
    ranges,
    minDate,
    maxDate,
    firstMonth,
    secondMonth,
    handleSetFirstMonth,
    handleSetSecondMonth,
    handleSetSingleMonth,
    handleClickDefinedRange,
    helpers,
    handlers,
    locale,
    labels,
    hideActionButtons = false,
    hideDefaultRanges = false,
    hideOutsideMonthDays,
    RangeSeparatorIcons,
    onCloseCallback,
    footerRequired
  } = props;
  const { startDate, endDate } = dateRange;
  const canNavigateCloser = (0, import_date_fns9.differenceInCalendarMonths)(secondMonth, firstMonth) >= 2;
  const commonProps = {
    dateRange,
    minDate,
    maxDate,
    helpers,
    handlers
  };
  const [selectedRange, setSelectedRange] = (0, import_react4.useState)("");
  const [selectedRangeObj, setSelectedRangeObj] = (0, import_react4.useState)(void 0);
  const onChangeSelectedRange = (e) => {
    const selectedRange2 = ranges.find(
      (range) => range.label === e.target.value
    );
    if (selectedRange2) {
      setSelectedRange(selectedRange2.label);
      setSelectedRangeObj(selectedRange2);
      handleClickDefinedRange(selectedRange2);
    }
  };
  const isRangeSameDay2 = (sd1, ed1, sd2, ed2) => {
    return sd1.getDate() === sd2.getDate() && sd1.getMonth() === sd2.getMonth() && sd1.getFullYear() === sd2.getFullYear() && ed1.getDate() === ed2.getDate() && ed1.getMonth() === ed2.getMonth() && ed1.getFullYear() === ed2.getFullYear();
  };
  (0, import_react4.useMemo)(() => {
    if (selectedRangeObj && dateRange.startDate && dateRange.endDate) {
      const { startDate: sd1, endDate: ed1 } = dateRange;
      const { startDate: sd2, endDate: ed2 } = selectedRangeObj;
      if (sd1 && ed1 && sd2 && ed2) {
        if (isRangeSameDay2(sd1, ed1, sd2, ed2)) {
          return;
        }
        setSelectedRange("");
      }
    }
  }, [selectedRangeObj, dateRange]);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    import_material9.Unstable_Grid2,
    {
      container: true,
      sx: {
        borderRadius: "16px",
        backgroundColor: "#fff",
        overflow: "hidden"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          import_material9.Unstable_Grid2,
          {
            xs: "auto",
            container: true,
            direction: "column",
            className: "DRP-Defined-Ranges",
            display: { xs: "none", md: hideDefaultRanges ? "none" : "flex" },
            children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              DefinedRanges,
              {
                selectedRange: dateRange,
                ranges,
                setRange: handleClickDefinedRange
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          import_material9.Unstable_Grid2,
          {
            xs: "auto",
            display: { xs: "none", md: hideDefaultRanges ? "none" : "block" },
            children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_material9.Divider, { orientation: "vertical" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_material9.Unstable_Grid2, { xs: true, container: true, direction: "column", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            import_material9.Unstable_Grid2,
            {
              display: { xs: hideDefaultRanges ? "none" : "flex", md: "none" },
              container: true,
              height: "48px",
              alignItems: "center",
              px: "16px",
              sx: { backgroundColor: (0, import_material9.alpha)(theme.palette.grey[400], 0.1) },
              children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
                import_material9.Unstable_Grid2,
                {
                  xs: 12,
                  container: true,
                  justifyContent: "space-between",
                  alignItems: "center",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                      import_material9.Typography,
                      {
                        sx: {
                          fontSize: "14px"
                        },
                        children: labels?.predefinedRanges || "Quick Select"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_material9.FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                      import_material9.Select,
                      {
                        displayEmpty: true,
                        SelectDisplayProps: {
                          style: {
                            minHeight: "unset"
                          }
                        },
                        variant: "outlined",
                        size: "small",
                        IconComponent: (props2) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                          import_icons_material3.KeyboardArrowDown,
                          {
                            fontSize: "small",
                            sx: {
                              fill: theme.palette.grey[400]
                            },
                            ...props2
                          }
                        ),
                        slotProps: {
                          root: {
                            sx: {
                              height: "30px",
                              backgroundColor: "#fff"
                            }
                          }
                        },
                        MenuProps: {
                          disablePortal: true,
                          PaperProps: {
                            sx: {
                              width: "auto",
                              maxHeight: "224px",
                              boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                            }
                          }
                        },
                        value: selectedRange,
                        onChange: onChangeSelectedRange,
                        children: ranges.map((range) => {
                          return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_material9.MenuItem, { value: range.label, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                            import_material9.Typography,
                            {
                              sx: {
                                fontSize: "14px"
                              },
                              children: range.label
                            }
                          ) }, range.label);
                        })
                      }
                    ) })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_material9.Unstable_Grid2, { display: { xs: "block", md: "none" }, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_material9.Divider, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_material9.Unstable_Grid2, { container: true, display: { xs: "flex", md: "none" }, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            SingleCalender,
            {
              firstMonth,
              secondMonth,
              handleSetSingleMonth,
              canNavigateCloser,
              commonProps,
              hideOutsideMonthDays,
              locale
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_material9.Unstable_Grid2, { flex: 1, display: { xs: "none", md: "flex" }, container: true, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            DuelCalender,
            {
              firstMonth,
              secondMonth,
              handleSetFirstMonth,
              handleSetSecondMonth,
              canNavigateCloser,
              commonProps,
              hideOutsideMonthDays,
              locale
            }
          ) }),
          footerRequired ? /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_material9.Unstable_Grid2, { display: hideActionButtons ? "none" : "block", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_material9.Divider, {}) }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              import_material9.Unstable_Grid2,
              {
                display: hideActionButtons ? "none" : "flex",
                xs: "auto",
                container: true,
                alignItems: {
                  xs: "normal",
                  md: "center"
                },
                justifyContent: {
                  xs: "center",
                  md: "flex-end"
                },
                direction: {
                  xs: "column",
                  md: "row"
                },
                p: "16px",
                gap: "16px",
                children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                  Footer,
                  {
                    startDate,
                    endDate,
                    locale,
                    labels,
                    onCloseCallback,
                    onSubmit: handlers.handleClickSubmit,
                    RangeSeparatorIcons
                  }
                )
              }
            )
          ] }) : null
        ] })
      ]
    }
  );
};

// src/hooks/useDateRangePicker.ts
var import_date_fns11 = require("date-fns");

// src/defaults.ts
var import_date_fns10 = require("date-fns");
var getDefaultRanges = (date, locale) => [
  {
    label: "Today",
    startDate: date,
    endDate: date
  },
  {
    label: "Yesterday",
    startDate: (0, import_date_fns10.addDays)(date, -1),
    endDate: (0, import_date_fns10.addDays)(date, -1)
  },
  {
    label: "This Week",
    startDate: (0, import_date_fns10.startOfWeek)(date, { locale }),
    endDate: (0, import_date_fns10.endOfWeek)(date, { locale })
  },
  {
    label: "Last Week",
    startDate: (0, import_date_fns10.startOfWeek)((0, import_date_fns10.addWeeks)(date, -1), { locale }),
    endDate: (0, import_date_fns10.endOfWeek)((0, import_date_fns10.addWeeks)(date, -1), { locale })
  },
  {
    label: "Last 7 Days",
    startDate: (0, import_date_fns10.addWeeks)(date, -1),
    endDate: date
  },
  {
    label: "This Month",
    startDate: (0, import_date_fns10.startOfMonth)(date),
    endDate: (0, import_date_fns10.endOfMonth)(date)
  },
  {
    label: "Last Month",
    startDate: (0, import_date_fns10.startOfMonth)((0, import_date_fns10.addMonths)(date, -1)),
    endDate: (0, import_date_fns10.endOfMonth)((0, import_date_fns10.addMonths)(date, -1))
  },
  {
    label: "This Year",
    startDate: (0, import_date_fns10.startOfYear)(date),
    endDate: (0, import_date_fns10.endOfYear)(date)
  },
  {
    label: "Last Year",
    startDate: (0, import_date_fns10.startOfYear)((0, import_date_fns10.addYears)(date, -1)),
    endDate: (0, import_date_fns10.endOfYear)((0, import_date_fns10.addYears)(date, -1))
  }
];

// src/hooks/useDateRangePicker.ts
var import_react5 = require("react");
var useDateRangePicker = (props) => {
  const today = /* @__PURE__ */ new Date();
  const {
    onChange: onChangeCallback,
    onSubmit: onSubmitCallback,
    initialDateRange,
    minDate,
    maxDate,
    definedRanges = getDefaultRanges(/* @__PURE__ */ new Date(), props.locale),
    locale
  } = props;
  const minValidDate = parseOptionalDate(minDate, AVAILABLE_MIN_DATE);
  const maxValidDate = parseOptionalDate(maxDate, AVAILABLE_MAX_DATE);
  const [initialFirstMonth, initialSecondMonth] = getValidatedMonths(
    initialDateRange || {},
    minValidDate,
    maxValidDate
  );
  const [dateRange, setDateRange] = (0, import_react5.useState)({
    ...initialDateRange
  });
  const [hoverDay, setHoverDay] = (0, import_react5.useState)();
  const [firstMonth, setFirstMonth] = (0, import_react5.useState)(
    initialFirstMonth || today
  );
  const [secondMonth, setSecondMonth] = (0, import_react5.useState)(
    initialSecondMonth || (0, import_date_fns11.addMonths)(firstMonth, 1)
  );
  const { startDate, endDate } = dateRange;
  const handleSetFirstMonth = (date) => {
    if ((0, import_date_fns11.isBefore)(date, secondMonth)) {
      if ((0, import_date_fns11.isAfter)(date, minValidDate)) {
        setFirstMonth(date);
        return;
      } else {
        setFirstMonth((0, import_date_fns11.lastDayOfMonth)(minValidDate));
        return;
      }
    } else {
      if ((0, import_date_fns11.isBefore)((0, import_date_fns11.addMonths)(date, 1), maxValidDate)) {
        setFirstMonth(date);
        setSecondMonth((0, import_date_fns11.addMonths)(date, 1));
        return;
      } else {
        setSecondMonth(maxValidDate);
        setFirstMonth((0, import_date_fns11.addMonths)(maxValidDate, -1));
      }
    }
  };
  const handleSetSecondMonth = (date) => {
    if ((0, import_date_fns11.isAfter)(date, firstMonth)) {
      if ((0, import_date_fns11.isBefore)(date, maxValidDate)) {
        setSecondMonth(date);
        return;
      } else {
        setSecondMonth((0, import_date_fns11.lastDayOfMonth)(maxValidDate));
        return;
      }
    } else {
      if ((0, import_date_fns11.isAfter)((0, import_date_fns11.addMonths)(date, -1), minValidDate)) {
        setSecondMonth(date);
        setFirstMonth((0, import_date_fns11.addMonths)(date, -1));
        return;
      } else {
        setFirstMonth(minValidDate);
        setSecondMonth((0, import_date_fns11.addMonths)(minValidDate, 1));
      }
    }
  };
  const handleSetSingleMonth = (date) => {
    if ((0, import_date_fns11.isAfter)(date, minValidDate) && (0, import_date_fns11.isBefore)(date, maxValidDate)) {
      setFirstMonth(date);
      return;
    } else if ((0, import_date_fns11.isBefore)(date, minValidDate) || (0, import_date_fns11.isSameDay)(date, minValidDate)) {
      setFirstMonth(minValidDate);
      return;
    } else if ((0, import_date_fns11.isAfter)(date, maxValidDate) || (0, import_date_fns11.isSameDay)(date, maxValidDate)) {
      setFirstMonth(maxValidDate);
      return;
    }
  };
  const handleClickDefinedRange = (range) => {
    let { startDate: newStart, endDate: newEnd } = range;
    if (newStart && newEnd) {
      range.startDate = newStart = (0, import_date_fns11.max)([newStart, minValidDate]);
      range.endDate = newEnd = (0, import_date_fns11.min)([newEnd, maxValidDate]);
      setDateRange(range);
      onChangeCallback && onChangeCallback(range);
      setFirstMonth(newStart);
      setSecondMonth(
        (0, import_date_fns11.isSameMonth)(newStart, newEnd) ? (0, import_date_fns11.addMonths)(newStart, 1) : newEnd
      );
    } else {
      setDateRange({});
      onChangeCallback && onChangeCallback({});
      setFirstMonth(today);
      setSecondMonth((0, import_date_fns11.addMonths)(firstMonth, 1));
    }
  };
  const handleClickDateNumber = (day) => {
    if (startDate && !endDate && !(0, import_date_fns11.isBefore)(day, startDate)) {
      const newRange = { startDate, endDate: day };
      onChangeCallback && onChangeCallback(newRange);
      setDateRange(newRange);
    } else {
      setDateRange({ startDate: day, endDate: void 0 });
    }
    setHoverDay(day);
  };
  const handleClickSubmit = () => {
    const { startDate: startDate2, endDate: endDate2 } = dateRange;
    if (onSubmitCallback && startDate2 && endDate2) {
      onSubmitCallback(dateRange);
    }
  };
  const handleClickNavIcon = (marker, action) => {
    if (marker === MARKERS.SINGLE_MONTH) {
      setFirstMonth((0, import_date_fns11.addMonths)(firstMonth, action));
      setSecondMonth((0, import_date_fns11.addMonths)(secondMonth, action));
      return;
    }
    if (marker === MARKERS.FIRST_MONTH) {
      const firstNew = (0, import_date_fns11.addMonths)(firstMonth, action);
      if ((0, import_date_fns11.isBefore)(firstNew, secondMonth))
        setFirstMonth(firstNew);
    } else {
      const secondNew = (0, import_date_fns11.addMonths)(secondMonth, action);
      if ((0, import_date_fns11.isBefore)(firstMonth, secondNew))
        setSecondMonth(secondNew);
    }
  };
  const handleHoverDateNumber = (date) => {
    if (startDate && !endDate) {
      if (!hoverDay || !(0, import_date_fns11.isSameDay)(date, hoverDay)) {
        setHoverDay(date);
      }
    }
  };
  const isInHoverRange = (day) => startDate && !endDate && hoverDay && (0, import_date_fns11.isAfter)(hoverDay, startDate) && (0, import_date_fns11.isWithinInterval)(day, { start: startDate, end: hoverDay });
  const helpers = {
    isInHoverRange
  };
  const handlers = {
    handleClickDateNumber,
    handleClickSubmit,
    handleClickNavIcon,
    handleHoverDateNumber
  };
  return {
    dateRange,
    ranges: definedRanges,
    minDate: minValidDate,
    maxDate: maxValidDate,
    firstMonth,
    secondMonth,
    handleSetFirstMonth,
    handleSetSecondMonth,
    handleSetSingleMonth,
    handleClickDefinedRange,
    helpers,
    handlers,
    locale
  };
};

// src/DateRangePicker.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var DateRangePicker = (props) => {
  const { customProps, ...dateRangePickerProps } = props;
  const onSubmit = customProps?.onSubmit;
  const { ...computedProps } = useDateRangePicker({
    ...dateRangePickerProps,
    onSubmit
  });
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Sections, { ...dateRangePickerProps, ...computedProps, ...customProps });
};

// src/PickerModal.tsx
var import_material10 = require("@mui/material");
var import_jsx_runtime11 = require("react/jsx-runtime");
var PickerModal = ({
  modalProps,
  customProps,
  ...dateRangePickerProps
}) => {
  const theme = (0, import_material10.useTheme)();
  const isMobileView = (0, import_material10.useMediaQuery)(theme.breakpoints.down("md"));
  if (isMobileView) {
    const { open, onClose, sx } = modalProps;
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_material10.Dialog, { open, onClose, sx, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      DateRangePicker,
      {
        ...dateRangePickerProps,
        customProps,
        footerRequired: true
      }
    ) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_material10.Popover, { ...modalProps, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    DateRangePicker,
    {
      ...dateRangePickerProps,
      customProps,
      footerRequired: true
    }
  ) });
};

// src/PickerBase.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
var PickerBase = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DateRangePicker, { ...props });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PickerBase,
  PickerModal
});
