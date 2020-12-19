import React from 'react';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((themes) => ({
    login: {
        color: '#eb1484',
        borderColor: '#eb1484',
        borderWidth: '.2em',
        marginLeft: '38.4%',
    },
}))

const LoginButton = () => {
    const classes = useStyles()
    return (
       <Button 
       className={classes.login}
       variant="outlined"
       size="large">
           Login
       </Button>
    )
}

export default LoginButton
