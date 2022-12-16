import './App.css';
import React from 'react';
import { useState} from "react";
import { useMemo } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { experimentalStyled as styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import Modal from '@mui/material/Modal';
import { ethers } from "ethers";
import Form from "./Form";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height: '380px',
  bgcolor: 'background.paper',
  border: '1px solid #fff',
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const dark = createTheme({
  
  palette: {
    mode: 'dark',
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 1500,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
    easing: {
      // This is the most common easing curve.
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
});


function App() {

  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [lifePointsOne, setLifePointsOne] = useState(20);
  const [lifePointsTwo, setLifePointsTwo] = useState(20);
  const [roll, setRoll] = useState('🎲');
  const [coin, setCoin] = useState('🪙');
  const [openModal, setOpenModal] = useState(false);
  
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const coinSide = useMemo(() => ["H", "T"], []);

  const coinFlip = () => {
    const flip = coinSide[Math.round(Math.random())];
    setCoin(flip);
  };

  const dieRoll = () => {
  setRoll(Math.floor(Math.random() * 20 + 1));
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (

    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Projects'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <MailIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Meme Generator'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={handleOpen}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const provider = new ethers.providers.Web3Provider(window.ethereum)

  const connect = async () => {
    await provider.send("eth_requestAccounts", []);
    setOpen(true);
  }

  const checked = useState(true);

  return (
   <>
   <div className='bg'>
   <ThemeProvider theme={dark}>
    
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
          {['left'].map((anchor) => (
            <IconButton
              onClick={toggleDrawer(anchor, true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            ))}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              LIFE GAUGE
            </Typography>
            <Button onClick={connect} color="inherit">Connect</Button>
          </Toolbar>
        </AppBar>

        {/* Alert */}
        <div style={{zIndex: 1000}} className='alert'>
          <Collapse in={open}>
            <Alert
                action={<IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                } }
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>}
              sx={{ mb: 2 }}
            >
              Connected!
            </Alert>
          </Collapse>
        </div>
      </Box>
    </ThemeProvider>
    
    <ThemeProvider theme={dark}>
      
        <Box className='content' sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
          <Zoom in={checked}>
            <Grid item xs={12} md={6}>
              

                <Grid item xs={12}>
                  <Item className='glass' style={{margin: "auto", background: 'rgba(255, 255, 255, 0.1)', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', border: '1px solid rgba(255, 255, 255, 0.3)', borderRadius: '16px'}}>
                  <div className='playerOneCont'>
                  <div className='counterCont'> 
                    <h2>VAMPIRES</h2>
                    <Button size='small' style={{color: "#fff", border: "solid 1px #fff"}} variant='outlined' onClick={() => setLifePointsOne(lifePointsOne + 1)}>▲</Button>
                    <h1>{lifePointsOne}</h1>
                    <Button size='small' style={{color: "#fff", border: "solid 1px #fff"}} variant='outlined' onClick={() => setLifePointsOne(lifePointsOne - 1)}>▼</Button> 
                  </div>
                  </div>
                  </Item>
                </Grid>

             
            </Grid>
          </Zoom>
          <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
            <Grid item xs={12} md={6}>
     
                <Grid item xs={12}>
                  <Item className='glass' style={{margin: "auto", background: 'rgba(255, 255, 255, 0.1)', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', border: '1px solid rgba(255, 255, 255, 0.3)', borderRadius: '16px'}}>
                  <div className='playerTwoCont'>
                    <div className='counterCont'>               
                    <h2>WEREWOLVES</h2>
                    <Button size='small' style={{color: "#fff", border: "solid 1px #fff"}} variant='outlined' onClick={() => setLifePointsTwo(lifePointsTwo + 1)}>▲</Button>
                    <h1>{lifePointsTwo}</h1>
                    <Button size='small' style={{color: "#fff", border: "solid 1px #fff"}} variant='outlined' onClick={() => setLifePointsTwo(lifePointsTwo - 1)}>▼</Button>
                  </div>
                  </div>
                  </Item>
                </Grid>

            </Grid>
          </Zoom>
          </Grid>
          <div>
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      
      <div className="reset">
        <div className="resetBtn">
        <Zoom in={checked} style={{ transitionDelay: checked ? '1700ms' : '0ms', animation: 'rotation 8s infinite linear' }}>
          <Fab  size="large" style={{color: "#fff", backgroundColor: "#0f1317", fontSize: "1.5em"}} variant="contained" onClick={() => {setLifePointsOne(20); setLifePointsTwo(20); setRoll('🎲'); setCoin('🪙')}}>↺</Fab>
        </Zoom>
        </div>
      </div>
      <Modal      
        className='modal'   
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
      <Box sx={style}>
      <Form />
      </Box>
      </Modal>
      </Box>
      <div className="coin">
        <div className="coinBtn">
        <Zoom in={checked} style={{ transitionDelay: checked ? '2000ms' : '0ms' }}>
          <Fab  size="large" style={{color: "#fff", backgroundColor: "#0f1317", fontSize: "1.5em"}} variant="contained" onClick={() => {coinFlip()}}>{coin}</Fab>
        </Zoom>
        </div>
      </div>
      <div className="dice">
        <div className="diceBtn">
        <Zoom in={checked} style={{ transitionDelay: checked ? '2000ms' : '0ms' }}>
          <Fab size="large" style={{color: "#fff", backgroundColor: "#0f1317", fontSize: "1.5em"}} variant="contained" onClick={() => {dieRoll()}}>{roll}</Fab>
        </Zoom>
        </div>
      </div>
      </ThemeProvider>
      </div>
      
</>

  );
}

export default App;
