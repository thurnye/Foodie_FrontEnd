import PolicyIcon from '@mui/icons-material/Policy';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import CampaignIcon from '@mui/icons-material/Campaign';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import ExploreIcon from '@mui/icons-material/Explore';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import EventIcon from '@mui/icons-material/Event';

export const resources = [
  {
    id: 1,
    name: 'Advertise',
    link: '/resources/guidelines',
    icon: CampaignIcon,
  },
  { id: 2, name: 'Help', link: '/resources/events', icon: HelpOutlineIcon },
  { id: 3, name: 'Blog', link: '/resources/support', icon: RssFeedIcon },
];
export const generalRules = [
  {
    id: 4,
    name: 'Community Guidelines',
    link: '/rules/guidelines',
    icon: LocalLibraryIcon,
  },
  {
    id: 1,
    name: 'Rules and Conducts',
    link: '/rules/conduct',
    icon: PolicyIcon,
  },
  { id: 2, name: 'Privacy Policy', link: '/rules/privacy', icon: PolicyIcon },
  { id: 3, name: 'Terms of Service', link: '/rules/terms', icon: PolicyIcon },
  { id: 5, name: 'Cookie Policy', link: '/rules/cookies', icon: PolicyIcon },
  {
    id: 6,
    name: 'Accessibility',
    link: '/rules/accessibility',
    icon: AccessibilityIcon,
  },
];

export const groupNavItems = [
  {
    id: 1,
    name: 'Explore Communities',
    link: '/communities',
    icon: ExploreIcon,
  },
  {
    id: 2,
    name: 'Start A Communities',
    link: '/communities/request',
    icon: Diversity2Icon,
  },
  {
    id: 3,
    name: 'Community Events',
    link: '/communities/events',
    icon: EventIcon,
  },
];

export const groupMemberRole = {
  ADMIN: 'admin',
  MODERATOR: 'moderator',
  MEMBER: 'member',
};
