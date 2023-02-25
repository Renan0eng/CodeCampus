import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';

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
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';

// custom
import emailTheme from '../constants/theme';
import Menu from '../Components/Menu';
import Layout from '../Components/Layout';
import Navigation from '../Components/Navigation';
import Mails from '../Components/Mails';
import FeedContent from '../Components/FeedContent';
import { List } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

// import { Container } from './styles';

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

function Components() {

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const [admin, setAdmin] = React.useState(false);

  const navegate = useNavigate();

  React.useEffect(() => {

    const getAdmin = async () => {
      const data = await getDocs(collection(db, "admin/"));
      const admins = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const admin = admins[0]
      const user = JSON.parse(sessionStorage.getItem('user'))
      if (user.uid === admin.id) setAdmin(true)
    }
    getAdmin()

  }, []);

  return (
    <>
      
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
                href: '/',
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
        {!sessionStorage.getItem('user') &&
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
        {!sessionStorage.getItem('user') &&
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
    </>
  );
}

export default Components;