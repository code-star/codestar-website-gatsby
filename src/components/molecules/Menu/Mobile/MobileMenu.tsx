import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from '@material-ui/core';

//interfaces
import { IMenuProps } from '../../../../types/IMenuProps';


const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2)
    },
}));

export interface IMobileMenuProps {
    sections: IMenuProps[];
}

export default function MobileMenu(props: IMobileMenuProps): JSX.Element {
    const classes = useStyles();

    return (<>{
        <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            //onClick={handleMenu}
        >
            <MenuIcon />
        </IconButton>
    }</>)
}
