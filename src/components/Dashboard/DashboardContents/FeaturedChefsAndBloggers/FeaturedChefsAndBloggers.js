import React, { useMemo } from 'react';
import styles from './FeaturedChefsAndBloggers.module.css';
import Box from '@mui/material/Box';
import { Typography, Link as MuiLink } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import parser from 'html-react-parser';
import { FaPinterestSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';

const guest = {
  _id: '612296fc86231100a0631b22',
  firstName: 'Test',
  lastName: 'Tester',
  aboutMe: [
    {
      type: 'text',
      value:
        '<div class="author-description">\n<p>Et leo duis ut diam quam nulla porttitor massa id. Vitae auctor eu augue ut lectus arcu. Neque vitae tempus quam pellentesque nec. Volutpat consequat mauris nunc congue nisi.t Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Amet consectetur adipiscing elit duis. Eget sit amet tellus cras adipiscing honcus mat voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqueipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Volutpat consequat mauris nunc congue nisi.t Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Amet consectetur adipiscing elit duis. Eget sit amet tellus cras adipiscing honcus mat voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqueipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n<p>&nbsp;</p>\n<h5><strong>My Resources:</strong></h5>\n<p>Purus viverra accumsan in nisl. Quis blandit turpis cursus in hac habitasse platea fuss-free udin tempor id eu nisl nunc mi ipsum imperdiet massa, Aliquam Ultrices Sagittis, orci a scelerisque purus semper. Et leo duis ut diam quam nulla porttitor massa id. Vitae auctor eu augue ut lectus arcu. Neque vitae tempus quam pellentesque nec. Volutpat consequat mauris nunc congue nisi.t Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Amet consectetur adipiscing elit duis. Eget sit amet tellus cras adipiscing honcus mat voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqueipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n</div>\n<p>Leo in vitae turpis massa sed elementum tempus egestas sed:</p>\n<ul class="resourses-items">\n<li class="resourses-item">Dolor sed viverra ipsum nunc alique</li>\n<li class="resourses-item">Nec tincidunt semper Neque Ornare, aenean euismod</li>\n<li class="resourses-item">Pellentesque massa placerat</li>\n</ul>\n<div class="my-recipes">\n<div class="my-recipe-heading">&nbsp;</div>\n</div>',
    },
  ],
  avatar:
    'https://images.unsplash.com/photo-1628191013647-5640e14ded54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw3M3x8Y29va2luZyUyMHdpdGglMjBtb258ZW58MHx8fHwxNzE2NTgxNDAzfDA&ixlib=rb-4.0.3&q=80&w=400',
  socialMediaPlatform: [
    {
      name: 'Facebook',
      link: 'https://www.facebook.com',
    },
    {
      name: 'X',
      link: 'https://www.x.com',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedIn.com',
    },
    {
      name: 'Pinterest',
      link: 'https://www.pinterest.com',
    },
  ],
};

// Helper to extract and limit to 50 words
const getFirstParagraph = (aboutMe) => {
  const textContent = aboutMe.find((el) => el.type === 'text')?.value || '';
  const firstParagraphMatch = textContent.match(/<p>(.*?)<\/p>/i);
  const fullParagraph = firstParagraphMatch ? firstParagraphMatch[1] : '';
  const words = fullParagraph.split(' ').slice(0, 65).join(' ');
  return `${words}...`;
};

const mediaSwitch = (media) => {
  const { name, link } = media;
  switch (name) {
    case 'Facebook':
      return (
        <MuiLink href={link} underline='none' target='_blank'>
          <FaFacebookSquare color='#4267B2' />
        </MuiLink>
      );
    case 'X':
      return (
        <MuiLink href={link} underline='none' target='_blank'>
          <FaXTwitter color='black' />
        </MuiLink>
      );
    case 'LinkedIn':
      return (
        <MuiLink href={link} underline='none' target='_blank'>
          <FaLinkedin color='#4267B2' />
        </MuiLink>
      );
    case 'Pinterest':
      return (
        <MuiLink href={link} underline='none' target='_blank'>
          <FaPinterestSquare color='#E60023' />
        </MuiLink>
      );

    default:
      break;
  }
};

const FeaturedChefsAndBloggers = () => {
  const { _id, avatar, firstName, lastName, aboutMe, socialMediaPlatform } =
    guest;
  const navigate = useNavigate();

  const firstParagraph = useMemo(() => getFirstParagraph(aboutMe), [aboutMe]);

  return (
    <Box
      className={styles.FeaturedChefsAndBloggers}
      sx={{ height: 250, overflow: 'auto' }}
    >
      <Box>
        <Box
          sx={{
            float: 'left',
            p: 2,
          }}
        >
          <CardMedia
            component='img'
            image={avatar}
            alt={firstName}
            sx={{ width: 151, height: 170, borderRadius: '8px' }}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: 1,
            }}
          >
            {socialMediaPlatform.map((media, index) => (
              <Box
                key={index}
                sx={{
                  mr: 1,
                  padding: '3px',
                }}
              >
                {mediaSwitch(media)}
              </Box>
            ))}
          </Box>
        </Box>
        <Box>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component='div' variant='h5'>
              {firstName} {lastName}
            </Typography>
            <Box sx={{ fontSize: 12, mt: 1 }}>
              {parser(firstParagraph)}{' '}
              <Link
                to={`/author`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/author`, {
                    state: { authorId: _id },
                  });
                }}
                style={{ color: '#0000b6', cursor: 'pointer' }}
              >
                read more
              </Link>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturedChefsAndBloggers;
