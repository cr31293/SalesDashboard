import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    textBoxOne: {
        display: "flex",
        marginTop: "2.5%",
        marginLeft: "33%",
        padding: '0'
    },
    textBoxTwo: {
        display: "flex",
        marginLeft: "45%",
        marginTop: "-10em",
        borderBottomStyle: "solid",
        borderBottomColor: "#4d687e"
    },
    titleOne: {
        display: "flex",
        color: "#38437a",
        fontSize: "120px",
        fontFamily: "'Rajdhani', sans-serif",
        fontWeight: "normal"
    },
    titleTwo: {
        display: "flex",
        color: "#38437a",
        fontSize: "120px",
        fontFamily: "'Rajdhani', sans-serif",
        fontWeight: "normal",
    }
}));

export default function SalesDashText() {
    const classes = useStyles();

    return (
        <Grid>
            <div className={classes.textBoxOne}>
                    <h1 className={classes.titleOne}>
                        Sales
                    </h1>
            </div>
            <div className={classes.textBoxTwo}>
                    <h1 className={classes.titleTwo}>
                        Dash
                    </h1>
            </div>
        </Grid>
    );
}