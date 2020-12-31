import React from 'react';
import { Container, Button, Typography, Grid, Card } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CartItem from './CartItem/CartItem'
import useStyle from './styles'

const Cart = ({ cart }) => {
    const classes = useStyle();

    const EmptyCard = () => {
        return (
            <Typography variant="subtitle1">
                You have no item, please add something.
                <Link to='/' className="classes.link">Pick something here ;)</Link>
            </Typography>
        )
    }

    const FilledCart = () => {
        return (
            <>
                <Grid container spacing={3}>
                {
                    cart.line_items.map((item) => (
                        <Grid item xs={12} sm={4} key={item.id}>
                            <CartItem item={item}/>
                        </Grid>
                    ))
                }
                </Grid>
                <div className={classes.cardDetails} >
                    <Typography variant="h4">
                        Subtotal: {cart.subtotal.formatted_with_symbol}
                    </Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Card</Button>
                        <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout Card</Button>
                    </div>
                </div>
                <br />
            </>
        )
    }

    if(!cart.line_items) return 'Loading..'
    console.log('what is cart item: ',cart)

    return (
        <Container>
            <div className={classes.toolbar} />
                <br />
                <Typography classes={classes.title} variant="h4">Your Shopping Cart</Typography>
                <br />
                { !cart.line_items.length ? <EmptyCard /> : <FilledCart /> }
        </Container>
    )
}

export default Cart;