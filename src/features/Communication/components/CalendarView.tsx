import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  Chip,
  Avatar,
  AvatarGroup,
  Tooltip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Today as TodayIcon,
  Add as AddIcon,
} from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/stores/stores';
import {
  setCalendarView,
  toggleCreateMeeting,
  setMeetingDetails,
} from '../redux/communication.slice';
import { IMeeting } from '../types/communication.types';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  addWeeks,
  isSameMonth,
  isSameDay,
  isToday,
  parseISO,
} from 'date-fns';
import CreateMeetingDialog from './CreateMeetingDialog';
import MeetingDetailsDialog from './MeetingDetailsDialog';

const CalendarView: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const { calendarView, meetings, settings } = useSelector(
    (state: RootState) => state.communication
  );

  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevious = () => {
    if (calendarView === 'month') {
      setCurrentDate(addMonths(currentDate, -1));
    } else if (calendarView === 'week') {
      setCurrentDate(addWeeks(currentDate, -1));
    } else {
      setCurrentDate(addDays(currentDate, -1));
    }
  };

  const handleNext = () => {
    if (calendarView === 'month') {
      setCurrentDate(addMonths(currentDate, 1));
    } else if (calendarView === 'week') {
      setCurrentDate(addWeeks(currentDate, 1));
    } else {
      setCurrentDate(addDays(currentDate, 1));
    }
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const getMeetingsForDay = (day: Date) => {
    return meetings.filter((meeting) => {
      const meetingDate = new Date(meeting.startTime);
      return isSameDay(meetingDate, day);
    });
  };

  const renderMonthView = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = 'd';
    const rows = [];
    let days = [];
    let day = startDate;

    // Week days header
    const daysOfWeek = [];
    const weekFormat = 'EEEE';
    for (let i = 0; i < 7; i++) {
      daysOfWeek.push(
        <Box
          key={i}
          sx={{
            p: isMobile ? 0.5 : 1,
            textAlign: 'center',
            fontWeight: 600,
            borderRight: i < 6 ? 1 : 0,
            borderColor: 'divider',
          }}
        >
          <Typography
            variant='caption'
            sx={{ fontSize: isMobile ? '0.65rem' : '0.75rem' }}
          >
            {format(addDays(startDate, i), isMobile ? 'EEEEE' : 'EEE')}
          </Typography>
        </Box>
      );
    }

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, dateFormat);
        const cloneDay = day;
        const dayMeetings = getMeetingsForDay(day);

        days.push(
          <Box
            key={day.toString()}
            sx={{
              minHeight: isMobile ? 60 : 120,
              p: isMobile ? 0.5 : 1,
              borderRight: i < 6 ? 1 : 0,
              borderBottom: 1,
              borderColor: 'divider',
              bgcolor: !isSameMonth(day, monthStart)
                ? settings.theme === 'dark'
                  ? 'grey.900'
                  : 'grey.100'
                : isToday(day)
                ? settings.theme === 'dark'
                  ? 'primary.dark'
                  : 'primary.light'
                : settings.theme === 'dark'
                ? 'grey.800'
                : 'background.paper',
              opacity: !isSameMonth(day, monthStart) ? 0.5 : 1,
              cursor: 'pointer',
              '&:hover': {
                bgcolor: settings.theme === 'dark' ? 'grey.700' : 'grey.100',
              },
            }}
          >
            <Typography
              variant='caption'
              fontWeight={isToday(day) ? 600 : 400}
              sx={{
                color: isToday(day) ? 'primary.contrastText' : 'text.primary',
                fontSize: isMobile ? '0.65rem' : '0.75rem',
              }}
            >
              {formattedDate}
            </Typography>
            {!isMobile && (
              <Box
                sx={{
                  mt: 0.5,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0.5,
                }}
              >
                {dayMeetings.slice(0, 3).map((meeting) => (
                  <Chip
                    key={meeting._id}
                    label={meeting.title}
                    size='small'
                    onClick={() => dispatch(setMeetingDetails(meeting))}
                    sx={{
                      height: 20,
                      fontSize: '0.7rem',
                      '& .MuiChip-label': {
                        px: 1,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      },
                    }}
                  />
                ))}
                {dayMeetings.length > 3 && (
                  <Typography variant='caption' color='primary'>
                    +{dayMeetings.length - 3} more
                  </Typography>
                )}
              </Box>
            )}
            {isMobile && dayMeetings.length > 0 && (
              <Box sx={{ mt: 0.5, textAlign: 'center' }}>
                <Typography
                  variant='caption'
                  color='primary'
                  sx={{ fontSize: '0.6rem' }}
                >
                  {dayMeetings.length}{' '}
                  {dayMeetings.length === 1 ? 'meeting' : 'meetings'}
                </Typography>
              </Box>
            )}
          </Box>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <Box
          key={day.toString()}
          sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}
        >
          {days}
        </Box>
      );
      days = [];
    }

    return (
      <Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            borderBottom: 1,
            borderColor: 'divider',
          }}
        >
          {daysOfWeek}
        </Box>
        {rows}
      </Box>
    );
  };

  const renderWeekView = () => {
    const weekStart = startOfWeek(currentDate);
    const weekDays = [];

    for (let i = 0; i < 7; i++) {
      const day = addDays(weekStart, i);
      const dayMeetings = getMeetingsForDay(day);

      weekDays.push(
        <Box
          key={i}
          sx={{
            flex: 1,
            borderRight: i < 6 ? 1 : 0,
            borderColor: 'divider',
            minHeight: 500,
          }}
        >
          <Box
            sx={{
              p: 1,
              borderBottom: 1,
              borderColor: 'divider',
              bgcolor: isToday(day)
                ? settings.theme === 'dark'
                  ? 'primary.dark'
                  : 'primary.light'
                : settings.theme === 'dark'
                ? 'grey.800'
                : 'background.paper',
            }}
          >
            <Typography variant='caption'>{format(day, 'EEE')}</Typography>
            <Typography variant='h6' fontWeight={isToday(day) ? 600 : 400}>
              {format(day, 'd')}
            </Typography>
          </Box>
          <Box sx={{ p: 1 }}>
            {dayMeetings.map((meeting) => (
              <Paper
                key={meeting._id}
                sx={{
                  p: 1.5,
                  mb: 1,
                  cursor: 'pointer',
                  bgcolor:
                    settings.theme === 'dark' ? 'grey.700' : 'background.paper',
                  '&:hover': {
                    bgcolor:
                      settings.theme === 'dark' ? 'grey.600' : 'grey.100',
                  },
                }}
                onClick={() => dispatch(setMeetingDetails(meeting))}
              >
                <Typography variant='subtitle2' fontWeight={600}>
                  {meeting.title}
                </Typography>
                <Typography variant='caption' color='text.secondary'>
                  {format(new Date(meeting.startTime), 'h:mm a')} -{' '}
                  {format(new Date(meeting.endTime), 'h:mm a')}
                </Typography>
                <AvatarGroup max={3} sx={{ mt: 0.5 }}>
                  {meeting.participants.map((participant) => (
                    <Avatar
                      key={participant._id}
                      src={participant.avatar}
                      alt={participant.name}
                      sx={{ width: 24, height: 24 }}
                    />
                  ))}
                </AvatarGroup>
              </Paper>
            ))}
          </Box>
        </Box>
      );
    }

    return (
      <Box sx={{ display: 'flex', borderTop: 1, borderColor: 'divider' }}>
        {weekDays}
      </Box>
    );
  };

  const renderDayView = () => {
    const dayMeetings = getMeetingsForDay(currentDate);

    return (
      <Box sx={{ p: 3 }}>
        <Typography variant='h5' gutterBottom>
          {format(currentDate, 'EEEE, MMMM d, yyyy')}
        </Typography>
        <List>
          {dayMeetings.length === 0 ? (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 4,
              }}
            >
              <Typography variant='body1' color='text.secondary'>
                No meetings scheduled for this day
              </Typography>
            </Box>
          ) : (
            dayMeetings.map((meeting) => (
              <Paper
                key={meeting._id}
                sx={{
                  mb: 2,
                  p: 2,
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: settings.theme === 'dark' ? 'grey.800' : 'grey.50',
                  },
                }}
                onClick={() => dispatch(setMeetingDetails(meeting))}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box>
                    <Typography variant='h6'>{meeting.title}</Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {format(new Date(meeting.startTime), 'h:mm a')} -{' '}
                      {format(new Date(meeting.endTime), 'h:mm a')}
                    </Typography>
                    {meeting.description && (
                      <Typography variant='body2' sx={{ mt: 1 }}>
                        {meeting.description}
                      </Typography>
                    )}
                  </Box>
                  <Chip label={meeting.status} size='small' color='primary' />
                </Box>
                <Box
                  sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <Typography variant='caption' color='text.secondary'>
                    Participants:
                  </Typography>
                  <AvatarGroup max={5}>
                    {meeting.participants.map((participant) => (
                      <Tooltip key={participant._id} title={participant.name}>
                        <Avatar
                          src={participant.avatar}
                          alt={participant.name}
                          sx={{ width: 28, height: 28 }}
                        />
                      </Tooltip>
                    ))}
                  </AvatarGroup>
                </Box>
              </Paper>
            ))
          )}
        </List>
      </Box>
    );
  };

  return (
    <>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            p: isMobile ? 1.5 : 2,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'stretch' : 'center',
            justifyContent: 'space-between',
            gap: isMobile ? 1.5 : 0,
            borderBottom: 1,
            borderColor: 'divider',
            bgcolor:
              settings.theme === 'dark' ? 'grey.800' : 'background.paper',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 1,
            }}
          >
            <Typography
              variant={isMobile ? 'h6' : 'h5'}
              fontWeight={600}
              noWrap
              sx={{ flex: 1 }}
            >
              {calendarView === 'month'
                ? format(currentDate, isMobile ? 'MMM yyyy' : 'MMMM yyyy')
                : calendarView === 'week'
                ? `Week of ${format(
                    startOfWeek(currentDate),
                    isMobile ? 'MMM d' : 'MMM d, yyyy'
                  )}`
                : format(
                    currentDate,
                    isMobile ? 'MMM d, yyyy' : 'MMMM d, yyyy'
                  )}
            </Typography>

            {isMobile && (
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                <IconButton onClick={handlePrevious} size='small'>
                  <ChevronLeftIcon fontSize='small' />
                </IconButton>
                <IconButton onClick={handleNext} size='small'>
                  <ChevronRightIcon fontSize='small' />
                </IconButton>
              </Box>
            )}
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: isMobile ? 1 : 2,
              flexWrap: 'wrap',
            }}
          >
            {!isMobile && (
              <>
                <Button
                  startIcon={<TodayIcon />}
                  onClick={handleToday}
                  size='small'
                >
                  Today
                </Button>

                <Box sx={{ display: 'flex', gap: 0.5 }}>
                  <IconButton onClick={handlePrevious} size='small'>
                    <ChevronLeftIcon />
                  </IconButton>
                  <IconButton onClick={handleNext} size='small'>
                    <ChevronRightIcon />
                  </IconButton>
                </Box>
              </>
            )}

            <ToggleButtonGroup
              value={calendarView}
              exclusive
              onChange={(e, newView) =>
                newView && dispatch(setCalendarView(newView))
              }
              size='small'
              sx={{ flex: isMobile ? 1 : 'none' }}
            >
              <ToggleButton value='month' sx={{ flex: isMobile ? 1 : 'none' }}>
                {isMobile ? 'M' : 'Month'}
              </ToggleButton>
              <ToggleButton value='week' sx={{ flex: isMobile ? 1 : 'none' }}>
                {isMobile ? 'W' : 'Week'}
              </ToggleButton>
              <ToggleButton value='day' sx={{ flex: isMobile ? 1 : 'none' }}>
                {isMobile ? 'D' : 'Day'}
              </ToggleButton>
            </ToggleButtonGroup>

            <Button
              variant='contained'
              startIcon={!isMobile && <AddIcon />}
              onClick={() => dispatch(toggleCreateMeeting())}
              size={isMobile ? 'small' : 'medium'}
              fullWidth={isMobile}
            >
              {isMobile ? 'New' : 'New Meeting'}
            </Button>
          </Box>
        </Box>

        {/* Calendar Content */}
        <Box
          sx={{
            flex: 1,
            overflow: 'auto',
            bgcolor: settings.theme === 'dark' ? 'grey.900' : 'grey.50',
          }}
        >
          {calendarView === 'month' && renderMonthView()}
          {calendarView === 'week' && renderWeekView()}
          {calendarView === 'day' && renderDayView()}
        </Box>
      </Box>

      {/* Dialogs */}
      <CreateMeetingDialog />
      <MeetingDetailsDialog />
    </>
  );
};

export default CalendarView;
