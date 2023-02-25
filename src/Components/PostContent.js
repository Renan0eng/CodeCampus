import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AspectRatio from '@mui/joy/AspectRatio';
import Divider from '@mui/joy/Divider';
import Avatar from '@mui/joy/Avatar';
import { InputAdornment } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { useNavigate } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Input } from '@mui/joy';

export default function FeedContent({ posts }) {

  const user = JSON.parse(sessionStorage.getItem('user'));

  const navigate = useNavigate();

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = new Date();
  const formattedDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;


  React.useEffect(() => {
    console.log(`FeedContent`, user);
  }, []);

  return (
    <Sheet
      variant="outlined"
      sx={{
        borderRadius: 'sm',
        p: 2,
        mb: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Avatar
            src={posts.authorAvatar}
            srcSet={posts.authorAvatar}
            sx={{ borderRadius: 'xl' }}
          />
          <Box sx={{ ml: 2 }}>
            <Typography level="body2" textColor="text.primary" mb={0.5}>
              {posts.authorName}
            </Typography>
            <Typography level="body3" textColor="text.tertiary">
              {posts.date}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ display: 'flex', height: '32px', flexDirection: 'row', gap: 1.5 }}
        >
          <IconButton size="sm" variant="outlined" color="neutral"
            onClick={() => {
              console.log(`ArrowUpward ${posts.title}`);
            }}
          >
            <ArrowUpwardIcon />
          </IconButton>
          <Typography level="body2" pt={0.5} textColor="text.primary" mb={0.5}>
            {posts.relevance}
          </Typography>
          <IconButton size="sm" variant="outlined" color="neutral"
            onClick={() => {
              console.log(`ArrowDownward ${posts.title}`);
            }}
          >
            <ArrowDownwardIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider sx={{ mt: 2 }} />
      <Box
        sx={{ py: 2, display: 'flex', flexDirection: 'column', alignItems: 'start' }}
      >
        <Typography level="h5" textAlign='center' textColor="text.primary">
          {posts.title}
        </Typography>
      </Box>
      <Divider />
      <Typography level="body2" mt={2} mb={2}>
        {posts.desc}
      </Typography>
      {posts.images ? <>
        <Divider />
        <Typography fontWeight="md" fontSize="sm" mt={2} mb={2}>
          Images
        </Typography>
        <Box
          sx={(theme) => ({
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            '& > div': {
              boxShadow: 'none',
              '--Card-padding': '0px',
              '--Card-radius': theme.vars.radius.sm,
            },
          })}
        >
          {posts.images && posts.images.map((image) => (
            <Box
              sx={(theme) => ({
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                mb: 3,
                '& > div': {
                  boxShadow: 'none',
                  '--Card-padding': '0px',
                  '--Card-radius': theme.vars.radius.sm,
                },
              })}
            >
              <Card variant="outlined" >
                <AspectRatio ratio="1" sx={{ minWidth: 100 }}
                  onClick={() => {
                    console.log(`image ${image}`);
                  }}
                >
                  <img
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                    src={image}
                    srcSet={image}
                    alt="Yosemite National Park"
                  />
                </AspectRatio>
              </Card>
            </Box>
          ))}
        </Box></> : null}
      {/* add comentarios */}
      <Divider />
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
            mt: 2,
          }}
        >

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Avatar
              src={user && user.photoURL ? user.photoURL : 'https://www.w3schools.com/howto/img_avatar.png' }
              srcSet={user && user.photoURL ? user.photoURL : 'https://www.w3schools.com/howto/img_avatar.png'}
              sx={{ borderRadius: 'xl' }}
            />
            <Box sx={{ ml: 2 }}>
              <Typography level="body2" textColor="text.primary" mb={0.5}>
                {user && user.displayName ? user.displayName : 'Anonimo'}
              </Typography>
              <Typography level="body3" textColor="text.tertiary">
                {formattedDate}
              </Typography>
            </Box>
          </Box>
          {/* input comentario */}
        </Box>
        <Box>
          <Input
            sx={{ mt: 1 }}
            placeholder="Add a comment"
            size="sm"
            variant="outlined"
            color="neutral"
            fullWidth
          />
        </Box>
        {/* btn enviar */}

      </Box>



      {posts.contents && posts.contents.map((content, index) => (<>
        <Divider />
        <Typography fontWeight="md" fontSize="sm" mt={2} mb={2}>
          Contents
        </Typography>
        <Box
          sx={(theme) => ({
            display: 'flex',
            flexWrap: 'wrap',
            gap: 0.5,
            '& > div': {
              boxShadow: 'none',
              '--Card-padding': '0px',
              '--Card-radius': theme.vars.radius.sm,
            },
          })}
        >
          <Box
            sx={(theme) => ({
              width: '90%',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 2,
              '& > div': {
                boxShadow: 'none',
                '--Card-padding': '0px',
                '--Card-radius': theme.vars.radius.sm,
              },
            })}
          >
            <Avatar
              src={content.authorAvatar}
              srcSet={content.authorAvatarSet}
              sx={{ borderRadius: 'xl', width: 30, height: 30 }}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
              <Typography level="body2">
                {content.authorName}
              </Typography>
              <Typography level="body2" textColor="#999" fontSize={10} >
                {content.date}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={(theme) => ({
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              alignItems: 'start',
              pb: 0.5,
              width: '100%',
              '& > div': {
                boxShadow: 'none',
                '--Card-padding': '0px',
                '--Card-radius': theme.vars.radius.sm,
              },
            })}
          >
            <Typography level="body2" textColor="#999" mb={0.5}>
              {content.desc}
            </Typography>
            <Divider />
          </Box>
        </Box>
      </>))}
    </Sheet>
  );
}
