import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Divider from '@mui/joy/Divider';
import Avatar from '@mui/joy/Avatar';

// Icons import
import FolderIcon from '@mui/icons-material/Folder';
import { Input } from '@mui/joy';

export default function FeedContent() {


  const [logUser, setLogUser] = React.useState({
    name: 'John Doe',
  })

  return (
    <Sheet
      variant="outlined"
      sx={{
        minHeight: 500,
        borderRadius: 'sm',
        p: 2,
        mb: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Avatar
            src="https://i.pravatar.cc/40?img=3"
            srcSet="https://i.pravatar.cc/80?img=3"
            sx={{ borderRadius: 'xl' }}
          />
          <Box sx={{ ml: 2, display: "flex", alignItems: "center" }}>
            <Typography level="body2" textColor="text.primary" mb={0.5}>
              {logUser.name}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ mt: 2 }} />
      <Box
        sx={{ py: 2, display: 'flex', flexDirection: 'column', alignItems: 'start',}}
      >
        <Input
          sx={{ width: '100%', outline: "none",}}
          color="neutral"
          disabled={false}
          placeholder="Title"
          size="lg"
          variant="outlined"
        />
      </Box>
      <Divider />
      <Typography level="body2" mt={2} mb={2}>
        <Input
          sx={{ width: '100%', outline: "none", height: 150 }}
          color="neutral"
          disabled={false}
          placeholder="Description"
          size="sm"
          variant="outlined"
        />
      </Typography>
      <Divider />
      <Typography fontWeight="md" fontSize="sm" mt={2} mb={2}>
        Images
      </Typography>
      
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          '& > div': {
            boxShadow: 'none',
            '--Card-padding': '0px',
            '--Card-radius': theme.vars.radius.sm,
          },
        })}
      >
        <Box
          sx={(theme) => ({
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            mb: 3,
            '& > div': {
              boxShadow: 'none',
              '--Card-padding': '0px',
              '--Card-radius': theme.vars.radius.sm,
            },
          })}
        >  
          <Card variant="outlined" orientation="horizontal">
            <CardOverflow>
              <AspectRatio ratio="1" sx={{ minWidth: 80 }}
              onClick={() => {
                console.log("ADD image")
              }}
              >
                <Box>
                  <FolderIcon />
                </Box>
              </AspectRatio>
            </CardOverflow>
            <Box sx={{ p: { xs: 1, sm: 2 } }}>
              <Typography level="body2" color="primary">
                New Image
              </Typography>
              <Typography level="body3">max 100 MB</Typography>
            </Box>
          </Card>
        </Box>
      </Box>
    </Sheet>
  );
}
