import * as React from 'react';

import { useRouter } from 'next/router';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookIcon from '@mui/icons-material/Book';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

import Link from 'next/link';
import { display, width } from '@mui/system';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Home() {

  const router = useRouter();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState(1)

  const [dataGrid, setDataGrid] = React.useState({
    columns: [
      { field: 'id', headerName: 'ID', description: 'ID de Comtrole', width: 50 },
      { field: 'nome', headerName: 'Nome', description: 'Nome do Comtrole', width: 150, editable: true },
      { field: 'descricao', headerName: 'Descrição', description: 'Descrição do Comtrole', width: 150, editable: true },
      { field: 'tipo', headerName: 'Tipo', description: 'Tipo do Comtrole', width: 150, editable: true },
      { field: 'valor', headerName: 'Valor', description: 'Valor do Comtrole', width: 50, editable: true },
    ],
    rows: [
      { id: 0, nome: 'Camara Fria', descricao: 'Sala fria de estocagen de peliciveis', tipo: 'Estoque', valor: '-45' },
    ]
  });

  const newItem = {
    id: id,
    nome: '',
    descricao: '',
    tipo: '',
    valor: ''
  };

  function addItem(array, item) {

    let copyRows = Object.assign([], dataGrid.rows);

    copyRows.push(item ? item : newItem);

    console.log(copyRows);

    let copyDataGrid = Object.assign({}, dataGrid);

    copyDataGrid.rows = copyRows;

    setDataGrid(copyDataGrid);

    setId(id + 1);

    console.log(dataGrid);
  }

  const gridWidth = dataGrid.columns.reduce((acc, column) => acc + column.width, 50);



  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Controle
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography variant="h6" noWrap component="div">
            Menu lateral
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List style={{ textDecoration: "none" }} >
          <ListItem key={"Dashboard"} disablePadding sx={{ display: 'block', mardin: 5 }}>
            <Link
              href="/">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={() => {
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary={"Dash Board"} style={{ opacity: open ? 1 : 0, color: "#555", textDecoration: "none" }} />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem key={"text"} disablePadding sx={{ display: 'block', mardin: 5 }}>
            <Link style={{ fontWeight: 'bold' }} href="/blog">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <BookIcon />
                </ListItemIcon>
                <ListItemText primary={"Blog"} style={{ opacity: open ? 1 : 0, color: "#555", textDecoration: "none" }} />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{
        pt: 10,
        display: 'flex',
        flexDirection: 'column',
        width: "100%"
      }}>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: "center" }}>

          <Typography variant="h2" component="h2" gutterBottom>
            Renan Nardi
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            Bem-vindo ao meu blog de desenvolvimento!
          </Typography>

          <Typography variant="p" gutterBottom>
            Aqui você pode acompanhar meu progresso e conhecer alguns dos projetos que tenho desenvolvido.
          </Typography>

          <Box p={1} sx={{ textAlign: "center" }}>
            <Typography variant="h5" component="h2" gutterBottom p={3} pt={5}>
              Oque pretendo fazer aqui?
            </Typography>

            <Typography variant="body1" gutterBottom>
              Pretendo documentar meu progresso como programador e compartilhar alguns dos projetos que tenho desenvolvido. Aqui você pode acompanhar meu progresso e conhecer alguns dos projetos que tenho desenvolvido.
            </Typography>
          </Box>
          <Box p={1} sx={{ textAlign: "center", borderTop: "1px solid #ccc", width: "100%", width: "100%" }}>
            <Typography variant="h5" component="h2" gutterBottom p={3} pt={5}>
              Sobre mim, um programador apaixonado
            </Typography>
            <Typography variant="body1" gutterBottom>
              Sou um programador apaixonado e estou sempre em busca de novos desafios e projetos para trabalhar. Aqui, você pode acompanhar meu progresso e conhecer alguns dos projetos que tenho desenvolvido.
            </Typography>

            <Link href={"/blog/feed"} target={"_blank"}>
              <IconButton sx={{borderRadius: 6 }}>
                <GitHubIcon />
                <Typography variant="body1" pl={1} pr={1} gutterBottom >
                  Feed
                </Typography>
              </IconButton>
            </Link>

          </Box>
          <Box p={1} sx={{ textAlign: "center", borderTop: "1px solid #ccc", width: "100%" }}>
            <Typography variant="h5" component="h2" gutterBottom p={3} pt={5}>
              Entre em Contato
            </Typography>
            <Typography variant="body1" gutterBottom>
              Se você estiver interessado em entrar em contato comigo para discutir algum projeto ou compartilhar suas ideias, basta me enviar uma mensagem pelas minhasredes sociais ou pelo meu email.
            </Typography>

            <Link href={"https://www.instagram.com/renan_nardii/"} target={"_blank"} >
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </Link>
            <Link href={"https://www.linkedin.com/in/renan-nardi-0b0b1b1b9/"} target={"_blank"} >
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </Link>
            <Link href={"https://github.com/Renan0eng"} target={"_blank"} >
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </Link>
            <Link href={"mailto:renan.nardi.dev@gmail.com"} target={"_blank"} >
              <IconButton>
                <EmailIcon />
              </IconButton>
            </Link>
          </Box>

          <Box p={1} sx={{ textAlign: "center", borderTop: "1px solid #ccc", width: "100%" }}>
            <Typography variant="h5" component="h2" gutterBottom p={3} pt={5}>
              Projetos
            </Typography>
            <Typography variant="body1" gutterBottom>
              Aqui estão alguns dos projetos que tenho desenvolvido. Clique em um projeto para saber mais sobre ele.
            </Typography>

            <Box>
              <Box pt={5}>
                <Link href={"https://github.com/Renan0eng/Site-Analise-De-Solo"} target={"_blank"} >
                  <IconButton>
                    <GitHubIcon />
                  </IconButton>
                </Link>
                <Typography variant="h6" gutterBottom>
                  ESP32 Web Server - Temperature Data
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Este é um projeto em C++ para criar um servidor web com o ESP32 que exibe dados de temperatura em tempo real.
                </Typography>
              </Box>
              <Box pt={3}>
                <Link href={"https://github.com/Renan0eng/Provavel_TCC"} target={"_blank"} >
                  <IconButton>
                    <GitHubIcon />
                  </IconButton>
                </Link>
                <Typography variant="h6" gutterBottom>
                  Sistema de Controle de produção e abate de peixe
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Este é um projeto em C# para criar um sistema de controle de produção de peixe.<br />
                  E comtrole da parte do frigorifico de abate de peixe.<br />
                  Onde o sistema ira controlar a temperatura, o tempo de abate, o tempo de resfriamento, o tempo de limpeza, o tempo de desinfecção, o tempo de secagem, o tempo de embalagem, e tempo de armazenamento.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{
            mt: 8,
            width: "100%",
            backgroundColor: "#333",
            color: "#fff",
            padding: 2,
            bottom: 0,
            textAlign: "center",
          }}
          >
            <Typography variant="p" gutterBottom>
              Copyright &copy; 2023 - Todos os direitos reservados
            </Typography>
            <Link href={"/blog/login"} target={"_blank"}>
              <Box sx={{width:"100%", height:"10%",backgroundColor: "#333"}}>

              </Box>
            </Link>

          </Box>
        </Box>
      </Box>
    </Box >
  );
}
