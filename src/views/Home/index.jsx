import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';

// Icons import
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

// custom
import emailTheme from '../../constants/theme';
import Menu from '../../Components/Menu';
import Layout from '../../Components/LayoutHome';
import Navigation from '../../Components/Navigation';
import { useNavigate, Link } from 'react-router-dom';

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

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [unreadMenu, setUnreadMenu] = React.useState(false);
  const [everythingMenu, setEverythingMenu] = React.useState(false);

  const [admin, setAdmin] = React.useState(false);

  const [pagina, setPagina] = React.useState(0);

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
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" fontWeight="xl" minWidth={100}>
              Home
            </Typography>
          </Box>
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
        </Layout.Header>
        <Layout.Main>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              overflow: 'auto',
              width: '100%',
              height: '100%',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={(theme) => {
                console.log(theme)
                return ({
                  display: 'flex',
                  flexDirection: 'column',
                  width: '70%',
                  minWidth: '300px',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '10px',
                  border: `5px solid ${theme.palette.background.surface}`,
                  backgroundColor: theme.palette.background.backdrop,
                  padding: '20px',

                })
              }}
            >

              {pagina == 0 && <><Typography variant="h1" fontWeight="xl" sx={{
                mt: 2,
                mb: 2,
                fontSize: '65px',
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'inline-flex',
                },
                background: 'linear-gradient(to right,#00ffff,#ff00ff,#00ffff, #ff00ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '300%',
                animation: 'move-gradiente 2s linear infinite',
                '@keyframes move-gradiente': {
                  '0%': {
                    backgroundPosition: '0',
                  },
                  '100%': {
                    backgroundPosition: '100%',
                  }
                }
              }}>
                Desprogramados
              </Typography>
                <Typography variant="h1" fontWeight="xl" sx={{
                  mt: 2,
                  mb: 2,
                  fontSize: '45px',
                  display: {
                    xs: 'none',
                    sm: 'inline-flex',
                    md: 'none',
                  },
                  background: 'linear-gradient(to right,#00ffff,#ff00ff,#00ffff, #ff00ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundSize: '300%',
                  animation: 'move-gradiente 2s linear infinite',
                  '@keyframes move-gradiente': {
                    '0%': {
                      backgroundPosition: '0',
                    },
                    '100%': {
                      backgroundPosition: '100%',
                    }
                  }
                }}>
                  Desprogramados
                </Typography>

                <Typography variant="h1" fontWeight="xl" sx={{
                  mt: 2,
                  mb: 2,
                  fontSize: '35px',
                  display: { sm: 'none' },
                  background: 'linear-gradient(to right,#00ffff,#ff00ff,#00ffff, #ff00ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundSize: '300%',
                  animation: 'move-gradiente 2s linear infinite',
                  '@keyframes move-gradiente': {
                    '0%': {
                      backgroundPosition: '0',
                    },
                    '100%': {
                      backgroundPosition: '100%',
                    }
                  }
                }}>
                  Desprogramados
                </Typography>

                <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  mb: 2,
                  fontSize: '40px',
                  display: { xs: 'none', sm: 'inline-flex' }
                })}>
                  Olá e bem-vindo ao site da atlética Desprogramados!
                </Typography>
                <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  mb: 2,
                  fontSize: '30px',
                  display: { sm: 'none' }
                })}>
                  Olá e bem-vindo ao site da atlética Desprogramados!
                </Typography>
                <Typography variant="h3" fontWeight="xl" sx={(theme) => ({ mt: 2, color: theme.palette.text.primary, mb: 2 })}>
                  Aqui você pode encontrar informações sobre a atlética, como nossos projetos, eventos e muito mais.
                </Typography>
                <Typography variant="h3" fontWeight="xl" sx={(theme) => ({ mt: 2, color: theme.palette.text.primary, mb: 2 })}>
                  Nós somos um grupo de alunos da faculdade UniFatecie, organizados pelos estudantes de engenharia de software, e estamos muito animados por você estar aqui.
                </Typography>
                <Typography variant="h3" fontWeight="xl" sx={(theme) => ({ mt: 2, color: theme.palette.text.primary, mb: 2 })}>
                  Se você é um aluno da faculdade, pode se cadastrar no site e participar de nossos projetos, ganhar nossos produtos, participar de nossos eventos e muito mais.
                </Typography>
                <Typography variant="h3" fontWeight="xl" sx={(theme) => ({ mt: 2, color: theme.palette.text.primary, mb: 2 })}>
                  Se você é um professor e tem interesse em nossos projetos, pode entrar em contato conosco e nós podemos conversar sobre como podemos ajudar.
                </Typography></>}
              {pagina == 1 && <>
                <Typography variant="h1" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  mb: 2,
                  fontSize: '40px',
                  display: { xs: 'none', sm: 'inline-flex' }
                })}>
                  Projetos
                </Typography>
                <Typography variant="h1" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  mb: 2,
                  fontSize: '30px',
                  display: { sm: 'none' }
                })}>
                  Projetos
                </Typography>
                <Typography variant="h3" fontWeight="xl" sx={(theme) => ({ mt: 2, color: theme.palette.text.primary, mb: 2 })}>
                  Nós temos vários projetos que você pode participar, como o Desprogramados Jr, o Desprogramados Games e o Desprogramados Dev.
                </Typography>
              </>}
              {pagina == 2 && <>
                <Typography variant="h1" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  mb: 2,
                  fontSize: '35px',
                  display: { xs: 'none', sm: 'inline-flex' }
                })}>
                  Desprogramados Jr
                </Typography>
                <Typography variant="h1" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  mb: 2,
                  fontSize: '25px',
                  display: { sm: 'none' }
                })}>
                  Desprogramados Jr
                </Typography>
                <Typography variant="h3" fontWeight="xl" sx={(theme) => ({ mt: 2, color: theme.palette.text.primary, mb: 2 })}>
                  O Desprogramados Jr é um projeto de extensão que nossos assinantes terão acesso exclusivo, onde você pode aprender sobre desenvolvimento de software, e terá a oportunidade de participar de eventos e warkshops.
                </Typography>
              </>}
              {pagina == 3 && <>
                <Typography variant="h1" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  mb: 2,
                  fontSize: '35px',
                  display: { xs: 'none', sm: 'inline-flex' }
                })}>
                  Desprogramados Games
                </Typography>
                <Typography variant="h1" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  mb: 2,
                  fontSize: '25px',
                  display: { sm: 'none' }
                })}>
                  Desprogramados Games
                </Typography>
                <Typography variant="h3" fontWeight="xl" sx={(theme) => ({ mt: 2, color: theme.palette.text.primary, mb: 2 })}>
                  O Desprogramados Games é um projeto de extensão que nossos assinantes terão acesso exclusivo, onde será organizado um campeonato de jogos online, onde você poderá participar e ganhar prêmios.
                </Typography>
              </>}
              {pagina == 4 && <>
                <Typography variant="h1" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  mb: 2,
                  fontSize: '35px',
                  display: { xs: 'none', sm: 'inline-flex' }
                })}>
                  Desprogramados Dev
                </Typography>
                <Typography variant="h1" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  mb: 2,
                  fontSize: '25px',
                  display: { sm: 'none' }
                })}>
                  Desprogramados Dev
                </Typography>
                <Typography variant="h3" fontWeight="xl" sx={(theme) => ({ mt: 2, color: theme.palette.text.primary, mb: 2 })}>
                  O Desprogramados Dev é um projeto de extensão da , que tem como objetivo ajudar os alunos a produzir um produto de software para o mercado.
                </Typography>
              </>}
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <IconButton
                  size="sm"
                  variant="outlined"
                  color="primary"
                  sx={{ m: 2 }}
                  onClick={() => {
                    if (pagina > 0)
                      setPagina(pagina - 1)

                  }}
                >
                  <ArrowBackOutlinedIcon />
                </IconButton>
                <IconButton
                  size="sm"
                  variant="outlined"
                  color="primary"
                  sx={{ m: 2 }}
                  onClick={() => {
                    if (pagina < 4)
                      setPagina(pagina + 1)
                  }}
                >
                  <ArrowForwardOutlinedIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Layout.Main>
      </Layout.Root>
    </CssVarsProvider >
  )

}
