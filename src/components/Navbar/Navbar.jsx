import { AppBar, Toolbar, Typography, Badge } from '@material-ui/core'
import { IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    
    const classes = useStyles();
    const location = useLocation();
    
    console.log('total_items?', totalItems)
    console.log('current path name:', location.pathname )

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                    React x Commerce JS
                </Typography>
                <div className={classes.grow} />
                {
                    location.pathname === '/' ?
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>                    
                        </IconButton>
                    </div> : ''
                }
                </Toolbar>
            </AppBar>
            </div>
    )
}

export default Navbar;