import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';

// Icons import
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import MenuIcon from '@mui/icons-material/Menu';
import BookRoundedIcon from '@mui/icons-material/BookRounded';

// custom
import emailTheme from '../constants/theme';
import Menu from '../Components/Menu';
import Layout from '../Components/Layout';
import Navigation from '../Components/Navigation';
import Mails from '../Components/Mails';
import EmailContent from '../Components/FeedContent';

function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton size="sm" variant="outlined" color="primary" />;
  }
  return (
    <IconButton
      id="toggle-mode"
      size="sm"
      variant="outlined"
      color="primary"
      onClick={() => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
      }}
    >
      {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

export default function EmailExample() {

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const [posts, setPosts] = React.useState([{
    authorName: 'Alex Jonnold',
    authorAvatar: 'https://i.pravatar.cc/40?img=3',
    authorAvatarSet: 'https://i.pravatar.cc/80?img=3',
    date: '21 Oct 2022',
    title: 'Yosemite Trip',
    desc: 'Fale um amigo que vc acha gay',
    tags: ['yosemite', 'trip', 'weekend'],
    images: [{ image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' },
    { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160', imageLink: 'https://domains.google.com/registrar/' },
    { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' }],
    contents: [{
      authorId: '1',
      authorAvatar: 'https://i.pravatar.cc/40?img=3',
      authorAvatarSet: 'https://i.pravatar.cc/80?img=3',
      authorName: 'Renan',
      desc: 'Acho que o matheus é um baita de um cara gay',
      date: '21 Oct 2022',
      images: [{ image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' }],
    },
    {
      authorId: '1',
      authorAvatar: 'https://i.pravatar.cc/40?img=3',
      authorAvatarSet: 'https://i.pravatar.cc/80?img=3',
      authorName: 'Renan',
      desc: 'Acho que o matheus é um baita de um cara gay',
      date: '21 Oct 2022',
      images: [{ image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' }],
    },{
      authorId: '1',
      authorAvatar: 'https://i.pravatar.cc/40?img=3',
      authorAvatarSet: 'https://i.pravatar.cc/80?img=3',
      authorName: 'Renan',
      desc: 'Acho que o matheus é um baita de um cara gay',
      date: '21 Oct 2022',
      images: [{ image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' }],
    }
  ]
  },
  {
    authorName: 'Alex Jonnold',
    authorAvatar: 'https://i.pravatar.cc/40?img=3',
    authorAvatarSet: 'https://i.pravatar.cc/80?img=3',
    date: '21 Oct 2022',
    title: 'Yosemite Trip',
    desc: 'Fale um amigo que vc acha gay',
    tags: ['yosemite', 'trip', 'weekend'],
    images: [{ image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' },
    { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160', imageLink: 'https://domains.google.com/registrar/' },
    { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' }],
    contents: [{
      authorId: '1',
      authorAvatar: 'https://i.pravatar.cc/40?img=3',
      authorAvatarSet: 'https://i.pravatar.cc/80?img=3',
      authorName: 'Renan',
      desc: 'Acho que o matheus é um baita de um cara gay',
      date: '21 Oct 2022',
      images: [{ image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' }],
    },
    {
      authorId: '1',
      authorAvatar: 'https://i.pravatar.cc/40?img=3',
      authorAvatarSet: 'https://i.pravatar.cc/80?img=3',
      authorName: 'Renan',
      desc: 'Acho que o matheus é um baita de um cara gay',
      date: '21 Oct 2022',
      images: [{ image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' }],
    },{
      authorId: '1',
      authorAvatar: 'https://i.pravatar.cc/40?img=3',
      authorAvatarSet: 'https://i.pravatar.cc/80?img=3',
      authorName: 'Renan',
      desc: 'Acho que o matheus é um baita de um cara gay',
      date: '21 Oct 2022',
      images: [{ image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' }],
    }
  ]
  },
  {
    authorName: 'Alex Jonnold',
    authorAvatar: 'https://i.pravatar.cc/40?img=3',
    authorAvatarSet: 'https://i.pravatar.cc/80?img=3',
    date: '21 Oct 2022',
    title: 'Yosemite Trip',
    desc: 'Fale um amigo que vc acha gay',
    tags: ['yosemite', 'trip', 'weekend'],
    images: [{ image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' },
    { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160', imageLink: 'https://domains.google.com/registrar/' },
    { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' }],
    contents: [{
      authorId: '1',
      authorAvatar: 'https://i.pravatar.cc/40?img=3',
      authorAvatarSet: 'https://i.pravatar.cc/80?img=3',
      authorName: 'Renan',
      desc: 'Acho que o matheus é um baita de um cara gay',
      date: '21 Oct 2022',
      images: [{ image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' }],
    },
    {
      authorId: '1',
      authorAvatar: 'https://i.pravatar.cc/40?img=3',
      authorAvatarSet: 'https://i.pravatar.cc/80?img=3',
      authorName: 'Renan',
      desc: 'Acho que o matheus é um baita de um cara gay',
      date: '21 Oct 2022',
      images: [{ image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' }],
    },{
      authorId: '1',
      authorAvatar: 'https://i.pravatar.cc/40?img=3',
      authorAvatarSet: 'https://i.pravatar.cc/80?img=3',
      authorName: 'Renan',
      desc: 'Acho que o matheus é um baita de um cara gay',
      date: '21 Oct 2022',
      images: [{ image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' }],
    }
  ]
  }
]);

  return (
    <CssVarsProvider disableTransitionOnChange theme={emailTheme}>
      <CssBaseline />
      {drawerOpen && (
        <Layout.SideDrawer onClose={() => setDrawerOpen(false)}>
          <Navigation />
        </Layout.SideDrawer>
      )}
      <Layout.Root
        sx={{
          ...(drawerOpen && {
            height: '100vh',
            overflow: 'hidden',
          }),
        }}
      >
        <Layout.Header>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            <IconButton
              variant="outlined"
              size="sm"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              size="sm"
              variant="solid"
              sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
            >
              <MailRoundedIcon />
            </IconButton>
            <Typography component="h1" fontWeight="xl">
              Feed
            </Typography>
          </Box>
          <Input
            size="sm"
            placeholder="Search anything…"
            startDecorator={<SearchRoundedIcon color="primary" />}
            endDecorator={
              <IconButton variant="outlined" size="sm" color="neutral">
                <Typography fontWeight="lg" fontSize="sm" textColor="text.tertiary">
                  /
                </Typography>
              </IconButton>
            }
            sx={{
              flexBasis: '500px',
              display: {
                xs: 'none',
                sm: 'flex',
              },
            }}
          />
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1.5 }}>
            <IconButton
              size="sm"
              variant="outlined"
              color="primary"
              sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
            >
              <SearchRoundedIcon />
            </IconButton>
            <IconButton
              size="sm"
              variant="outlined"
              color="primary"
              component="a"
              href="/blog"
            >
              <BookRoundedIcon />
            </IconButton>
            <Menu
              id="app-selector"
              control={
                <IconButton
                  size="sm"
                  variant="outlined"
                  color="primary"
                  aria-label="Apps"
                >
                  <GridViewRoundedIcon />
                </IconButton>
              }
              menus={[
                {
                  label: 'Feed',
                  active: true,
                  href: '/feed',
                },
                {
                  label: 'Team',
                  href: '/team',
                },
                {
                  label: 'Files',
                  href: '/files',
                },
              ]}
            />
            <ColorSchemeToggle />
          </Box>
        </Layout.Header>
        <Layout.SideNav>
          <Navigation />
        </Layout.SideNav>
        <Layout.Main>
          {posts.map((post) => <EmailContent posts={post} />)}
        </Layout.Main>
        <Layout.SidePane>
          <Box
            sx={{
              p: 2,
              mb: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              textColor="neutral.500"
              fontWeight={700}
              sx={{
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '.1rem',
              }}
            >
              Unread
            </Typography>
            <IconButton
              size="sm"
              variant="plain"
              color="primary"
              sx={{ '--IconButton-size': '24px' }}
              onClick={() => {
                console.log('UNREAD');
              }}
            >
              <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
            </IconButton>
          </Box>
          <Box sx={{ py: 10 }}>
            <Typography
              textColor="text.tertiary"
              level="body2"
              sx={{ textAlign: 'center' }}
            >
              You&apos;ve read all messages in your inbox.
            </Typography>
          </Box>
          <Box
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              textColor="neutral.500"
              fontWeight={700}
              sx={{
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '.1rem',
              }}
            >
              Everything else
            </Typography>
            <IconButton
              size="sm"
              variant="plain"
              color="primary"
              sx={{ '--IconButton-size': '24px' }}
            >
              <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
            </IconButton>
          </Box>
          <Mails />
        </Layout.SidePane>
      </Layout.Root>
    </CssVarsProvider>
  );
}
