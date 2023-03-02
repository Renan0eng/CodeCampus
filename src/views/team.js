import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Autocomplete from '@mui/joy/Autocomplete';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import ChipDelete from '@mui/joy/ChipDelete';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Slider from '@mui/joy/Slider';
import Sheet from '@mui/joy/Sheet';

// Icons import
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';

// custom
import teamTheme from '../constants/theme';
import Menu from '../Components/Menu';
import Layout from '../Components/LayoutTeam';

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

function TeamNav() {
  const [drawerBrowseOpen, setDrawerBrowseOpen] = React.useState(false);

  return (
    <List size="sm" sx={{ '--List-item-radius': '8px', '--List-gap': '4px' }}>
      <ListItem nested>
        <ListSubheader>
          Browse
          <IconButton
            size="sm"
            variant="plain"
            color="primary"
            sx={{ '--IconButton-size': '24px', ml: 'auto' }}
            onClick={() => { setDrawerBrowseOpen(!drawerBrowseOpen) }}
          >
            <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
          </IconButton>
        </ListSubheader>
        {drawerBrowseOpen && <List
          aria-labelledby="nav-list-browse"
          sx={{
            '& .JoyListItemButton-root': { p: '8px' },
          }}
        >
          <ListItem>
            <ListItemButton variant="soft" color="primary">
              <ListItemDecorator sx={{ color: 'inherit' }}>
                <PeopleRoundedIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>People</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator sx={{ color: 'neutral.500' }}>
                <AssignmentIndRoundedIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Managing accounts</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator sx={{ color: 'neutral.500' }}>
                <ArticleRoundedIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Policies</ListItemContent>
              <Chip
                variant="soft"
                color="info"
                size="sm"
                sx={{ borderRadius: 'sm' }}
              >
                Beta
              </Chip>
            </ListItemButton>
          </ListItem>
        </List>}
      </ListItem>
    </List>
  );
}

export default function TeamExample() {
  // formata a data para o formato de 2023-02-24 para 24 Feb 2023
  const formatDate = (date) => {
    const newDate = new Date(date);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return newDate.toLocaleDateString('pt-BR', options);
    
  }
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const [grupos, setGrupos] = React.useState([
    {
      id: 1,
      nome: 'Grupo 1',
      desc: 'Feito por alunos para alunos',
      avatar: 'https://i.pravatar.cc/150?img=1',
      membros: [
        {
          id: 1,
          nome: 'João',
          sobrenome: 'Silva',
          ocupação: 'Desenvolvedor',
          email: 'João@gmail.com',
          avatar: 'https://i.pravatar.cc/150?img=2',
          dataEntrada: '2021-01-01',
        },
        {
          id: 2,
          nome: 'Maria',
          sobrenome: 'Silva',
          ocupação: 'designer',
          email: 'Maria@gmail.com',
          avatar: 'https://i.pravatar.cc/150?img=3',
          dataEntrada: '2021-01-01',
        },
        {
          id: 3,
          nome: 'Pedro',
          sobrenome: 'Silva',
          ocupação: 'Desenvolvedor',
          email: 'prdro@gmail.com',
          avatar: 'https://i.pravatar.cc/150?img=4',
          dataEntrada: '2021-01-01',
        },
      ],
      requerimentos: [
        {
          ocupação: 'Designer',
        },
        {
          ocupação: 'Desenvolvedor',
        },
      ],
    },
    {
      id: 1,
      nome: 'Grupo 2',
      desc: 'Feito para alunos por alunos',
      avatar: 'https://i.pravatar.cc/150?img=1',
      membros: [
        {
          id: 1,
          nome: 'João',
          sobrenome: 'Silva',
          ocupação: 'designer',
          email: 'João@gmail.com',
          avatar: 'https://i.pravatar.cc/150?img=2',
          dataEntrada: '2021-01-01',
        },
        {
          id: 2,
          nome: 'Maria',
          sobrenome: 'Silva',
          ocupação: 'Desenvolvedor',
          email: 'Maria@gmail.com',
          avatar: 'https://i.pravatar.cc/150?img=3',
          dataEntrada: '2021-01-01',
        },
      ],
      requerimentos: [
        {
          ocupação: 'Designer',

        },
      ],
    },
    {
      id: 1,
      nome: 'Grupo 3',
      desc: 'Feito por alunos para alunos',
      avatar: 'https://i.pravatar.cc/150?img=1',
      membros: [
        {
          id: 1,
          nome: 'João',
          sobrenome: 'Silva',
          ocupação: 'Desenvolvedor',
          email: 'João@gmail.com',
          avatar: 'https://i.pravatar.cc/150?img=2',
          dataEntrada: '2021-01-01',
        },
        {
          id: 2,
          nome: 'Maria',
          sobrenome: 'Silva',
          ocupação: 'designer',
          email: 'Maria@gmail.com',
          avatar: 'https://i.pravatar.cc/150?img=3',
          dataEntrada: '2021-01-01',
        },
      ],
      requerimentos: [
        {
          ocupação: 'Designer',

        },
      ],
    }
  ])


  return (
    <CssVarsProvider disableTransitionOnChange theme={teamTheme}>
      <CssBaseline />
      {drawerOpen && (
        <Layout.SideDrawer onClose={() => setDrawerOpen(false)}>
          <TeamNav />
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
              <GroupRoundedIcon />
            </IconButton>
            <Typography component="h1" fontWeight="xl">
              Team
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
                  href: '/',
                },
                {
                  label: 'New',
                  href: '/newpost',
                },
                {
                  label: 'Team',
                  active: true,
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
          <TeamNav />
        </Layout.SideNav>
        <Layout.Main>
          <List
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 2,
            }}
          >
            {grupos.map((grupo, index) => (
              <Sheet
                key={index}
                component="li"
                variant="outlined"
                sx={{
                  borderRadius: 'sm',
                  p: 2,
                  listStyle: 'none',
                }}
              >
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Avatar
                    src={grupo.avatar}
                    srcSet={grupo.avatar}
                    sx={{ borderRadius: 'sm' }}
                  />
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: 'row'
                      }}
                    >
                      <Typography>{grupo.nome}</Typography>
                    </Box>

                    <Typography level="body3">{grupo.desc}</Typography>
                  </Box>
                </Box>
                <Divider component="div" sx={{ my: 2 }} />
                <List sx={{ '--List-decorator-size': '48px' }}>
                  {grupo.membros && grupo.membros.map((membro, index) => (
                    <ListItem sx={{ alignItems: 'flex-start' }}>
                      <ListItemDecorator
                        sx={{
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            height: '100%',
                            width: '2px',
                            bgcolor: 'divider',
                            left: 'calc(var(--List-item-paddingLeft) + 15px)',
                            top: '50%',
                          },
                        }}
                      >
                        <Avatar
                          size="sm"
                          src={membro.avatar}
                        />
                      </ListItemDecorator>
                      <ListItemContent>
                        <Typography fontSize="sm">{membro.nome}</Typography>
                        <Typography level="body3">{membro.ocupação}</Typography>
                      </ListItemContent>
                      <Typography level="body2">{formatDate(membro.dataEntrada)}</Typography>
                    </ListItem>))}
                </List>
                <Button
                  size="sm"
                  variant="plain"
                  endDecorator={<KeyboardArrowRightRoundedIcon fontSize="small" />}
                  sx={{ px: 1, mt: 1 }}
                >
                  Expand
                </Button>
                <Divider component="div" sx={{ my: 2 }} />
                <Typography fontSize="sm">Requerimentos:</Typography>
                <Box sx={{ mt: 1.5, display: 'flex', gap: 1 }}>
                  {grupo.requerimentos && grupo.requerimentos.map((requerimento, index) => (
                    <Chip
                      variant="outlined"
                      color="neutral"
                      size="sm"
                      sx={{ borderRadius: 'sm' }}
                    >
                      {requerimento.ocupação}
                    </Chip>))}
                </Box>
              </Sheet>
            ))}
          </List>
        </Layout.Main>
      </Layout.Root>
    </CssVarsProvider>
  );
}
