import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import LoginIcon from '@mui/icons-material/Login';

import { getDocs, collection } from 'firebase/firestore';
import { db } from '../constants/firebase';

// Icons import
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import MenuIcon from '@mui/icons-material/Menu';
import ViewDayIcon from '@mui/icons-material/ViewDay';

// custom
import emailTheme from '../constants/theme';
import Menu from '../Components/Menu';
import Layout from '../Components/LayoutPost';
import Navigation from '../Components/Navigation';
import PostContent from '../Components/PostContent';
import { List } from '@mui/material';

import { useParams, useNavigate } from 'react-router-dom';

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

  const navegate = useNavigate();

  const admin = true

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [unreadMenu, setUnreadMenu] = React.useState(false);
  const [everythingMenu, setEverythingMenu] = React.useState(false);


  const { id } = useParams();

  const [post, setPost] = React.useState([]);


  React.useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts/"));
      const posts = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      const comments = await getDocs(collection(db, "comments/"));
      const commentsData = (comments.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      let commentsArray = [];

      commentsData.find((comment) => comment.postId === id) && commentsArray.push(commentsData.find((comment) => comment.postId === id));

      posts.find((post) => post.id === id) && setPost(posts.find((post) => post.id === id));

      setPost((prev) => ({ ...prev, comments: commentsArray }));

    }
    getPosts();
    getPosts();
  }, []);

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
              variant="outlined"
              size="sm"
              onClick={() => navegate("/")}
              sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
            >
              <ViewDayIcon />
            </IconButton>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 0.5 }} minWidth={100}>
              <Typography component="h1" fontWeight="xl"
                onClick={() => navegate('/')}
              >
                Feed
              </Typography>
              <Typography component="h1" fontWeight="xl" sx={{ color: '#888' }}>
                /
              </Typography>
              <Typography component="h1" fontWeight="xl">
                Post
              </Typography>
            </Box>
          </Box>
          <Input
            size="sm"
            placeholder="Search anything…"
            startDecorator={<SearchRoundedIcon color="primary" />}
            endDecorator={
              <IconButton variant="outlined" size="sm" color="neutral">
                /
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

            {admin &&
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
                  }, {
                    label: 'New Produto',
                    href: '/novosprodutos',
                  },
                  {
                    label: 'New',
                    href: '/newpost',
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
              />}
            <ColorSchemeToggle />
            {!localStorage.getItem('user') &&
              <IconButton
                size="sm"
                variant="solid"
                color="primary"
                sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
                onClick={() => {
                  navegate('/login')
                }}
              >
                <LoginIcon />
              </IconButton>}
            {!localStorage.getItem('user') &&
              <IconButton
                size="sm"
                variant="solid"
                sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
                onClick={() => {
                  navegate('/login')
                }}
              >
                <LoginIcon />
              </IconButton>}
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
            <PostContent posts={post} />
          </List>
        </Layout.Main>
      </Layout.Root>
    </CssVarsProvider >
  )

}
