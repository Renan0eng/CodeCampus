import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Divider from '@mui/joy/Divider';
import Avatar from '@mui/joy/Avatar';
import Modal from '@mui/joy/Modal';

import { useNavigate } from 'react-router-dom';

// Icons import
import FolderIcon from '@mui/icons-material/Folder';
import { IconButton, Input } from '@mui/joy';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


// Firebase
import { getDocs, collection, addDoc } from 'firebase/firestore';
import { db } from '../constants/firebase';
import Dropzone from 'react-dropzone';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { async } from '@firebase/util';





export default function FeedContent() {

  const storage = getStorage();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openImage, setOpenImage] = React.useState(false);
  const [image, setImage] = React.useState({});
  const handleOpenImage = () => setOpenImage(true);
  const handleCloseImage = () => setOpenImage(false);

  const navegate = useNavigate();

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = new Date();
  const formattedDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

  const user = JSON.parse(sessionStorage.getItem('user'));

  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const [imagensRef, setImagensRef] = React.useState([]);

  React.useEffect(() => {
  }, [])

  const [logUser, setLogUser] = React.useState({
    name: 'John Doe',
  })

  const [files, setFiles] = React.useState([]);

  function renderDragMessage(isDragActive, isDragReject) {

    if (!isDragActive) {
      return <Typography color="#fff" fontWeight="bold">
        Jogue os arquivos aqui, ou clique aqui...
      </Typography>;
    }

    if (isDragReject) {
      return <Typography color="error" fontWeight="bold">Arquivo não suportado</Typography>;
    }

    return <Typography color="primary" fontWeight="bold">Solte os arquivos aqui</Typography>;
  }

  function limitString(str, maxLength) {
    if (str.length <= maxLength) {
      return str;
    } else {
      let subString = str.slice(0, maxLength);
      if (subString[subString.length - 1] === ' ') {
        subString = subString.slice(0, subString.length - 1);
      }
      return subString + '...';
    }
  }

  const setPost = async (post) => {


    console.log("entrou");
    if (files.length == 0) {
      try {
        console.log("post", post);
        const docRef = addDoc(collection(db, "posts"), post);
        console.log("Document written with ID: ", docRef.id);
        navegate('/')
        return docRef.id;
      } catch (e) {
        console.log("Error adding document: ", e);
      }
    } else {
      if (imagensRef.length !== files.length) {
        files.map(async (image) => {
          try {
            const storageRef = ref(storage, `images/${image.name}`);
            const uploadTask = uploadBytesResumable(storageRef, image);

            uploadTask.on('state_changed', (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');

              switch (snapshot.state) {
                case 'paused':
                  console.log('Upload is paused');
                  break;
                case 'running':
                  console.log('Upload is running');
                  break;
              }
            }, (error) => {
              console.log(error);
            }, () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                const copy = imagensRef;
                copy.push(downloadURL);
                setImagensRef(copy);
                console.log("imagensRef", imagensRef);
                if (imagensRef.length === files.length) {
                  console.log("entrou");
                  post.images = imagensRef;
                  try {
                    console.log("post", post);
                    const docRef = addDoc(collection(db, "posts"), post);
                    console.log("Document written with ID: ", docRef.id);
                    navegate('/')
                    return docRef.id;
                  } catch (e) {
                    console.log("Error adding document: ", e);
                  }
                }
              });
            });

            console.log("Image uploaded", storageRef);
          } catch (e) {
            console.log("Error adding document: ", e);
            return false;
          }
        })
      }
    }



  }

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
            src={user.photoURL}
            srcSet={user.photoURL}
            sx={{ borderRadius: 'xl' }}
          />
          <Box sx={{ ml: 2, display: "flex", alignItems: "center" }}>
            <Typography level="body2" textColor="text.primary" mb={0.5}>
              {user.displayName}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ mt: 2 }} />
      <Box
        sx={{ py: 2, display: 'flex', flexDirection: 'column', alignItems: 'start', }}
      >
        <Input
          sx={{ width: '100%', outline: "none", }}
          color="neutral"
          disabled={false}
          placeholder="Title"
          size="lg"
          variant="outlined"
          onChange={(e) => setTitle(e.target.value)}
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
          onChange={(e) => setDescription(e.target.value)}
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
                  handleOpen();
                }}
              >
                <Box>
                  <FolderIcon />
                </Box>
              </AspectRatio>
            </CardOverflow>
            <Box sx={{ p: { xs: 1, sm: 2 } }}>
              <Typography level="body2" color="primary">
                Image
              </Typography>
              <Typography pt={0.5} level="body4" >max 100 MB</Typography>
            </Box>
          </Card>
          {files && files.map((file) => (
            <>
              <Card variant="outlined" orientation="horizontal">
                <CardOverflow>
                  <AspectRatio ratio="1" sx={{ minWidth: 80 }}
                    onClick={() => {
                      handleOpenImage();
                      setImage(file);
                    }}
                  >
                    <img
                      src={file.preview}
                      srcSet={file.preview}
                    />
                  </AspectRatio>
                </CardOverflow>
                <Box sx={{ p: { xs: 1, sm: 2 } }}>
                  <Typography level="body2" color="primary">
                    {limitString(file.name, 8)}
                  </Typography>
                  <Typography level="body3">{(file.size / (1024 * 1024)).toFixed(2)} MB</Typography>
                </Box>
              </Card>

              <Modal
                open={openImage}
                onClose={handleCloseImage}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
                    bgcolor: 'background.paper',
                    border: '2px solid',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 'xl',
                  }}
                >
                  <img
                    src={image.preview}
                    srcSet={image.preview}
                    width="100%"
                  />
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    {image.name}
                  </Typography>
                  <IconButton
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      m: 2,
                    }}
                    onClick={() => {
                      const copy = files;
                      const index = copy.indexOf(image);
                      if (index > -1) {
                        copy.splice(index, 1);
                      }
                      setFiles(copy);
                      handleCloseImage();
                    }}
                  >
                    <DeleteIcon fontSize="small" sx={{
                      color: 'grey.500',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }} />
                  </IconButton>
                </Box>

              </Modal>
            </>
          ))}

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              bgcolor: 'background.paper',
              border: '2px solid',
              boxShadow: 24,
              p: 4,
              borderRadius: 'xl',
            }}>
              <Typography sx={{ color: '#1cb2c4', fontSize: 30, pb: 4 }} id="modal-modal-title" variant="h6" component="h2" >
                Upload Image
              </Typography>

              <Dropzone accept={"image/*"} onDrop={acceptedFiles => {
                const copy = files;
                const image = (acceptedFiles.map(file => Object.assign(file, {
                  preview: URL.createObjectURL(file)
                })));
                copy.push(image[0]);
                setFiles(copy);
                console.log('files', files);
                handleClose();
              }}>
                {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                  <Box
                    sx={{
                      width: '100%',
                      height: 200,
                      border: '1px dashed',
                      borderColor: 'grey.500',
                      borderRadius: 'xl',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      cursor: 'pointer',
                      '&:hover': {
                        borderColor: 'primary.main',
                      },
                    }}
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    <Box
                      sx={{
                        p: 3,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <CloudUploadIcon color='#fff' sx={{ fontSize: 40 }} />{renderDragMessage(isDragActive, isDragReject)}
                    </Box>


                  </Box>
                )}
              </Dropzone>
            </Box>
          </Modal>
        </Box>
      </Box>

      <Divider />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, }}>
        <IconButton color="primary" aria-label="New post"
          onClick={(e) => {
            e.preventDefault();
            setPost({
              relevance: 0,
              authorId: user.uid,
              authorName: user.displayName ? user.displayName : "Anônimo",
              authorAvatar: user.photoURL ? user.photoURL : "",
              authorAvatarSet: user.photoURL ? user.photoURL : "",
              date: formattedDate,
              title: title,
              desc: description,
              // tags: ,

            })
          }}
        >
          <PostAddIcon />
        </IconButton>
      </Box>
    </Sheet>
  );
}
