import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import useStyles from './styles';

const ItemCard = ({ item }) => {
    const classes = useStyles();
    // console.log('what is my item', item )
    
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={item.media.source}
                    title={item.media.name}
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {`$`}{item.price.formatted}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">
                    <AddShoppingCartIcon color=""/>
                </Button>
            </CardActions>
        </Card>
    )
}

export default ItemCard;