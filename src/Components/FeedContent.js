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
import { Link } from '@mui/material';

import { useNavigate } from 'react-router-dom';

export default function FeedContent({ posts }) {

  const navigate = useNavigate();

  return (
    <Sheet
      variant="outlined"
      sx={{
        borderRadius: 'sm',
        p: 2,
        mb: 3,
      }}
      onClick={() => {
        console.log(`Clicked ${posts.title}`);
        navigate(`/post/${posts.id}`);
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
      <Box pb={2}
        dangerouslySetInnerHTML={{ __html: posts.desc }}
      />
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
          {posts.images && posts.images.map((image, index) => (
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
                <AspectRatio ratio="1" sx={{ minWidth: 80 }}>
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
      {posts.contents && <>
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
              src={posts.contents[0].authorAvatar}
              srcSet={posts.contents[0].authorAvatarSet}
              sx={{ borderRadius: 'xl', width: 30, height: 30 }}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
              <Typography level="body2">
                {posts.contents[0].authorName}
              </Typography>
              <Typography level="body2" textColor="#999" fontSize={10} >
                {posts.contents[0].date}
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
              {posts.contents[0].desc}
            </Typography>
            <Divider />
          </Box>
        </Box></>}
    </Sheet>
  );
}
