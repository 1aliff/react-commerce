import { AppBar, Toolbar, Typography, Badge } from '@material-ui/core'
import { IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Logo from '../../assets/header-logo.png';
// import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                <Typography variant="h6" className={classes.title} color="inherit">
                    {/* <img src={Logo} alt="header-logo" height="20px"className={classes.image} /> */}
                    React x Commerce JS
                </Typography>
                <div className={classes.grow} />
                <div className={classes.button}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Badge badgeContent={1} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </div>
                </Toolbar>
            </AppBar>
            </div>
    )
}

export default Navbar;