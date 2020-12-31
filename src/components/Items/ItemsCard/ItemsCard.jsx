import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import useStyles from './styles';

const ItemCard = ({ item, handleAddToCart }) => {
    const classes = useStyles();
    
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
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.price.formatted_with_symbol}
                        </Typography>
                    </div>
                    <Typography dangerouslySetInnerHTML={{ __html: item.description }} variant="body2" color="textSecondary" component="p" />
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => handleAddToCart(item.id, 1)}>
                    <AddShoppingCartIcon color=""/>
                </Button>
            </CardActions>
        </Card>
    )
}

export default ItemCard;