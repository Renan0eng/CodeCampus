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
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

// custom
import emailTheme from '../../constants/theme';
import Menu from '../../Components/Menu';
import Layout from '../../Components/LayoutHome';
import Navigation from '../../Components/Navigation';
import { useNavigate, Link } from 'react-router-dom';
import { Card } from '@mui/joy';

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
              Produtos
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
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              margin: '10px',
            }}
          >
            <Typography variant="h2" fontWeight="xl" sx={(theme) => {
              console.log(theme.palette.mode);
              return ({
                mt: 2,
                color: theme.palette.text.primary,
                mb: 2,
                fontSize: '60px',
                display: { xs: 'none', sm: 'inline-flex' }
              })
            }}>
              Produtos
            </Typography>
            <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
              mt: 2,
              color: theme.palette.text.primary,
              mb: 2,
              fontSize: '50px',
              display: { sm: 'none' }
            })}>
              Produtos
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                alignItems: 'center',
              }}
            >
              <Box
                sx={(theme) => ({
                  borderRadius: '20px 0px 20px 0px',
                  border: `5px solid ${theme.palette.background.surface}`,
                  backgroundColor: theme.palette.background.surface,
                  width: '110px',
                  height: '110px',
                  boxShadow: '8px 8px 10px 0px rgba(0,0,0,0.75)',
                  '&:hover': {
                    boxShadow: '16px 16px 10px 0px rgba(0,0,0,0.75)',
                    transform: 'scale(1.8)',
                    transition: 'all 0.3s ease-in-out',
                  },
                  position: 'absolute',
                  zIndex: 1,

                })}
              >
                <img src="https://cdn.discordapp.com/attachments/966491148640211034/1086831999999815750/renan__owl_in_the_style_of_lisa_frank_blacklight_238d8933-ceef-4c9c-910a-a78231527f85.png" alt="Minha imagem"
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '20px 0px 20px 0px',
                    display: 'flex',
                    alignSelf: 'center',
                  }}
                />
              </Box>
              <Box
                sx={(theme) => {
                  console.log(theme)
                  return ({
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backdropFilter: 'blur(3px)',
                    borderRadius: '20px 0px 20px 0px',
                    border: `5px solid ${theme.palette.background.surface}`,
                    backgroundColor: theme.palette.background.backdrop,
                    width: '200px',
                    height: '260px',
                    boxShadow: '10px 10px 10px 0px rgba(0,0,0,0.75)',
                    '&:hover': {
                      boxShadow: '20px 20px 10px 0px rgba(0,0,0,0.75)',
                      transform: 'scale(1.6)',
                      transition: 'all 0.3s ease-in-out',
                      paddingTop: '0px',
                      zIndex: 2,
                    },
                    margin: '20px',
                    marginTop: '50px',
                    padding: '40px 10px 10px 10px',
                  })
                }}
              >
                <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  fontSize: '20px',
                })}>
                  Renan
                </Typography>

                <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  fontSize: '15px',
                })}>
                  Aqui vai uma breve descrição do produto que está sendo vendido
                </Typography>

                <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  fontSize: '20px',
                })}>
                  R$ 100,00
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                alignItems: 'center',
              }}
            >
              <Box
                sx={(theme) => ({
                  borderRadius: '20px 0px 20px 0px',
                  border: `5px solid ${theme.palette.background.surface}`,
                  backgroundColor: theme.palette.background.surface,
                  width: '110px',
                  height: '110px',
                  boxShadow: '8px 8px 10px 0px rgba(0,0,0,0.75)',
                  '&:hover': {
                    boxShadow: '16px 16px 10px 0px rgba(0,0,0,0.75)',
                    transform: 'scale(1.8)',
                    transition: 'all 0.3s ease-in-out',
                  },
                  position: 'absolute',
                  zIndex: 1,

                })}
              >
                <img src="https://cdn.discordapp.com/attachments/966491148640211034/1086831999999815750/renan__owl_in_the_style_of_lisa_frank_blacklight_238d8933-ceef-4c9c-910a-a78231527f85.png" alt="Minha imagem"
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '20px 0px 20px 0px',
                    display: 'flex',
                    alignSelf: 'center',
                  }}
                />
              </Box>
              <Box
                sx={(theme) => {
                  console.log(theme)
                  return ({
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backdropFilter: 'blur(3px)',
                    borderRadius: '20px 0px 20px 0px',
                    border: `5px solid ${theme.palette.background.surface}`,
                    backgroundColor: theme.palette.background.backdrop,
                    width: '200px',
                    height: '260px',
                    boxShadow: '10px 10px 10px 0px rgba(0,0,0,0.75)',
                    '&:hover': {
                      boxShadow: '20px 20px 10px 0px rgba(0,0,0,0.75)',
                      transform: 'scale(1.6)',
                      transition: 'all 0.3s ease-in-out',
                      paddingTop: '0px',
                      zIndex: 2,
                    },
                    margin: '20px',
                    marginTop: '50px',
                    padding: '40px 10px 10px 10px',
                  })
                }}
              >
                <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  fontSize: '20px',
                })}>
                  Renan
                </Typography>

                <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  fontSize: '15px',
                })}>
                  Aqui vai uma breve descrição do produto que está sendo vendido
                </Typography>

                <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  fontSize: '20px',
                })}>
                  R$ 100,00
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                alignItems: 'center',
              }}
            >
              <Box
                sx={(theme) => ({
                  borderRadius: '20px 0px 20px 0px',
                  border: `5px solid ${theme.palette.background.surface}`,
                  backgroundColor: theme.palette.background.surface,
                  width: '110px',
                  height: '110px',
                  boxShadow: '8px 8px 10px 0px rgba(0,0,0,0.75)',
                  '&:hover': {
                    boxShadow: '16px 16px 10px 0px rgba(0,0,0,0.75)',
                    transform: 'scale(1.8)',
                    transition: 'all 0.3s ease-in-out',
                  },
                  position: 'absolute',
                  zIndex: 1,

                })}
              >
                <img src="https://cdn.discordapp.com/attachments/966491148640211034/1086831999999815750/renan__owl_in_the_style_of_lisa_frank_blacklight_238d8933-ceef-4c9c-910a-a78231527f85.png" alt="Minha imagem"
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '20px 0px 20px 0px',
                    display: 'flex',
                    alignSelf: 'center',
                  }}
                />
              </Box>
              <Box
                sx={(theme) => {
                  console.log(theme)
                  return ({
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backdropFilter: 'blur(3px)',
                    borderRadius: '20px 0px 20px 0px',
                    border: `5px solid ${theme.palette.background.surface}`,
                    backgroundColor: theme.palette.background.backdrop,
                    width: '200px',
                    height: '260px',
                    boxShadow: '10px 10px 10px 0px rgba(0,0,0,0.75)',
                    '&:hover': {
                      boxShadow: '20px 20px 10px 0px rgba(0,0,0,0.75)',
                      transform: 'scale(1.6)',
                      transition: 'all 0.3s ease-in-out',
                      paddingTop: '0px',
                      zIndex: 2,
                    },
                    margin: '20px',
                    marginTop: '50px',
                    padding: '40px 10px 10px 10px',
                  })
                }}
              >
                <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  fontSize: '20px',
                })}>
                  Renan
                </Typography>

                <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  fontSize: '15px',
                })}>
                  Aqui vai uma breve descrição do produto que está sendo vendido
                </Typography>

                <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  fontSize: '20px',
                })}>
                  R$ 100,00
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                alignItems: 'center',
              }}
            >
              <Box
                sx={(theme) => ({
                  borderRadius: '20px 0px 20px 0px',
                  border: `5px solid ${theme.palette.background.surface}`,
                  backgroundColor: theme.palette.background.surface,
                  width: '110px',
                  height: '110px',
                  boxShadow: '8px 8px 10px 0px rgba(0,0,0,0.75)',
                  '&:hover': {
                    boxShadow: '16px 16px 10px 0px rgba(0,0,0,0.75)',
                    transform: 'scale(1.8)',
                    transition: 'all 0.3s ease-in-out',
                  },
                  position: 'absolute',
                  zIndex: 1,

                })}
              >
                <img src="https://cdn.discordapp.com/attachments/966491148640211034/1086831999999815750/renan__owl_in_the_style_of_lisa_frank_blacklight_238d8933-ceef-4c9c-910a-a78231527f85.png" alt="Minha imagem"
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '20px 0px 20px 0px',
                    display: 'flex',
                    alignSelf: 'center',
                  }}
                />
              </Box>
              <Box
                sx={(theme) => {
                  console.log(theme)
                  return ({
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backdropFilter: 'blur(3px)',
                    borderRadius: '20px 0px 20px 0px',
                    border: `5px solid ${theme.palette.background.surface}`,
                    backgroundColor: theme.palette.background.backdrop,
                    width: '200px',
                    height: '260px',
                    boxShadow: '10px 10px 10px 0px rgba(0,0,0,0.75)',
                    '&:hover': {
                      boxShadow: '20px 20px 10px 0px rgba(0,0,0,0.75)',
                      transform: 'scale(1.6)',
                      transition: 'all 0.3s ease-in-out',
                      paddingTop: '0px',
                      zIndex: 2,
                    },
                    margin: '20px',
                    marginTop: '50px',
                    padding: '40px 10px 10px 10px',
                  })
                }}
              >
                <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  fontSize: '20px',
                })}>
                  Renan
                </Typography>

                <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  fontSize: '15px',
                })}>
                  Aqui vai uma breve descrição do produto que está sendo vendido
                </Typography>

                <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  fontSize: '20px',
                })}>
                  R$ 100,00
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                alignItems: 'center',
              }}
            >
              <Box
                sx={(theme) => ({
                  borderRadius: '20px 0px 20px 0px',
                  border: `5px solid ${theme.palette.background.surface}`,
                  backgroundColor: theme.palette.background.surface,
                  width: '110px',
                  height: '110px',
                  boxShadow: '8px 8px 10px 0px rgba(0,0,0,0.75)',
                  '&:hover': {
                    boxShadow: '16px 16px 10px 0px rgba(0,0,0,0.75)',
                    transform: 'scale(1.8)',
                    transition: 'all 0.3s ease-in-out',
                  },
                  position: 'absolute',
                  zIndex: 1,

                })}
              >
                <img src="https://cdn.discordapp.com/attachments/966491148640211034/1086831999999815750/renan__owl_in_the_style_of_lisa_frank_blacklight_238d8933-ceef-4c9c-910a-a78231527f85.png" alt="Minha imagem"
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '20px 0px 20px 0px',
                    display: 'flex',
                    alignSelf: 'center',
                  }}
                />
              </Box>
              <Box
                sx={(theme) => {
                  console.log(theme)
                  return ({
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backdropFilter: 'blur(3px)',
                    borderRadius: '20px 0px 20px 0px',
                    border: `5px solid ${theme.palette.background.surface}`,
                    backgroundColor: theme.palette.background.backdrop,
                    width: '200px',
                    height: '260px',
                    boxShadow: '10px 10px 10px 0px rgba(0,0,0,0.75)',
                    '&:hover': {
                      boxShadow: '20px 20px 10px 0px rgba(0,0,0,0.75)',
                      transform: 'scale(1.6)',
                      transition: 'all 0.3s ease-in-out',
                      paddingTop: '0px',
                      zIndex: 2,
                    },
                    margin: '20px',
                    marginTop: '50px',
                    padding: '40px 10px 10px 10px',
                  })
                }}
              >
                <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  fontSize: '20px',
                })}>
                  Renan
                </Typography>

                <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  fontSize: '15px',
                })}>
                  Aqui vai uma breve descrição do produto que está sendo vendido
                </Typography>

                <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  fontSize: '20px',
                })}>
                  R$ 100,00
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                alignItems: 'center',
              }}
            >
              <Box
                sx={(theme) => ({
                  borderRadius: '20px 0px 20px 0px',
                  border: `5px solid ${theme.palette.background.surface}`,
                  backgroundColor: theme.palette.background.surface,
                  width: '110px',
                  height: '110px',
                  boxShadow: '8px 8px 10px 0px rgba(0,0,0,0.75)',
                  '&:hover': {
                    boxShadow: '16px 16px 10px 0px rgba(0,0,0,0.75)',
                    transform: 'scale(1.8)',
                    transition: 'all 0.3s ease-in-out',
                  },
                  position: 'absolute',
                  zIndex: 1,

                })}
              >
                <img src="https://cdn.discordapp.com/attachments/966491148640211034/1086831999999815750/renan__owl_in_the_style_of_lisa_frank_blacklight_238d8933-ceef-4c9c-910a-a78231527f85.png" alt="Minha imagem"
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '20px 0px 20px 0px',
                    display: 'flex',
                    alignSelf: 'center',
                  }}
                />
              </Box>
              <Box
                sx={(theme) => {
                  console.log(theme)
                  return ({
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backdropFilter: 'blur(3px)',
                    borderRadius: '20px 0px 20px 0px',
                    border: `5px solid ${theme.palette.background.surface}`,
                    backgroundColor: theme.palette.background.backdrop,
                    width: '200px',
                    height: '260px',
                    boxShadow: '10px 10px 10px 0px rgba(0,0,0,0.75)',
                    '&:hover': {
                      boxShadow: '20px 20px 10px 0px rgba(0,0,0,0.75)',
                      transform: 'scale(1.6)',
                      transition: 'all 0.3s ease-in-out',
                      paddingTop: '0px',
                      zIndex: 2,
                    },
                    margin: '20px',
                    marginTop: '50px',
                    padding: '40px 10px 10px 10px',
                  })
                }}
              >
                <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  fontSize: '20px',
                })}>
                  Renan
                </Typography>

                <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  fontSize: '15px',
                })}>
                  Aqui vai uma breve descrição do produto que está sendo vendido
                </Typography>

                <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  fontSize: '20px',
                })}>
                  R$ 100,00
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                alignItems: 'center',
              }}
            >
              <Box
                sx={(theme) => ({
                  borderRadius: '20px 0px 20px 0px',
                  border: `5px solid ${theme.palette.background.surface}`,
                  backgroundColor: theme.palette.background.surface,
                  width: '110px',
                  height: '110px',
                  boxShadow: '8px 8px 10px 0px rgba(0,0,0,0.75)',
                  '&:hover': {
                    boxShadow: '16px 16px 10px 0px rgba(0,0,0,0.75)',
                    transform: 'scale(1.8)',
                    transition: 'all 0.3s ease-in-out',
                  },
                  position: 'absolute',
                  zIndex: 1,

                })}
              >
                <img src="https://cdn.discordapp.com/attachments/966491148640211034/1086831999999815750/renan__owl_in_the_style_of_lisa_frank_blacklight_238d8933-ceef-4c9c-910a-a78231527f85.png" alt="Minha imagem"
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '20px 0px 20px 0px',
                    display: 'flex',
                    alignSelf: 'center',
                  }}
                />
              </Box>
              <Box
                sx={(theme) => {
                  console.log(theme)
                  return ({
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backdropFilter: 'blur(3px)',
                    borderRadius: '20px 0px 20px 0px',
                    border: `5px solid ${theme.palette.background.surface}`,
                    backgroundColor: theme.palette.background.backdrop,
                    width: '200px',
                    height: '260px',
                    boxShadow: '10px 10px 10px 0px rgba(0,0,0,0.75)',
                    '&:hover': {
                      boxShadow: '20px 20px 10px 0px rgba(0,0,0,0.75)',
                      transform: 'scale(1.6)',
                      transition: 'all 0.3s ease-in-out',
                      paddingTop: '0px',
                      zIndex: 2,
                    },
                    margin: '20px',
                    marginTop: '50px',
                    padding: '40px 10px 10px 10px',
                  })
                }}
              >
                <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  fontSize: '20px',
                })}>
                  Renan
                </Typography>

                <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  fontSize: '15px',
                })}>
                  Aqui vai uma breve descrição do produto que está sendo vendido
                </Typography>

                <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  fontSize: '20px',
                })}>
                  R$ 100,00
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={(theme) => ({
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.palette.text.primary,
            py: 3,
            mt: 2,
          })}>
            <Typography variant="h3" fontWeight="xl" sx={(theme) => ({ mt: 2, color: theme.palette.text.primary, mb: 0.5 })}>
              Desprogramados © 2021
            </Typography>
            <Typography variant="h3" fontWeight="xl" sx={(theme) => ({ color: theme.palette.text.primary, mb: 2, ml: 1 })}>
              Feito com amor por
              <Link
                style={{
                  paddingLeft: '5px',
                  paddingRight: '5px',
                  background: 'linear-gradient(to right, #f12711, #f5af19, #f12711, #f5af19)',
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
                }}
                target="_blank"
                href="https://www.instagram.com/renan_nardii/"
              >
                Renan Nardi
              </Link>
              e equipe Desprogramados
            </Typography>
          </Box>
        </Layout.Main>
      </Layout.Root>
    </CssVarsProvider >
  )

}
