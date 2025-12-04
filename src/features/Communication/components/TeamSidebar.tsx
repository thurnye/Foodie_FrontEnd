import React from 'react';
import {
  Box,
  Avatar,
  Tooltip,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Add as AddIcon,
  CalendarMonth as CalendarIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/stores/stores';
import {
  selectTeam,
  setViewMode,
  toggleCreateTeam,
  toggleSettings,
} from '../redux/communication.slice';

const TeamSidebar: React.FC = () => {
  const dispatch = useDispatch();
  const { teams, selectedTeamId, viewMode, settings } = useSelector(
    (state: RootState) => state.communication
  );

  const handleTeamClick = (teamId: string) => {
    dispatch(selectTeam(teamId));
    dispatch(setViewMode('channel'));
  };

  const handleCalendarClick = () => {
    dispatch(setViewMode('calendar'));
  };

  return (
    <Box
      sx={{
        width: 72,
        bgcolor: settings.theme === 'dark' ? 'grey.800' : 'primary.dark',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 2,
        gap: 1,
      }}
    >
      {/* Teams List */}
      {teams.map((team) => (
        <Tooltip key={team._id} title={team.name} placement="right">
          <Box>
            <Avatar
              onClick={() => handleTeamClick(team._id)}
              sx={{
                width: 48,
                height: 48,
                cursor: 'pointer',
                border:
                  selectedTeamId === team._id && viewMode === 'channel'
                    ? '3px solid'
                    : '2px solid transparent',
                borderColor: 'primary.light',
                bgcolor: settings.theme === 'dark' ? 'grey.700' : 'white',
                color: 'primary.main',
                fontSize: '1.5rem',
                transition: 'all 0.2s',
                '&:hover': {
                  transform: 'scale(1.1)',
                  borderColor: 'primary.main',
                },
              }}
            >
              {team.avatar || team.name.charAt(0).toUpperCase()}
            </Avatar>
          </Box>
        </Tooltip>
      ))}

      {/* Add Team Button */}
      <Tooltip title="Create Team" placement="right">
        <IconButton
          onClick={() => dispatch(toggleCreateTeam())}
          sx={{
            width: 48,
            height: 48,
            bgcolor: settings.theme === 'dark' ? 'grey.700' : 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            '&:hover': {
              bgcolor: settings.theme === 'dark' ? 'grey.600' : 'rgba(255, 255, 255, 0.2)',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.2s',
          }}
        >
          <AddIcon />
        </IconButton>
      </Tooltip>

      <Divider sx={{ width: '80%', my: 1, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />

      {/* Calendar Button */}
      <Tooltip title="Calendar" placement="right">
        <IconButton
          onClick={handleCalendarClick}
          sx={{
            width: 48,
            height: 48,
            bgcolor:
              viewMode === 'calendar'
                ? settings.theme === 'dark'
                  ? 'grey.600'
                  : 'rgba(255, 255, 255, 0.3)'
                : settings.theme === 'dark'
                ? 'grey.700'
                : 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            '&:hover': {
              bgcolor: settings.theme === 'dark' ? 'grey.600' : 'rgba(255, 255, 255, 0.2)',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.2s',
          }}
        >
          <CalendarIcon />
        </IconButton>
      </Tooltip>

      {/* Spacer */}
      <Box sx={{ flex: 1 }} />

      {/* Settings Button */}
      <Tooltip title="Settings" placement="right">
        <IconButton
          onClick={() => dispatch(toggleSettings())}
          sx={{
            width: 48,
            height: 48,
            bgcolor: settings.theme === 'dark' ? 'grey.700' : 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            '&:hover': {
              bgcolor: settings.theme === 'dark' ? 'grey.600' : 'rgba(255, 255, 255, 0.2)',
              transform: 'rotate(45deg)',
            },
            transition: 'all 0.3s',
          }}
        >
          <SettingsIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default TeamSidebar;
