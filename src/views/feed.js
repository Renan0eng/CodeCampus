import * as React from 'react';
import { AuthContext } from '../contexts/authContext';
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
import ViewDayIcon from '@mui/icons-material/ViewDay';

// custom
import emailTheme from '../constants/theme';
import Menu from '../Components/Menu';
import Layout from '../Components/Layout';
import Navigation from '../Components/Navigation';
import Mails from '../Components/Mails';
import FeedContent from '../Components/FeedContent';
import { json } from 'react-router-dom';
import { List } from '@mui/material';

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

export default function FeedExample() {

  const { user } = React.useContext(AuthContext);

  const [userData, setUserData] = React.useState(user);

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [unreadMenu, setUnreadMenu] = React.useState(false);
  const [everythingMenu, setEverythingMenu] = React.useState(false);

  const [posts, setPosts] = React.useState([{
    relevance: '146',
    authorName: 'Alex Jonnold',
    authorAvatar: 'https://renan0eng.github.io/Site-Analise-De-Temperatura-humidade/img/Renan.jpeg',
    authorAvatarSet: 'https://renan0eng.github.io/Site-Analise-De-Temperatura-humidade/img/Renan.jpeg',
    date: '21 Oct 2022',
    title: 'Topico principal da duvida',
    desc: 'Aqui será o tópico detalhado da dúvida, onde será possível a implementação de código, um texto complementar, vídeos incorporados do YouTube e links externos. Lembrete: Ainda existes algumas alterações pendentes no campo da novo post.',
    tags: ['yosemite', 'trip', 'weekend'],
    images: [{ image: 'https://renan0eng.github.io/Site-Analise-De-Temperatura-humidade/img/Renan.jpeg', imageLink: 'https://renan0eng.github.io/Site-Analise-De-Temperatura-humidade/img/Renan.jpeg' },
    { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160', imageLink: 'https://domains.google.com/registrar/' },
    { image: 'https://matheuspivato.com/assets/img/profile-img.jpeg', imageLink: 'https://matheuspivato.com/assets/img/profile-img.jpeg' }],
    contents: [{
      authorId: '1',
      authorAvatar: 'https://matheuspivato.com/assets/img/profile-img.jpeg',
      authorAvatarSet: 'https://matheuspivato.com/assets/img/profile-img.jpeg',
      authorName: 'Matheus Pivato',
      desc: 'O comentario da dúvida',
      date: '21 Oct 2022',
      images: [{ image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' }],
    }, {
      authorId: '1',
      authorAvatar: 'https://renan0eng.github.io/Site-Analise-De-Temperatura-humidade/img/Renan.jpeg',
      authorAvatarSet: 'https://renan0eng.github.io/Site-Analise-De-Temperatura-humidade/img/Renan.jpeg',
      authorName: 'Renan Nardi',
      desc: 'resposta do comentario',
      date: '21 Oct 2025',
      images: [{ image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' }],
    }
    ]
  }, {
    relevance: '15',
    authorName: 'Alex Jonnold',
    authorAvatar: 'https://renan0eng.github.io/Site-Analise-De-Temperatura-humidade/img/Renan.jpeg',
    authorAvatarSet: 'https://renan0eng.github.io/Site-Analise-De-Temperatura-humidade/img/Renan.jpeg',
    date: '21 Oct 2022',
    title: 'Topico principal da duvida',
    desc: 'Aqui será o tópico detalhado da dúvida, onde será possível a implementação de código, um texto complementar, vídeos incorporados do YouTube e links externos. Lembrete: Ainda existes algumas alterações pendentes no campo da novo post.',
    tags: ['yosemite', 'trip', 'weekend'],
    images: [{ image: 'https://renan0eng.github.io/Site-Analise-De-Temperatura-humidade/img/Renan.jpeg', imageLink: 'https://renan0eng.github.io/Site-Analise-De-Temperatura-humidade/img/Renan.jpeg' },
    { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160', imageLink: 'https://domains.google.com/registrar/' },
    { image: 'https://matheuspivato.com/assets/img/profile-img.jpeg', imageLink: 'https://matheuspivato.com/assets/img/profile-img.jpeg' }],
    contents: [{
      authorId: '1',
      authorAvatar: 'https://matheuspivato.com/assets/img/profile-img.jpeg',
      authorAvatarSet: 'https://matheuspivato.com/assets/img/profile-img.jpeg',
      authorName: 'Matheus Pivato',
      desc: 'O comentario da dúvida',
      date: '21 Oct 2022',
      images: [{ image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' }],
    }, {
      authorId: '1',
      authorAvatar: 'https://renan0eng.github.io/Site-Analise-De-Temperatura-humidade/img/Renan.jpeg',
      authorAvatarSet: 'https://renan0eng.github.io/Site-Analise-De-Temperatura-humidade/img/Renan.jpeg',
      authorName: 'Renan Nardi',
      desc: 'resposta do comentario',
      date: '21 Oct 2025',
      images: [{ image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' }],
    }
    ]
  }, {
    relevance: '12',
    authorName: 'Alex Jonnold',
    authorAvatar: 'https://renan0eng.github.io/Site-Analise-De-Temperatura-humidade/img/Renan.jpeg',
    authorAvatarSet: 'https://renan0eng.github.io/Site-Analise-De-Temperatura-humidade/img/Renan.jpeg',
    date: '21 Oct 2022',
    title: 'Topico principal da duvida',
    desc: 'Aqui será o tópico detalhado da dúvida, onde será possível a implementação de código, um texto complementar, vídeos incorporados do YouTube e links externos. Lembrete: Ainda existes algumas alterações pendentes no campo da novo post.',
    tags: ['yosemite', 'trip', 'weekend'],
    images: [{ image: 'https://renan0eng.github.io/Site-Analise-De-Temperatura-humidade/img/Renan.jpeg', imageLink: 'https://renan0eng.github.io/Site-Analise-De-Temperatura-humidade/img/Renan.jpeg' },
    { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160', imageLink: 'https://domains.google.com/registrar/' },
    { image: 'https://matheuspivato.com/assets/img/profile-img.jpeg', imageLink: 'https://matheuspivato.com/assets/img/profile-img.jpeg' }],
    contents: [{
      authorId: '1',
      authorAvatar: 'https://matheuspivato.com/assets/img/profile-img.jpeg',
      authorAvatarSet: 'https://matheuspivato.com/assets/img/profile-img.jpeg',
      authorName: 'Matheus Pivato',
      desc: 'O comentario da dúvida',
      date: '21 Oct 2022',
      images: [{ image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' }],
    }, {
      authorId: '1',
      authorAvatar: 'https://renan0eng.github.io/Site-Analise-De-Temperatura-humidade/img/Renan.jpeg',
      authorAvatarSet: 'https://renan0eng.github.io/Site-Analise-De-Temperatura-humidade/img/Renan.jpeg',
      authorName: 'Renan Nardi',
      desc: 'resposta do comentario',
      date: '21 Oct 2025',
      images: [{ image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' }],
    }
    ]
  }, {
    relevance: '3',
    authorName: 'Alex Jonnold',
    authorAvatar: 'https://renan0eng.github.io/Site-Analise-De-Temperatura-humidade/img/Renan.jpeg',
    authorAvatarSet: 'https://renan0eng.github.io/Site-Analise-De-Temperatura-humidade/img/Renan.jpeg',
    date: '21 Oct 2022',
    title: 'Topico principal da duvida',
    desc: 'Aqui será o tópico detalhado da dúvida, onde será possível a implementação de código, um texto complementar, vídeos incorporados do YouTube e links externos. Lembrete: Ainda existes algumas alterações pendentes no campo da novo post.',
    tags: ['yosemite', 'trip', 'weekend'],
    images: [{ image: 'https://renan0eng.github.io/Site-Analise-De-Temperatura-humidade/img/Renan.jpeg', imageLink: 'https://renan0eng.github.io/Site-Analise-De-Temperatura-humidade/img/Renan.jpeg' },
    { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160', imageLink: 'https://domains.google.com/registrar/' },
    { image: 'https://matheuspivato.com/assets/img/profile-img.jpeg', imageLink: 'https://matheuspivato.com/assets/img/profile-img.jpeg' }],
    contents: [{
      authorId: '1',
      authorAvatar: 'https://matheuspivato.com/assets/img/profile-img.jpeg',
      authorAvatarSet: 'https://matheuspivato.com/assets/img/profile-img.jpeg',
      authorName: 'Matheus Pivato',
      desc: 'O comentario da dúvida',
      date: '21 Oct 2022',
      images: [{ image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' }],
    }, {
      authorId: '1',
      authorAvatar: 'https://renan0eng.github.io/Site-Analise-De-Temperatura-humidade/img/Renan.jpeg',
      authorAvatarSet: 'https://renan0eng.github.io/Site-Analise-De-Temperatura-humidade/img/Renan.jpeg',
      authorName: 'Renan Nardi',
      desc: 'resposta do comentario',
      date: '21 Oct 2025',
      images: [{ image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160', imageLink: 'https://domains.google.com/registrar/' },
      { image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80', imageLink: 'https://domains.google.com/registrar/' }],
    }
    ]
  },
  ]);

  React.useEffect(() => {
    console.log("User:", userData);
  }, [userData]);

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
              height: '100%',
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
              <ViewDayIcon />
            </IconButton>
            <Typography component="h1" fontWeight="xl" minWidth={100}>
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
                  label: 'New',
                  href: '/newfeed',
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
          <List
            sx={{
              overflow: 'auto',
              maxHeight: 'calc(100vh - 87px)',
              '::-webkit-scrollbar': {
                width: '4px',
              },
              p: 0,
            }}
          >
            {posts.map((post) => <FeedContent posts={post} />)}
          </List>
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
                setUnreadMenu(!unreadMenu)
              }}
            >
              <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
            </IconButton>
          </Box>
          {unreadMenu && (
            <Box sx={{ py: 10 }}>
              <Typography
                textColor="text.tertiary"
                level="body2"
                sx={{ textAlign: 'center' }}
              >
                You&apos;ve read all messages in your inbox.
              </Typography>
            </Box>)}
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
              onClick={() => {
                setEverythingMenu(!everythingMenu)
              }}
            >
              <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
            </IconButton>
          </Box>
          {everythingMenu && (
            <Mails />
          )}
        </Layout.SidePane>
      </Layout.Root>
    </CssVarsProvider >
  );
}
