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
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// custom
import emailTheme from '../../../constants/theme';
import Menu from '../../../Components/Menu';
import Layout from '../../../Components/LayoutHome';
import Navigation from '../../../Components/Navigation';
import { useNavigate } from 'react-router-dom';
import { Input, Textarea } from '@mui/joy';

// firebase
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../constants/firebase';
import { ShoppingCart } from '@mui/icons-material';

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

  const [admin, setAdmin] = React.useState(false);

  const [preco, setPreco] = React.useState('');

  const [inscricao, setInscricao] = React.useState('');

  const [nome, setNome] = React.useState('');

  const [descricao, setDescricao] = React.useState('');

  const [descricoes, setDescricoes] = React.useState([]);

  const [imagem, setImagem] = React.useState('');

  const handlerDescricao = () => {
    const copy = descricoes
    copy.push(descricao)
    setDescricoes(copy)
    setDescricao('')

  }

  const setProduto = () => {
    if (!nome || !preco || !descricoes || !imagem || !inscricao) {
      alert('Preencha todos os campos')
      return
    }

    try {
      const docRef = addDoc(collection(db, "assinaturas"), {
        nome: nome,
        preco: preco,
        inscricao: inscricao,
        descricoes: descricoes,
        imagem: imagem,
        user: localStorage.getItem('user'),
      });
      navegate('/assinaturas')
      return docRef.id;
    } catch (e) {
      console.log("Error adding document: ", e);
    }
  }

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
              Novas Assinaturas
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
              minWidth: '450px',
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
              Nova Assinatura
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
              Nova Assinatura
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
              Nova Assinatura
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
                  position: 'absolute',
                  zIndex: 1,
                  backgroundImage: 'url(https://cdn.discordapp.com/attachments/966491148640211034/1086831999999815750/renan__owl_in_the_style_of_lisa_frank_blacklight_238d8933-ceef-4c9c-910a-a78231527f85.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                })}
              >
                <Box
                  sx={(theme) => ({
                    width: '100%',
                    height: '100%',
                    borderRadius: '15px 0px 15px 0px',
                    backdropFilter: 'blur(3px)',
                    backgroundColor: theme.palette.background.backdrop,
                  })}
                >
                  <Textarea
                    sx={{
                      fontSize: '16px',
                      width: '100%',
                      textAlign: 'center',
                      height: '100%',
                      wordWrap: 'break-word',
                      backgroundColor: 'transparent',
                      borderRadius: '15px 0px 15px 0px',
                    }}
                    type="text"
                    placeholder="Imagem URL"
                    value={imagem}
                    onChange={(e) => {
                      e.preventDefault()
                      setImagem(e.target.value)
                    }}
                  />
                </Box>
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
                    marginTop: { xs: '15vw', sm: '7vw', md: '63px' },
                    paddingTop: { xs: '16vw', sm: '8vw', md: '63px' },
                    padding: '15px',
                    marginLeft: { xs: 0, sm: '8vw', md: '30px' },
                    marginRight: { xs: 0, sm: '8vw', md: '30px' },
                    justifyContent: 'space-between',
                  })
                }}
              >
                <Input
                  sx={{
                    fontSize: '16px',
                    width: '90%',
                    textAlign: 'center',
                  }}
                  type="text"
                  placeholder="Nome"
                  value={nome}
                  onChange={(e) => {
                    e.preventDefault()
                    setNome(e.target.value)
                  }}
                />

                <Input
                  sx={{
                    fontSize: "16px",
                    height: "20%",
                    width: "90%",
                    wordWrap: "break-word",
                  }}
                  type="text"
                  placeholder="Descrição"
                  value={descricao}
                  onChange={(e) => {
                    e.preventDefault()
                    setDescricao(e.target.value)
                  }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '90%',
                    height: '20%',
                  }}
                >
                  <IconButton
                    sx={{
                      width: { xs: '10vw', sm: '5vw', md: '50px' },
                      height: { xs: '10vw', sm: '5vw', md: '50px' },
                    }}
                    onClick={() => {
                      handlerDescricao()
                    }}
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                </Box>
                <Input
                  sx={{
                    width: { xs: '60vw', sm: '30vw', md: '250px' },
                    height: { xs: '10vw', sm: '5vw', md: '50px' },
                    fontSize: '16px',
                    width: '50%',
                  }}
                  type="number"
                  placeholder="Inscrição"
                  value={inscricao}
                  onChange={(e) => {
                    e.preventDefault()
                    if (e.target.value >= 0) {
                      setInscricao(e.target.value)
                    }
                  }}
                />
                <Input
                  sx={{
                    width: { xs: '60vw', sm: '30vw', md: '250px' },
                    height: { xs: '10vw', sm: '5vw', md: '50px' },
                    fontSize: '16px',
                    width: '50%',
                  }}
                  type="number"
                  placeholder="Preço"
                  value={preco}
                  onChange={(e) => {
                    e.preventDefault()
                    if (e.target.value >= 0) {
                      setPreco(e.target.value)
                    }
                  }}
                />
              </Box>
            </Box>

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
                  backgroundImage: `url(${imagem ? imagem : 'https://cdn.discordapp.com/attachments/966491148640211034/1086831999999815750/renan__owl_in_the_style_of_lisa_frank_blacklight_238d8933-ceef-4c9c-910a-a78231527f85.png'})`,
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
                    marginTop: { xs: '15vw', sm: '7vw', md: '63px' },
                    paddingTop: { xs: '16vw', sm: '8vw', md: '63px' },
                    padding: '15px',
                    marginLeft: { xs: 0, sm: '8vw', md: '30px' },
                    marginRight: { xs: 0, sm: '8vw', md: '30px' },
                    justifyContent: 'space-between',
                    '&:hover': {
                      boxShadow: '16px 16px 10px 0px rgba(0,0,0,0.75)',
                      transform: 'scale(1.05)',
                      transition: 'all 0.5s ease-in-out',
                    },
                  })
                }}
              >
                <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                  mt: 2,
                  color: theme.palette.text.primary,
                  fontSize: '20px',
                })}>
                  {nome}
                </Typography>

                <Box
                  sx={{
                    maxHeight: '50%',
                    maxWidth: { xs: '55vw', sm: '25vw', md: '225px' },
                    overflow: 'auto',
                    '::-webkit-scrollbar': {
                      width: '0.4em',
                    },
                  }}
                >
                  {descricoes && descricoes.map((item) =>
                    <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                      color: theme.palette.text.primary,
                      fontSize: '15px',
                    })}>
                      {item}
                    </Typography>)}
                </Box>

                <Box>
                  <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                    color: theme.palette.text.primary,
                    fontSize: '20px',
                    mt: 0.5,
                  })}>
                    Inscrição: R$ {(inscricao ? parseFloat(inscricao) : 0).toFixed(2)}
                  </Typography>

                  <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                    color: theme.palette.text.primary,
                    fontSize: '20px',
                  })}>
                    Mensalidade: R$ {(preco ? parseFloat(preco) : 0).toFixed(2)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              width: '100%',
            }}
          >
            <IconButton
              onClick={(e) => {
                e.preventDefault()
                setProduto()
              }}
              sx={{
                height: { xs: '20vw', sm: '10vw', md: '80px' },
                pl: 4,
                pr: 4,
              }}
            >
              <AddShoppingCartIcon color='primary'
                sx={{
                  width: { xs: '10vw', sm: '5vw', md: '40px' },
                  height: { xs: '10vw', sm: '5vw', md: '40px' },
                }}
              />
              <Typography variant="h2" fontWeight="xl" sx={(theme) => ({
                color: theme.palette.text.primary,
                fontSize: '20px',
              })}>
                Adicionar
              </Typography>
            </IconButton>
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
