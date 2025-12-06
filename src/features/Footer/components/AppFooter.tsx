import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../../../public/images/logo.png';

const AppFooter: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Communities', path: '/communities' },
      { name: 'Events', path: '/events' },
    ],
    resources: [
      // { name: 'Dashboard', path: '/dashboard' },
      // { name: 'Communication', path: '/communication' },
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
    ],
  };

  const socialLinks = [
    { icon: <FacebookIcon />, url: 'https://facebook.com', name: 'Facebook' },
    { icon: <TwitterIcon />, url: 'https://twitter.com', name: 'Twitter' },
    { icon: <InstagramIcon />, url: 'https://instagram.com', name: 'Instagram' },
    { icon: <YouTubeIcon />, url: 'https://youtube.com', name: 'YouTube' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1a1a2e',
        color: 'white',
        pt: { xs: 4, md: 6 },
        pb: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 2 }}>
              <Box
                component={RouterLink}
                to="/"
                sx={{
                  display: 'inline-block',
                  textDecoration: 'none',
                  mb: 2,
                }}
              >
                <img
                  src={Logo}
                  alt="Foodie Logo"
                  style={{ width: isMobile ? '120px' : '150px', height: 'auto' }}
                />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  mb: 2,
                  maxWidth: 350,
                }}
              >
                Discover, create, and share amazing recipes with food lovers from around
                the world. Join our community and elevate your culinary journey.
              </Typography>

              {/* Social Media Icons */}
              <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.name}
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      '&:hover': {
                        color: 'white',
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {footerLinks.quickLinks.map((link) => (
                <Link
                  key={link.name}
                  component={RouterLink}
                  to={link.path}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    '&:hover': {
                      color: 'white',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Resources */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              Resources
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {footerLinks.resources.map((link) => (
                <Link
                  key={link.name}
                  component={RouterLink}
                  to={link.path}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    '&:hover': {
                      color: 'white',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Legal */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  component={RouterLink}
                  to={link.path}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    '&:hover': {
                      color: 'white',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={6} sm={12} md={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              Contact
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.7)' }} />
                <Typography
                  variant="body2"
                  sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}
                >
                  support@foodie.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.7)' }} />
                <Typography
                  variant="body2"
                  sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}
                >
                  +1 (555) 123-4567
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <LocationIcon sx={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.7)' }} />
                <Typography
                  variant="body2"
                  sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}
                >
                  123 Food Street, Culinary City, FC 12345
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            &copy; {currentYear} Foodie. All rights reserved.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              textAlign: { xs: 'center', sm: 'right' },
            }}
          >
            Made with love for food enthusiasts
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AppFooter;
