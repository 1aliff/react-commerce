import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import useStyle from './styles'

const CartItem = ({ item, handleRemoveFromCart, handleUpdateCartQuantity}) => {
    const classes = useStyle();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={item.media.source}
                    title={item.media.name}
                    />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography gutterBottom variant="h6" component="h2">{item.name}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{item.line_total.formatted_with_symbol}</Typography>
                    </div>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <div className={classes.buttons}>
                        <Button type="button" size="small" onClick={() => handleUpdateCartQuantity(item.id, item.quantity - 1)}>-</Button>
                        <Typography>{item.quantity}</Typography>
                        <Button type="button" size="small" onClick={() => handleUpdateCartQuantity(item.id, item.quantity + 1)}>+</Button>
                    </div>
                    <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default CartItem;