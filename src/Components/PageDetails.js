import { Button, Card, CardContent, Grid, CardActions } from '@material-ui/core';
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxwidth: 500
    }
})

export default function PageDetails() {
    const classesData = useStyles();
    const location = useLocation();
    let history = useHistory();
    console.log("location",)
    return (
        <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            style={{ minHeight: '100vh' }}>
            <Grid item xs={6}>
                <Card className={classesData?.root}>

                    <CardContent>
                        {location?.state && JSON.stringify(location?.state) || 'No Data Found'}
                    </CardContent>

                    <CardActions>
                        <Button onClick={() => history.goBack()}>Go to Back</Button>
                    </CardActions>

                </Card>

            </Grid>

        </Grid>
    )
}
