import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
import { Button, IconButton } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { IMenuProps } from '../../../types/IMenuProps';


const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
}));


export default function MobileMenu(props: IMenuProps): JSX.Element {
    const classes = useStyles();
    const theme = useTheme();

    return (<>{
        props.sections.map(section => <>
            <Button href={section.url}>{section.title}</Button>
        </>)
    }</>)
}
