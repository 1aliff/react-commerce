import { Grid } from '@material-ui/core';
import ItemsCard from './ItemsCard/ItemsCard'

import useStyles from './styles'

const Items = ({ items }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
                <Grid container justify="center" spacing={4}>
                    {items.map((item) => (
                        <Grid item key ={item.id} xs={12} sm={6} md={4} lg={3}>
                            <ItemsCard
                                item={item}
                            />
                        </Grid>
                    ))}
                </Grid>
        </main>
    )
}

export default Items;