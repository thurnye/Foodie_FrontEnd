import React, { useState, MouseEvent } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { PickerModal, DateRange } from 'mui-daterange-picker-plus'; 
// Props interface for component
interface DateRangePickerProps {
  buttonText?: string;
  onChange?: (range: DateRange) => void;
  onSubmit?: (range: DateRange) => void;
  onCloseCallback?: () => void;
  defaultDate?: DateRange;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  buttonText = 'View Picker Modal',
  onChange,
  onSubmit,
  onCloseCallback,
  defaultDate,
}) => {
  // ---------- Modal state ----------
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    onCloseCallback?.();
  };

  // ---------- Date range state ----------
  const [dateRangeOnChange, setDateRangeOnChange] = useState<DateRange>();
  const [dateRangeOnSubmit, setDateRangeOnSubmit] = useState<DateRange>();

  const handleSetDateRangeOnChange = (dateRange: DateRange) => {
    setDateRangeOnChange(dateRange);
    onChange?.(dateRange);
    handleSetDateRangeOnSubmit({});
  };

  const handleSetDateRangeOnSubmit = (dateRange: DateRange) => {
    setDateRangeOnSubmit(dateRange);
    onSubmit?.(dateRange);
  };

  return (
    <>
      {/* Trigger Button */}
      <Box sx={{ textAlign: 'end' }}>
        <Button variant="text" onClick={handleClick} sx={{ textTransform: 'none' }}>
          {buttonText}
        </Button>
      </Box>

      {/* Date Range Modal */}
      <PickerModal
        onChange={handleSetDateRangeOnChange}
        customProps={{
          onSubmit: (range: DateRange) => {
            handleSetDateRangeOnSubmit(range);
            handleClose();
          },
          onCloseCallback: handleClose,
        }}
        initialDateRange={defaultDate}
        minDate={new Date()}
        definedRanges={[
          {
            label: 'Today',
            startDate: new Date(),
            endDate: new Date(),
          },
          {
            label: 'Yesterday',
            startDate: new Date(new Date().setDate(new Date().getDate() - 1)),
            endDate: new Date(new Date().setDate(new Date().getDate() - 1)),
          },
          {
            label: 'This Week',
            startDate: new Date(new Date().setDate(new Date().getDate() - 7)),
            endDate: new Date(),
          },
          {
            label: 'Last Week',
            startDate: new Date(new Date().setDate(new Date().getDate() - 14)),
            endDate: new Date(new Date().setDate(new Date().getDate() - 7)),
          },
        ]}
        modalProps={{
          open,
          anchorEl,
          onClose: handleClose,
          slotProps: {
            paper: {
              sx: {
                borderRadius: '16px',
                boxShadow: 'rgba(0, 0, 0, 0.21) 0px 0px 4px',
              },
            },
          },
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
        }}
      />
    </>
  );
};

export default DateRangePicker;
