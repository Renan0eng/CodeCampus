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
import DeleteIcon from '@mui/icons-material/Delete';

// custom
import emailTheme from '../../constants/theme';
import Menu from '../../Components/Menu';
import Layout from '../../Components/LayoutHome';
import Navigation from '../../Components/Navigation';
import { useNavigate } from 'react-router-dom';

// Firebase
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from '../../constants/firebase';

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

  const [produtos, setProdutos] = React.useState([]);

  const deleteProduto = async (id) => {
    try {
      await deleteDoc(doc(db, "assinaturas", id));
      const data = await getDocs(collection(db, "/assinaturas"));
      setProdutos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    catch (e) {
      console.error("Error removing document: ", e);
    }
  }

  React.useEffect(() => {
    const getProdutos = async () => {
      const data = await getDocs(collection(db, "/assinaturas"));
      setProdutos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getProdutos();

    const getAdmin = async () => {
      const data = await getDocs(collection(db, "admin/"));
      const admins = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const admin = admins[0]
      const user = JSON.parse(localStorage.getItem('user'))
      if (user.uid === admin.id) setAdmin(true)
    }
    getAdmin()

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
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" fontWeight="xl" minWidth={100}>
              Assinaturas
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
        <Layout.Main>

          <Box
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 'auto',
              width: '90%',
              borderRadius: '20px 0px 20px 0px',
              border: `5px solid ${theme.palette.background.surface}`,
              backgroundColor: theme.palette.background.backdrop,
              marginTop: '20px',
            })}
          >
            <Typography variant="h1" fontWeight="xl" sx={{
              mt: 2,
              mb: 2,
              fontSize: '85px',
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
              Assinaturas
            </Typography>
            <Typography variant="h1" fontWeight="xl" sx={{
              mt: 2,
              mb: 2,
              fontSize: '65px',
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
              Assinaturas
            </Typography>
            <Typography variant="h1" fontWeight="xl" sx={{
              mt: 2,
              mb: 2,
              fontSize: '55px',
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
              Assinaturas
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
            {produtos.map((produto) => (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '20px',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={(theme) => ({
                    borderRadius: '20px 0px 20px 0px',
                    border: `5px solid ${theme.palette.background.surface}`,
                    backgroundColor: theme.palette.background.surface,
                    width: { xs: '30vw', sm: '15vw', md: '125px' },
                    height: { xs: '30vw', sm: '15vw', md: '125px' },
                    boxShadow: '8px 8px 10px 0px rgba(0,0,0,0.75)',
                    '&:hover': {
                      boxShadow: '16px 16px 10px 0px rgba(0,0,0,0.75)',
                      transform: 'scale(1.8)',
                      transition: 'all 0.5s ease-in-out',
                    },
                    position: 'absolute',
                    zIndex: 1,
                    backgroundImage: 'url(' + produto.imagem + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  })}
                >
                </Box>
                <Box
                  sx={(theme) => {
                    return ({
                      display: 'flex',
                      flexDirection: 'column',
                      alignSelf: 'flex-end',
                      alignItems: 'center',
                      backdropFilter: 'blur(3px)',
                      borderRadius: '20px 0px 20px 0px',
                      border: `5px solid ${theme.palette.background.surface}`,
                      backgroundColor: theme.palette.background.backdrop,
                      width: { xs: '90vw', sm: '50vw', md: '432px' },
                      height: { xs: '80vw', sm: '40vw', md: '360px' },
                      boxShadow: '10px 10px 10px 0px rgba(0,0,0,0.75)',
                      '&:active': {
                        boxShadow: '20px 20px 10px 0px rgba(0,0,0,0.75)',
                        transform: 'scale(1.6)',
                        transition: 'all 0.3s ease-in-out',
                        paddingTop: '0px',
                        zIndex: 2,
                      },
                      margin: { sm: '8vw', md: '30px' },
                      marginTop: { xs: '15vw', sm: '7vw', md: '63px' },
                      paddingTop: { xs: '16vw', sm: '8vw', md: '63px' },
                      padding: "15px",
                      justifyContent: 'space-between',
                    })
                  }}
                >
                  {admin &&
                    <IconButton
                      sx={{
                        position: 'absolute',
                        zIndex: 2,
                        top: '0px',
                        right: '0px',
                        alignSelf: 'flex-end',
                        '&:hover': {
                          backgroundColor: 'transparent',
                        },
                      }}
                      onClick={() => {
                        deleteProduto(produto.id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>}
                  <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                    mt: 2,
                    color: theme.palette.text.primary,
                    fontSize: '20px',
                  })}>
                    {produto.nome}
                  </Typography>


                  <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                    color: theme.palette.text.primary,
                    fontSize: '15px',
                    maxHeight: '50%',
                    maxWidth: { xs: '55vw', sm: '25vw', md: '225px' },
                    overflow: 'auto',
                    '::-webkit-scrollbar': {
                      width: '0.4em',
                    },

                  })}>
                    {produto.descricao}
                  </Typography>

                  <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                    color: theme.palette.text.primary,
                    fontSize: '20px',
                  })}>
                    R$ {(produto.preco ? parseFloat(produto.preco) : 0).toFixed(2)}
                  </Typography>
                </Box>
              </Box>
            ))}
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
              <Typography
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
                  },
                  cursor: 'pointer',
                }}
                onClick={() => window.open('https://www.instagram.com/renan_nardii/', '_blank')}
              >
                Renan Nardi
              </Typography>
              e equipe Desprogramados
            </Typography>
          </Box>
        </Layout.Main>
      </Layout.Root>
    </CssVarsProvider >
  )

}
