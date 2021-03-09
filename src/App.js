import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import SvgIcon from '@material-ui/core/SvgIcon';
import TextField from '@material-ui/core/TextField';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import {InputAdornment, withStyles} from "@material-ui/core";
import Web3 from "web3";
import Web3Modal from "web3modal";

function Copyright() {
  return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://www.okex.com/cn/okexchain">
          OKExChain
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
  );
}

function HomeIcon(props) {
  return (
        <SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1793.07 1658.11">
          <g id="layer_2" data-name="layer 2">
            <g id="layer_1-2" data-name="layer 1">
              <path className="cls-1"
                    d="M830.21,521.05a264.44,264.44,0,0,0,125.72,0A264.67,264.67,0,0,1,1149.8,327.17a264.64,264.64,0,0,0,7.59-62.85C1157.39,118.34,1039.05,0,893.07,0S628.75,118.34,628.75,264.32a264.64,264.64,0,0,0,7.59,62.85A264.67,264.67,0,0,1,830.21,521.05Z"/>
              <path className="cls-2"
                    d="M955.93,646.77a264.1,264.1,0,0,0-125.72,0A264.66,264.66,0,0,1,636.34,840.64a264.73,264.73,0,0,0-7.59,62.86c0,146,118.34,264.32,264.32,264.32s264.32-118.34,264.32-264.32a264.73,264.73,0,0,0-7.59-62.86A264.66,264.66,0,0,1,955.93,646.77Z"/>
              <path className="cls-3"
                    d="M1212.66,319.59a265.24,265.24,0,0,0-62.86,7.58A264.64,264.64,0,0,1,955.93,521.05a264.44,264.44,0,0,0,0,125.72A264.61,264.61,0,0,1,1149.8,840.64a264.73,264.73,0,0,0,62.86,7.59c146,0,264.32-118.34,264.32-264.32S1358.64,319.59,1212.66,319.59Z"/>
              <path className="cls-4"
                    d="M830.21,646.77a264.44,264.44,0,0,0,0-125.72A264.64,264.64,0,0,1,636.34,327.17a265.24,265.24,0,0,0-62.86-7.58c-146,0-264.32,118.34-264.32,264.32S427.5,848.23,573.48,848.23a264.73,264.73,0,0,0,62.86-7.59A264.61,264.61,0,0,1,830.21,646.77Z"/>
              <path className="cls-5"
                    d="M955.93,521.05A264.64,264.64,0,0,0,1149.8,327.17,264.67,264.67,0,0,0,955.93,521.05Z"/>
              <path className="cls-6"
                    d="M955.93,646.77A264.66,264.66,0,0,0,1149.8,840.64,264.61,264.61,0,0,0,955.93,646.77Z"/>
              <path className="cls-7"
                    d="M830.21,521.05A264.67,264.67,0,0,0,636.34,327.17,264.64,264.64,0,0,0,830.21,521.05Z"/>
              <path className="cls-8"
                    d="M830.21,646.77A264.61,264.61,0,0,0,636.34,840.64,264.66,264.66,0,0,0,830.21,646.77Z"/>
              <path className="cls-9"
                    d="M1054.85,1402.51q9.26,0,18.89.92t18.7,2.57q9.07,1.65,17.42,4a89.38,89.38,0,0,1,15,5.68l-7.41,37.91a161.55,161.55,0,0,0-26.3-7.22,150.16,150.16,0,0,0-28.53-2.78q-42.22,0-64.64,21.95t-22.41,64.73q0,42.78,22.41,64.73t64.64,22a150.16,150.16,0,0,0,28.53-2.78,162.56,162.56,0,0,0,26.3-7.22l7.41,37.91a90.25,90.25,0,0,1-15,5.69q-8.34,2.39-17.42,4t-18.7,2.57q-9.65.9-18.89.91-31.87,0-56.31-9.63t-41.12-26.67a111.81,111.81,0,0,1-25.19-40.38q-8.52-23.34-8.52-51.12t8.52-51.12a111.81,111.81,0,0,1,25.19-40.38q16.67-17,41.12-26.67T1054.85,1402.51Z"/>
              <path className="cls-9"
                    d="M1152.81,1653.66V1392.14h50.75v103a55.75,55.75,0,0,1,22-19.26,65.57,65.57,0,0,1,28.71-6.3q17.4,0,29.82,7.41a59.67,59.67,0,0,1,20.19,19.81,92.14,92.14,0,0,1,11.48,28.9,155.79,155.79,0,0,1,3.7,34.26v93.72h-50.74v-94.09q0-24.45-7.6-37t-25-12.6a35.19,35.19,0,0,0-19.27,5.19,49,49,0,0,0-13.33,12.23v126.31Z"/>
              <path className="cls-9"
                    d="M1454.15,1634.4a89.51,89.51,0,0,1-24.08,16.3q-14.08,6.67-32.6,6.67a57,57,0,0,1-21.49-3.89,46.89,46.89,0,0,1-16.3-10.74,48.91,48.91,0,0,1-10.37-16.12,54.33,54.33,0,0,1-3.7-20.37q0-24.81,16.67-37.79t45.56-14.81q11.12-.74,23-1.11t21.48-.75v-6.29q0-17.41-8.52-26.49t-26.67-9.08a103.88,103.88,0,0,0-26.67,3.34,101.09,101.09,0,0,0-22.22,8.52l-10-35.56a119.87,119.87,0,0,1,31.12-12.41,150.84,150.84,0,0,1,36.67-4.26q35.92,0,56.49,19.63t20.56,58.16v106.31h-48.89ZM1416,1622.92a53.22,53.22,0,0,0,20-3.71,64.84,64.84,0,0,0,16.29-9.26v-28.52q-7.77.75-16.67,1.48t-16.3,1.85q-11.11,1.86-17.78,6.12t-6.66,14.26q0,8.88,5.74,13.33T1416,1622.92Z"/>
              <path className="cls-9"
                    d="M1534.33,1420.66a28.9,28.9,0,0,1,8.15-20.74q8.14-8.52,21.12-8.53t21.3,8.53a29.76,29.76,0,0,1,0,41.3q-8.34,8.71-21.3,8.7t-21.12-8.7A29.08,29.08,0,0,1,1534.33,1420.66Zm4.08,233v-180.4h50.75v180.4Z"/>
              <path className="cls-9"
                    d="M1626.37,1653.66v-180.4h48.9v24.45q8.89-14.45,22.6-21.3a66.07,66.07,0,0,1,30-6.85q17.42,0,29.82,7.41a59.49,59.49,0,0,1,20.19,19.81,92.15,92.15,0,0,1,11.49,28.9,156.4,156.4,0,0,1,3.7,34.26v93.72h-50.75v-94.09q0-24.45-7.59-37t-25-12.6a35.15,35.15,0,0,0-19.26,5.19,49.17,49.17,0,0,0-13.34,12.23v126.31Z"/>
              <path className="cls-9"
                    d="M247.5,1530.53a144.46,144.46,0,0,1-8.31,49.31,120.38,120.38,0,0,1-24,40.45,112.61,112.61,0,0,1-38.79,27.52Q153.31,1658,123.75,1658t-52.64-10.16a114.39,114.39,0,0,1-39-27.52,116.27,116.27,0,0,1-24-40.45,153.06,153.06,0,0,1,0-98.44,116.09,116.09,0,0,1,24-40.64,114.67,114.67,0,0,1,39-27.52q23.08-10.15,52.64-10.16t52.64,10.16a112.87,112.87,0,0,1,38.79,27.52,120.17,120.17,0,0,1,24,40.64A145,145,0,0,1,247.5,1530.53Zm-123.75,86.81q18.09,0,31.58-6.65a64.13,64.13,0,0,0,22.54-18.29,78.73,78.73,0,0,0,13.48-27.52,135.43,135.43,0,0,0,0-68.71,78.82,78.82,0,0,0-13.48-27.52,64,64,0,0,0-22.54-18.28q-13.49-6.66-31.58-6.65t-31.58,6.65a63.82,63.82,0,0,0-22.54,18.28,78.82,78.82,0,0,0-13.48,27.52,135.43,135.43,0,0,0,0,68.71,78.73,78.73,0,0,0,13.48,27.52,64,64,0,0,0,22.54,18.29Q105.64,1617.33,123.75,1617.34Z"/>
              <path className="cls-9"
                    d="M280,1653.54v-246h51.72v118.2l85.33-118.2H476.9l-90.51,121.53,96.79,124.49H419.27l-87.55-120.8v120.8Z"/>
              <path className="cls-9" d="M503.49,1407.52H651.26v41h-96V1508h91.61v41H555.21v63.53h97.15v41H503.49Z"/>
              <path className="cls-9"
                    d="M835.58,1407.52h56.15l-80.9,122.27,82.38,123.75H836.69l-53.19-83.86-53.2,83.86H673.78l82.38-123.75-80.9-122.27h56.15l52.09,83.11Z"/>
            </g>
          </g>
        </SvgIcon>
  );
}

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    buttons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        backgroundColor: theme.palette.background.paper,
        paddingBottom: theme.spacing(0),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const ValidationTextField = withStyles({
    root: {
        '& input:valid + fieldset': {
            borderColor: 'green',
            borderWidth: 2,
        },
        '& input:invalid + fieldset': {
            borderColor: 'red',
            borderWidth: 2,
        },
        '& input:valid:focus + fieldset': {
            borderLeftWidth: 6,
            padding: '4px !important', // override inline-style
        },
    },
})(TextField);

export default function Album() {
  const classes = useStyles();

    const providerOptions = {};

    const web3Modal = new Web3Modal({
        network: "ok-test", // optional
        cacheProvider: true, // optional
        providerOptions // required
    });

    const [accounts, setAccounts] = useState([]);
    const [provider, setProvider] = useState(null);
    const connectWeb3 = async() => {
        try {
            const provider = await web3Modal.connect();
            setProvider(provider);
            console.log(provider)
            if (provider) {
                if (provider.on) {
                    provider.on("accountsChanged", (accounts) => {
                        console.log(accounts);
                        setAccounts(accounts);
                    });
                    provider.on("chainChanged", (chainId) => {
                        console.log(chainId);
                    });
                    provider.on("connect", (info) => { // : { chainId: number }
                        console.log(info);
                    });
                    provider.on("disconnect", (error) => {  // : { code: number; message: string }
                        console.log(error);
                    });
                }
                const web3 = new Web3(provider);
                const accounts = await web3.eth.getAccounts();
                setAccounts(accounts);
            }
        } catch (err) {
            console.log(err.toString());
        }
    }


    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static">
            <Toolbar>
                <HomeIcon className={classes.icon} />
                <Typography variant="h6" className={classes.title}>
                    OKExChain Tools
                </Typography>
                {!provider && <Button edge="end" variant="outlined" color="inherit" onClick={connectWeb3}>Connect Wallet</Button> }
                {provider && <Button edge="end" variant="outlined" color="inherit">{accounts[0]}</Button> }
            </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="md">
              <Typography component="h3" variant="h4" align="center" color="textPrimary">
                  Deploy contract using bytecode
              </Typography>
            </Container>
          </div>
          {/* End hero unit */}
            <div className={classes.cardGrid} >
                <Container className={classes.cardGrid} fixed>
                    <ValidationTextField
                        id="bytecode-text-field"
                        multiline
                        rows={10}
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <div className={classes.buttons} >
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <Button variant="contained" size="large" color="primary"  startIcon={<DescriptionOutlinedIcon />}>
                                    Deploy Contract
                                </Button>
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    fullWidth
                                    id="contract-address-text-field"
                                    InputProps={{
                                        readOnly: true,
                                        startAdornment: <InputAdornment position="start">Contract Address:</InputAdornment>,
                                    }}
                                    size="small"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Copyright />
        </footer>
        {/* End footer */}
      </React.Fragment>
  );
}