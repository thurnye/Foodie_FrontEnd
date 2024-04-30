import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { PickerModal } from "mui-daterange-picker-plus";

function DateRangePicker({ buttonText, onChange, onSubmit, onCloseCallback, defaultDate }) {
  // state + handlers for the Modal
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    onCloseCallback && onCloseCallback(); // Call onCloseCallback if provided
  };
  const open = Boolean(anchorEl);

  // state + handlers for the DateRange Value
  const [dateRangeOnChange, setDateRangeOnChange] = useState({});
  const [dateRangeOnSubmit, setDateRangeOnSubmit] = useState({});


  const handleSetDateRangeOnChange = (dateRange) => {
    setDateRangeOnChange(dateRange);
    onChange && onChange(dateRange); // Call onChange if provided
    handleSetDateRangeOnSubmit({});
  };


  const handleSetDateRangeOnSubmit = (dateRange) => {
    setDateRangeOnSubmit(dateRange);
    onSubmit && onSubmit(dateRange); // Call onSubmit if provided
    // handleClose(); // close the modal
  };

  return (
    <>
    <Box sx={{textAlign:'end',}}>
      <Button variant="text" onClick={handleClick} sx={{textTransform: 'none'}}>
        {buttonText}
      </Button>
    </Box>
      <PickerModal
        onChange={(range) => handleSetDateRangeOnChange(range)}
        customProps={{
          onSubmit: (range) => {
            handleSetDateRangeOnSubmit(range)
            handleClose();
          },
          onCloseCallback: handleClose,
        }}
        // initialDateRange={{
        //   startDate: new Date("2023-09-15"),
        //   endDate: new Date("2024-12-31"),
        // }}
        initialDateRange={defaultDate}
        minDate={new Date()}
        definedRanges={[
          {
            label: "Today",
            startDate: new Date(),
            endDate: new Date(),
          },
          {
            label: "Yesterday",
            startDate: new Date(new Date().setDate(new Date().getDate() - 1)),
            endDate: new Date(new Date().setDate(new Date().getDate() - 1)),
          },
          {
            label: "This Week",
            startDate: new Date(new Date().setDate(new Date().getDate() - 7)),
            endDate: new Date(),
          },
          {
            label: "Last Week",
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
                borderRadius: "16px",
                boxShadow: "rgba(0, 0, 0, 0.21) 0px 0px 4px",
              },
            },
          },
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
        }}
      />
    </>
  );
}

DateRangePicker.propTypes = {
  buttonText: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onCloseCallback: PropTypes.func,
  defaultDate: PropTypes.object
};

DateRangePicker.defaultProps = {
  buttonText: "View Picker Model",
};

export default DateRangePicker;
