import * as React from 'react';
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../contexts/authContext';

import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import ViewDayIcon from '@mui/icons-material/ViewDay';

// Icons import
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import OutboxRoundedIcon from '@mui/icons-material/OutboxRounded';
import DraftsRoundedIcon from '@mui/icons-material/DraftsRounded';
import AssistantPhotoRoundedIcon from '@mui/icons-material/AssistantPhotoRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

export default function FeedNav() {

  const { logout } = React.useContext(AuthContext);
  const Menus = {
    Browse: [
      {
        label: 'Feed',
        href: '/feed',
        icon: <ViewDayIcon fontSize="small" color="primary" />,
      },
      {
        label: 'New',
        active: true,
        href: '/feed/newfeed',
        icon: <OutboxRoundedIcon fontSize="small" color="primary" />,
      },
      // {
      //   label: 'Team',
      //   href: '/team',
      //   icon: <DraftsRoundedIcon fontSize="small" color="primary" />,
      // },
      {
        label: 'Files',
        href: '/files',
        icon: <AssistantPhotoRoundedIcon fontSize="small" color="primary" />,
      }
    ],
    Tags: [
      {
        label: 'Personal',
        href: '/personal',
        bgcolor: 'primary.100',
      },
      {
        label: 'Work',
        href: '/work',
        bgcolor: 'danger.300',
      },
      {
        label: 'Family',
        href: '/family',
        bgcolor: 'success.300',
      },
      {
        label: 'Friends',
        href: '/friends',
        bgcolor: 'warning.300',
      },
      {
        label: 'Travel',
        href: '/travel',
        bgcolor: 'info.300',
      },
      {
        label: 'Holidays',
        href: '/holidays',
        bgcolor: 'neutral.300',
      },
      {
        label: 'Photos',
        href: '/photos',
        bgcolor: 'primary.300',
      },
    ]
  }

  const [menus, setMenus] = React.useState(Menus);
  const [tagsMenu, setTagsMenu] = React.useState(true);
  const [browseMenu, setBrowseMenu] = React.useState(true);
  const [configMenu, setConfigMenu] = React.useState(false);

  const [listItemDecorator, setListItemDecorator] = React.useState({
    Feed: {
      color: 'primary',
    },
    NewPost: {
      color: 'neutral.500',
    },
  });

  const navigate = useNavigate();

  return (
    <List size="sm" sx={{ '--List-item-radius': '8px' }}>
      <ListItem nested>
        <ListSubheader width='100%'>
          Browse
          <IconButton
            size="sm"
            variant="plain"
            color="primary"
            sx={{ '--IconButton-size': '24px', ml: 'auto' }}
            onClick={(e) => {
              e.preventDefault();
              if (!browseMenu) {
                setBrowseMenu(true);
              }else {
                setBrowseMenu(false);
              }
            }}
          >
            <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
          </IconButton>
        </ListSubheader>
        <List
          aria-labelledby="nav-list-browse"
          sx={{
            '& .JoyListItemButton-root': { p: '8px' }
          }}
        >
          {browseMenu ? menus.Browse.map((item) => (
            <ListItem>
              <ListItemButton
                onClick={() => navigate(item.href)}
              >
                <ListItemDecorator sx={listItemDecorator.Feed}>
                  {item.icon}
                </ListItemDecorator>
                <ListItemContent>{item.label}</ListItemContent>
              </ListItemButton>
            </ListItem>
          )) : null}

        </List>
      </ListItem>
      <ListItem nested sx={{ mt: 2 }}>
        <ListSubheader>
          Tags
          <IconButton
            size="sm"
            variant="plain"
            color="primary"
            sx={{ '--IconButton-size': '24px', ml: 'auto' }}
            onClick={(e) => {
              e.preventDefault();
              if (!tagsMenu) {
                setTagsMenu(true);
              } else {
                setTagsMenu(false);
              }
            }}
          >
            <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
          </IconButton>
        </ListSubheader>
        <List
          aria-labelledby="nav-list-tags"
          size="sm"
          sx={{
            '--List-decorator-size': '32px',
            '& .JoyListItemButton-root': { p: '8px' },
          }}
        >
        {tagsMenu ? menus.Tags.map((item) => (
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <Box
                  sx={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '99px',
                    bgcolor: item.bgcolor,
                  }}
                />
              </ListItemDecorator>
              <ListItemContent>{item.label}</ListItemContent>
            </ListItemButton>
          </ListItem>
          )) : null}
        </List>
      </ListItem>
      <ListItem nested sx={{ mt: 2 }}>
        <ListSubheader>
          comfig
          <IconButton
            size="sm"
            variant="plain"
            color="primary"
            sx={{ '--IconButton-size': '24px', ml: 'auto' }}
            onClick={(e) => {
              e.preventDefault();
              if (!configMenu) {
                setConfigMenu(true);
              } else {
                setConfigMenu(false);
              }
            }}
          >
            <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
          </IconButton>
        </ListSubheader>
        <List
          aria-labelledby="nav-list-tags"
          size="sm"
          sx={{
            '--List-decorator-size': '32px',
            '& .JoyListItemButton-root': { p: '8px' },
          }}
        >
          {configMenu && 
          <ListItem>
            <ListItemButton
              onClick={(e) => {
                e.preventDefault();
                logout()
              }}
            >
              <ListItemDecorator>
                <LogoutIcon fontSize="small" color="primary" />
              </ListItemDecorator>
              <ListItemContent>Logout</ListItemContent>
            </ListItemButton>
          </ListItem>}
        </List>
      </ListItem>
    </List>
  );
}
