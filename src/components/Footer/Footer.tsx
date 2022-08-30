import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MediumIcon from '../../assets/medium-icon.png'
import IconButton from '@mui/material/IconButton';
import FormLabel from '@mui/material/FormLabel';
import {styled } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom'
import RocketIcon from '@mui/icons-material/Rocket';
import './Footer.css'
import { textAlign } from '@mui/system';


const Responsive = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
        width: '52ch'
    },
    [theme.breakpoints.down('sm')]: {
        width: '25ch',
        margin: 'auto',
    },
  }));
  


export default function Footer () {
    let navigate = useNavigate();
    return (
        <footer id='footer'>
                <div className="footer-background">
                    <div className='footer-container'>
                        <div className='footer-nav'>
                            <Button sx={{mb: '2.80em'}} color='inherit' onClick={()=>navigate("/")}>Home</Button>
                            <br />
                            <Button sx={{mb: '2.80em'}} color='inherit' onClick={()=>navigate("/projects")}>Projects</Button>
                            <br />
                            <Button sx={{mb: '2.80em'}} color='inherit' onClick={()=>navigate("/blog")}>Blog</Button>
                            <br />
                            <Button color='inherit' onClick={()=>navigate("/about")}>About</Button>
                        </div>
                        <div className='footer-icons'>
                            <IconButton  sx={{mb: '1.25em'}}  onClick={()=> window.open("https://github.com/m2rads", '_blank')}>
                                <GitHubIcon fontSize="large" />
                            </IconButton>
                            <br/>
                            <IconButton sx={{mb: '1.25em'}} onClick={()=> window.open("https://twitter.com/Mohamma92787832", '_blank')}>
                                <TwitterIcon fontSize="large" />
                            </IconButton>
                            <br/>
                            <IconButton sx={{mb: '1.25em'}} onClick={()=> window.open("https://www.linkedin.com/in/mohammad-esmaeilirad-778935168/", '_blank')}>
                                <LinkedInIcon fontSize="large" />
                            </IconButton>
                            <br/>
                            <IconButton  onClick={()=> window.open("https://medium.com/@mohammadrad", '_blank')}>
                                <img src={MediumIcon}  width={35} height={35} />
                            </IconButton>
                        </div>
                        <div>
                            <Box 
                                component="form"
                                autoComplete="off"
                                noValidate
                                sx={{marginTop: '2em'}}
                            >
                                <FormLabel sx={{ml: '1ch'}}>Contact Me</FormLabel>
                                <br />
                                <br /> 
                                <TextField
                                    label="Name"
                                    id="outlined-start-adornment"
                                    sx={{ m: 1, width: '25ch' }}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                                    }}
                                />
                                <TextField
                                    label="Subject"
                                    id="outlined-start-adornment"
                                    sx={{ m: 1, width: '25ch' }}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                                    }}
                                />
                                <br/>
                                <Responsive>
                                    <FormControl fullWidth className='form-control' sx={{ width: 'inherit' }}>
                                        <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-amount"
                                            // value={values.amount}
                                            // onChange={handleChange('amount')}
                                            startAdornment={<InputAdornment position="start"></InputAdornment>}
                                            label="Email"
                                        />
                                    </FormControl>
                                </Responsive>
                                <br/>
                                    <Responsive>
                                        <TextField sx={{ width: 'inherit' }}
                                        id="outlined-multiline-static"
                                        label="Message"
                                        multiline
                                        rows={4}
                                        defaultValue="Your Message"
                                        fullWidth
                                        />
                                    </Responsive>
                                <br/>
                                <Button  sx={{ m: 1, p: '0.75em 2em'}} variant="outlined" color="inherit">Send</Button>
                            </Box>
                        </div>
                    </div>
                </div>
                <div className='ps'>
                    <IconButton href='#top'>
                        <RocketIcon />
                    </IconButton>
                    <p>Mohammad Rad</p>
                </div>
        </footer>
    )
}